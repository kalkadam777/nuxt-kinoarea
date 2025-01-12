<script setup>
import axios from "axios";
const movies = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const MAX_PAGES = 100;
const isLoading = ref(true);
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
            `https://api.themoviedb.org/3/discover/movie?language=ru-RU&page=${page}&primary_release_year=2025&sort_by=popularity.desc`,
            options
        );

        movies.value = data.results.slice(0, moviesCount.value).map((movie) => {
            const releaseDate = new Date(movie.release_date);
            const formattedDate = new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "Asia/Almaty",
            }).format(releaseDate);

            return {
                ...movie,
                formattedReleaseDate: `${formattedDate} in Kazakhstan`,
            };
        });
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
            class="flex gap-3 justify-between items-center max-sm:justify-center"
        >
            <div class="text-5xl font-bold text-white max-sm:text-3xl">
                Ожидаемые новинки
            </div>
            <div
                class="flex justify-center items-center mt-8 gap-5 max-sm:hidden"
            >
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
                :genre="movie.formattedReleaseDate"
            />
        </div>
        <div class="flex justify-center items-center mt-8 gap-5 lg:hidden">
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
