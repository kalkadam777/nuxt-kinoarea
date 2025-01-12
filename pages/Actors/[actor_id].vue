<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { genreMap, genreMapRu } from "../genreMap";
const actor = ref({});
const movies = ref([]);
const images = ref([]);
const showAllImages = ref(false);
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
const currentPage = ref(1);
const moviesPerPage = ref(4);
const { actor_id } = useRoute().params;
onMounted(async () => {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
            },
        };
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/person/${actor_id}?language=ru-RU`,
            options
        );
        actor.value = data;
        movies.value = await getMovies(actor_id);
        images.value = await getImages(actor_id);
        console.log(images.value);
    } catch (error) {
        console.log(error);
    }
});

const totalPages = computed(() => {
    return Math.ceil(movies.value.length / moviesPerPage.value);
});

const paginatedMovies = computed(() => {
    const start = (currentPage.value - 1) * moviesPerPage.value;
    const end = start + moviesPerPage.value;
    return movies.value.slice(start, end);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const getMovies = async (personId) => {
    const options = {
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
        },
    };
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=ru-Ru`,
        options
    );
    return data.cast
        .sort((a, b) => b.popularity - a.popularity)
        .map((movie) => ({
            ...movie,
            genre: movie.genre_ids.map((id) => genreMapRu[id]).join(", "),
        }));
};

const getImages = async (personId) => {
    const options = {
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
        },
    };
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/images`,
        options
    );
    return data.profiles;
};
</script>

<template>
    <div class="flex flex-col items-center gap-9 justify-center mt-14 w-full">
        <div class="flex items-start gap-12 justify-center">
            <div
                class="bg-[#191E2E] rounded-xl w-[350px] h-[460px] flex items-center justify-center max-sm:hidden"
            >
                <img
                    :src="`https://image.tmdb.org/t/p/w500${actor.profile_path}`"
                    alt=""
                    class="rounded-xl w-[350px] h-[460px]"
                    v-if="actor.profile_path != null"
                />
                <div class="flex flex-col gap-5 items-center relative" v-else>
                    <div class="flex flex-col gap-2 items-center">
                        <img src="/poster1.svg" alt="" />
                        <p class="text-[#404961] text-3xl font-medium">
                            К сожалению,
                        </p>
                        <p class="text-[#404961] text-3xl font-medium">
                            Постер отсутствует
                        </p>
                    </div>
                    <div class="flex gap-2 absolute -bottom-28">
                        <img src="/cin1.svg" alt="" />
                        <p class="text-[#404961] text-xl font-bold">Kinoarea</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-2">
                        <NuxtLink to="/"
                            ><span class="text-[#4F5B7C]"
                                >Главная</span
                            ></NuxtLink
                        >
                        <img src="/arrow3.svg" alt="Arrow Icon" />
                        <span class="text-[#4F5B7C]">Актёры</span>
                        <img src="/arrow3.svg" alt="Arrow Icon" />
                        <span class="text-white">{{ actor.name }}</span>
                    </div>
                    <div class="text-white text-4xl font-bold max-sm:text-3xl">
                        {{ actor.name }}
                    </div>
                    <div class="text-white text-lg">{{ actor.name }}</div>
                    <div
                        class="bg-[#191E2E] rounded-xl w-[350px] h-[460px] flex items-center justify-center lg:hidden max-sm:w-[232px] max-sm:h-[347px]"
                    >
                        <img
                            :src="`https://image.tmdb.org/t/p/w500${actor.profile_path}`"
                            alt=""
                            class="rounded-xl w-[350px] h-[460px] max-sm:w-[232px] max-sm:h-[347px]"
                            v-if="actor.profile_path != null"
                        />
                        <div
                            class="flex flex-col gap-5 items-center relative"
                            v-else
                        >
                            <div class="flex flex-col gap-2 items-center">
                                <img src="/poster1.svg" alt="" />
                                <p
                                    class="text-[#404961] text-3xl font-medium max-sm:text-xl"
                                >
                                    К сожалению,
                                </p>
                                <p
                                    class="text-[#404961] text-3xl font-medium max-sm:text-xl"
                                >
                                    Постер отсутствует
                                </p>
                            </div>
                            <div
                                class="flex gap-2 absolute -bottom-28 max-sm:-bottom-16"
                            >
                                <img src="/cin1.svg" alt="" />
                                <p class="text-[#404961] text-xl font-bold">
                                    Kinoarea
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2 max-sm:text-[12px]">
                    <div class="flex gap-5">
                        <div class="flex flex-col gap-2 text-white">
                            <p>Пол:</p>
                            <p>Дата рождения:</p>
                            <p>Место рождения:</p>
                            <p>Биография:</p>
                        </div>
                        <div class="flex flex-col gap-2 text-yellow-400">
                            <p>
                                {{ actor.gender == 2 ? "Мужской" : "Женский" }}
                            </p>
                            <p>{{ actor.birthday }}</p>
                            <p>{{ actor.place_of_birth }}</p>
                        </div>
                    </div>
                    <p class="w-[450px] text-yellow-400 max-sm:w-[348px]">
                        {{ actor.biography }}
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-16 max-sm:mt-6">
            <div
                class="flex gap-3 justify-between items-center max-sm:flex-col"
            >
                <div class="text-5xl font-bold text-white max-sm:text-3xl">
                    Лучшие фильмы
                </div>
                <div class="flex justify-center items-center gap-5">
                    <img
                        src="/Arrow1.svg"
                        alt=""
                        class="cursor-pointer opacity-70 hover:opacity-100 transition hover:-translate-x-1 max-sm:w-[25px]"
                        @click="prevPage"
                        :class="{
                            'opacity-30 pointer-events-none': currentPage === 1,
                        }"
                    />
                    <p class="text-white text-xl max-sm:text-[17px]">
                        {{ currentPage }}/{{ totalPages }}
                    </p>
                    <img
                        src="/Arrow2.svg"
                        alt=""
                        class="cursor-pointer opacity-70 hover:opacity-100 transition hover:translate-x-1 max-sm:w-[25px]"
                        @click="nextPage"
                        :class="{
                            'opacity-30 pointer-events-none':
                                currentPage === totalPages,
                        }"
                    />
                </div>
            </div>

            <div
                class="grid grid-cols-4 gap-4 mt-8 max-sm:grid-cols-2"
                v-auto-animate
            >
                <MovieCard
                    v-for="movie in paginatedMovies"
                    :id="movie.id"
                    :key="movie.id"
                    :imageUrl="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    :title="movie.title"
                    :genre="movie.genre"
                />
            </div>
        </div>

        <div class="mt-16 w-full max-sm:mt-6">
            <div
                class="flex gap-3 justify-between items-center max-sm:flex-col"
            >
                <div class="text-5xl font-bold text-white max-sm:text-3xl">
                    Фото
                </div>
                <div class="flex items-center gap-5">
                    <div class="text-white text-xl max-sm:text-[18px]">
                        Все фото
                    </div>
                    <img
                        src="/arrow_next.svg"
                        alt="arrowNext"
                        @click="showAllImages = !showAllImages"
                    />
                </div>
            </div>
            <div class="text-white mt-3 text-lg mb-4">
                {{ actor.name }}
            </div>
            <div
                class="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-900"
            >
                <div
                    v-for="(image, index) in showAllImages
                        ? images
                        : images.slice(0, 3)"
                    :key="index"
                    class="relative overflow-hidden rounded-lg group"
                >
                    <img
                        :src="`${imageBaseUrl}${image.file_path}`"
                        alt="Image"
                        class="w-full h-auto object-cover"
                    />
                    <!-- Overlay для последнего элемента -->
                    <div
                        v-if="index === images.value?.length - 1"
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl group-hover:opacity-100 transition-opacity"
                    >
                        +196
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-16 w-full flex flex-col gap-9 max-sm:mt-6">
            <div class="">
                <div class="text-5xl font-bold text-white max-sm:text-3xl">
                    Фильмы
                </div>
            </div>

            <div class="flex flex-col gap-5 items-start">
                <MiniFilmCard
                    v-for="movie in movies.slice(0, 10)"
                    :key="movie.id"
                    :movie="movie"
                />
            </div>
        </div>
    </div>
</template>
