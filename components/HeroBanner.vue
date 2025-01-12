<script setup>
import axios from "axios";
import { genreMap, genreMapRu } from "../genreMap";
import { useMovieStore } from "~/store/MovieStore";

const movies = ref([]);
const selectedGenre = ref(null);
const isLoading = ref(true);
const showAllMovies = ref(false);
const movieGenre = useMovieStore();

const fetchMovies = async () => {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
            },
        };

        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru-Ru${
            selectedGenre.value ? `&with_genres=${selectedGenre.value}` : ""
        }`;
        // console.log(url);

        const { data } = await axios.get(url, options);
        movies.value = data.results.map((movie) => ({
            ...movie,
            genre: movie.genre_ids.map((id) => genreMapRu[id]).join(", "),
        }));
        console.log(movies.value);
        console.log(selectedGenre.value);
    } catch (error) {
        console.log(error);
    } finally {
        isLoading.value = false;
    }
};

const changeGenre = (genreId) => {
    selectedGenre.value = genreId;
    fetchMovies();
};

onMounted(() => {
    fetchMovies();
});
</script>

<template>
    <div class="mt-16 mb-16">
        <div
            class="flex gap-3 justify-between items-center max-sm:justify-center"
        >
            <div class="text-5xl font-bold text-white max-sm:text-[32px]">
                Сейчас в кино
            </div>
            <img src="/vector_mobile.svg" alt="" class="lg:hidden" />
            <div class="w-14 border border-white border-b max-sm:hidden"></div>
            <ul class="flex gap-4 text-slate-500 max-sm:hidden">
                <li
                    v-for="item in movieGenre.moviesGenre.slice(0, 7)"
                    :key="item.id"
                    :class="{
                        'text-white underline': selectedGenre === item.genreId,
                        'cursor-pointer hover:text-white transition':
                            selectedGenre !== item.genreId,
                    }"
                    @click="changeGenre(item.genreId)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>

        <div
            class="grid grid-cols-4 gap-5 mt-8 max-sm:grid-cols-2"
            v-auto-animate
        >
            <div v-if="isLoading" v-for="n in 8" :key="n" class="animate-pulse">
                <div class="w-[170px] h-[250px] bg-gray-700 rounded-lg"></div>
                <div class="w-[150px] h-4 bg-gray-600 rounded mt-2"></div>
                <div class="w-32 h-4 bg-gray-600 rounded mt-1"></div>
            </div>

            <MovieCard
                v-else
                v-for="movie in showAllMovies ? movies : movies.slice(0, 8)"
                :key="movie.id"
                :id="movie.id"
                :imageUrl="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                :title="movie.title"
                :genre="movie.genre"
                :vote_average="movie.vote_average"
            />
        </div>

        <div
            v-if="!isLoading"
            @click="showAllMovies = !showAllMovies"
            class="cursor-pointer mt-5 border-2 border-white py-5 px-3 w-52 rounded-lg text-center text-white text-base m-auto max-sm:px-1 max-sm:py-3"
        >
            {{ showAllMovies ? "Скрыть новинки" : "Все новинки" }}
        </div>
    </div>
</template>
