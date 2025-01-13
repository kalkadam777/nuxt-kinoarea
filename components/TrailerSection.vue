<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const movies = ref([]);
const trailers = ref([]);
const scrollOffset = ref(0);
const randomTrailerKey = ref("");

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
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            options
        );

        movies.value = data.results.map((movie) => ({
            ...movie,
        }));

        const trailerPromises = movies.value.map((movie) =>
            getTrailers(movie.id)
        );

        const trailersArray = await Promise.all(trailerPromises);
        trailers.value = trailersArray.flat();

        // for (const movie of movies.value) {
        //     const movieTrailers = await getTrailers(movie.id);
        //     trailers.value.push(...movieTrailers);
        // }

        const randomIndex = Math.floor(Math.random() * trailers.value.length);
        randomTrailerKey.value = trailers.value[randomIndex];
        console.log(randomTrailerKey.value);
    } catch (error) {
        console.log(error);
    }
});

// Получить трейлеры для фильма
const getTrailers = async (movieId) => {
    const options = {
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
        },
    };
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
    );
    return data.results.filter((video) => video.type === "Trailer");
};

const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft; // Текущая прокрутка
    const scrollWidth = event.target.scrollWidth - event.target.clientWidth; // Полная ширина прокрутки
    const maxOffset = event.target.clientWidth - 400; // Максимальный сдвиг полоски
    scrollOffset.value = (scrollLeft / scrollWidth) * maxOffset; // Рассчитываем сдвиг полоски
};
</script>

<template>
    <div class="mt-16">
        <div class="flex gap-3 justify-between items-center max-sm:flex-col">
            <div class="text-5xl font-bold text-white max-sm:text-3xl">
                Новые трейлеры
            </div>
            <div class="flex items-center gap-5 max-sm:gap-2">
                <div class="text-white text-xl max-sm:text-[18px]">
                    Все трейлеры
                </div>
                <img
                    src="/arrow_next.svg"
                    alt="arrowNext"
                    class="max-sm:w-[13px]"
                />
            </div>
        </div>
        <div
            class="mt-10 relative w-full overflow-hidden"
            style="padding-top: 56.25%"
        >
            <iframe
                class="absolute top-0 left-0 w-full h-full rounded-lg"
                :src="`https://www.youtube.com/embed/${randomTrailerKey.key}`"
                loading="lazy"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
        <div class="flex justify-between mt-5 mb-5">
            <div
                class="flex gap-6 items-center max-sm:flex-col max-sm:items-start max-sm:gap-2"
            >
                <div class="text-4xl text-white font-bold max-sm:text-[25px]">
                    {{ randomTrailerKey.name }}
                </div>
                <div class="flex gap-3.5">
                    <img src="/vkontacte.svg" alt="" class="w-4 h-4" />
                    <img src="/insta_icon.svg" alt="" class="w-4 h-4" />
                    <img src="/facebook_icon.svg" alt="" class="w-4 h-4" />
                    <img src="/twitter_icon.svg" alt="" class="w-4 h-4" />
                    <img src="/point.svg" alt="" />
                </div>
            </div>
            <div class="flex items-center gap-4 justify-center">
                <div class="flex flex-col items-center gap-1">
                    <div class="px-2.5 py-3 rounded-lg bg-[#1B2133;]">
                        <img
                            src="/like1.svg"
                            alt=""
                            class="max-sm:w-[14px] max-sm:h-[14px]"
                        />
                    </div>
                    <span class="text-white max-sm:text-[9px]">3245</span>
                </div>
                <div class="flex flex-col items-center gap-1">
                    <div class="px-2.5 py-3 rounded-lg bg-[#1B2133;]">
                        <img
                            src="/like2.svg"
                            alt=""
                            class="max-sm:w-[14px] max-sm:h-[14px]"
                        />
                    </div>
                    <span class="text-white max-sm:text-[9px]">430</span>
                </div>
            </div>
        </div>

        <div class="relative w-full h-1 bg-gray-700 max-sm:hidden">
            <div
                class="absolute top-0 h-full bg-blue-500 w-[400px] max-sm:w-[200px]"
                :style="{
                    transform: `translateX(${scrollOffset}px)`,
                }"
            ></div>
        </div>
        <div
            class="overflow-x-scroll flex gap-4 mt-4"
            @scroll="handleScroll"
            style="scroll-snap-type: x mandatory"
        >
            <div
                v-for="trailer in trailers.slice(0, 10)"
                :key="trailer.id"
                class="inline-block w-1/4 flex-shrink-0 max-sm:w-[235px]"
                style="scroll-snap-align: start"
            >
                <iframe
                    :src="`https://www.youtube.com/embed/${trailer.key}`"
                    loading="lazy"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="w-full h-48 rounded-lg max-sm:h-[130px] max-sm:w-[235px]"
                ></iframe>
                <div class="text-white mt-2 text-center max-sm:text-[13px]">
                    {{ trailer.name }}
                </div>
            </div>
        </div>
    </div>
</template>
