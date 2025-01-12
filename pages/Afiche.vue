<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const groupedMovies = ref({});

const groupAndSortMoviesByReleaseDate = (movies) => {
    movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    return movies.reduce((acc, movie) => {
        const releaseDate = movie.release_date;
        if (!acc[releaseDate]) {
            acc[releaseDate] = [];
        }
        acc[releaseDate].push(movie);
        return acc;
    }, {});
};

onMounted(async () => {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs", // Укажите ваш токен API
            },
        };
        const { data } = await axios.get(
            "https://api.themoviedb.org/3/discover/movie?language=ru-Ru&page=1&primary_release_year=2025&sort_by=popularity.desc",
            options
        );
        groupedMovies.value = groupAndSortMoviesByReleaseDate(data.results);
        console.log(groupedMovies.value);
    } catch (error) {
        console.error("Ошибка при загрузке фильмов:", error);
    }
});
</script>

<template>
    <div class="mt-16 min-h-screen px-12">
        <h2 class="text-5xl font-bold text-white mb-4">
            График премьер фильмов
        </h2>
        <div class="flex items-center gap-2 mb-6">
            <NuxtLink to="/"
                ><span class="text-[#4F5B7C]">Главная</span></NuxtLink
            >
            <img src="/arrow3.svg" alt="Arrow Icon" />
            <span class="text-white">Афиша</span>
        </div>
        <p class="text-white max-w-3xl mb-8">
            Узнайте даты премьер самых популярных фильмов 2025 года! График
            обновляется автоматически.
        </p>

        <div>
            <div
                v-for="(movies, date) in groupedMovies"
                :key="date"
                class="mb-8"
            >
                <h3 class="text-2xl font-bold text-white mb-4">{{ date }}</h3>
                <div class="grid grid-cols-4 gap-4">
                    <MovieCard
                        v-for="movie in movies"
                        :id="movie.id"
                        :key="movie.id"
                        :imageUrl="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                        :title="movie.title"
                        :genre="movie.genre"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Добавьте стили для настройки внешнего вида */
</style>
