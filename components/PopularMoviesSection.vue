<script setup>
import axios from "axios";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { genreMap, genreMapRu } from "../genreMap";
const movies = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const MAX_PAGES = 100;
const isLoading = ref(true);
const selectedYear = ref(2024);
const isMobile = ref(false);

const checkDeviceType = () => {
    if (typeof window !== "undefined") {
        isMobile.value = window.innerWidth <= 768;
    }
};

const moviesCount = computed(() => (isMobile.value ? 2 : 4));
const fetchMovies = async (page = 1) => {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
            },
        };
        const { data } = await axios.get(
            // `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru-Ru&page=${page}&sort_by=popularity.desc&year=${selectedYear.value}`,
            options
        );
        movies.value = data.results
            .slice(0, moviesCount.value)
            .map((movie) => ({
                ...movie,
                genre: movie.genre_ids.map((id) => genreMapRu[id]).join(", "),
            }));
        totalPages.value = Math.min(data.total_pages, MAX_PAGES);
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        isLoading.value = false;
    }
};

const changePage = (direction) => {
    if (direction === "prev" && currentPage.value > 1) {
        currentPage.value--;
    } else if (direction === "next" && currentPage.value < totalPages.value) {
        currentPage.value++;
    }
    fetchMovies(currentPage.value);
};

const changeYear = (year) => {
    selectedYear.value = year;
    currentPage.value = 1;
    fetchMovies();
};

onMounted(() => {
    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    fetchMovies();
});

onUnmounted(() => {
    window.removeEventListener("resize", checkDeviceType);
});

// Следим за изменением isMobile и перезагружаем фильмы
watch(isMobile, () => {
    fetchMovies(currentPage.value);
});
</script>

<template>
    <div class="mt-16">
        <div
            class="flex gap-3 justify-between items-center max-sm:justify-center max-sm:gap-2"
        >
            <div class="text-5xl font-bold text-white max-sm:text-[30px]">
                Популярные фильмы
            </div>
            <img src="/vector_mobile.svg" alt="" class="lg:hidden" />
            <div class="w-14 border border-white border-b max-sm:hidden"></div>
            <ul class="flex gap-4 text-slate-500 max-sm:hidden">
                <li
                    v-for="year in [2024, 2023, 2022, 2021, 2020, 2019, 2018]"
                    :key="year"
                    @click="changeYear(year)"
                    :class="{
                        'text-white font-bold': selectedYear === year,
                        'cursor-pointer hover:text-white transition':
                            selectedYear !== year,
                    }"
                >
                    {{ year === 2024 ? "Всё время" : year }}
                </li>
            </ul>
        </div>

        <div
            class="grid grid-cols-4 gap-4 mt-8 max-sm:grid-cols-2"
            v-auto-animate
        >
            <div
                v-if="isLoading"
                v-for="n in moviesCount"
                :key="n"
                class="animate-pulse"
            >
                <div
                    class="w-72 h-96 bg-gray-700 rounded-lg max-sm:w-[170px] max-sm:h-[250px]"
                ></div>
                <div
                    class="w-48 h-4 bg-gray-600 rounded mt-2 max-sm:w-[150px]"
                ></div>
                <div class="w-32 h-4 bg-gray-600 rounded mt-1"></div>
            </div>

            <MovieCard
                v-else
                v-for="movie in movies"
                :id="movie.id"
                :key="movie.id"
                :imageUrl="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                :title="movie.title"
                :genre="movie.genre"
                :vote_average="movie.vote_average"
            />
        </div>

        <div class="flex justify-center items-center mt-8 gap-5">
            <img
                src="/Arrow1.svg"
                alt=""
                class="cursor-pointer opacity-70 hover:opacity-100 transition hover:-translate-x-1 max-sm:w-[24px]"
                @click="changePage('prev')"
            />
            <p class="text-white text-xl font-extralight max-sm:text-base">
                {{ currentPage }}/{{ totalPages }}
            </p>
            <img
                src="/Arrow2.svg"
                alt=""
                class="cursor-pointer opacity-70 hover:opacity-100 transition hover:translate-x-1 max-sm:w-[24px]"
                @click="changePage('next')"
            />
        </div>
    </div>
</template>
