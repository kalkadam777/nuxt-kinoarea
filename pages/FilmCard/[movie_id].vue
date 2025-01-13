<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const movie = ref({});
const rating = ref(0);
const { movie_id } = useRoute().params;
const movie_trailers = ref([]);
const randomTrailerKey = ref("");
const trailerMessage = ref("");
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
            `https://api.themoviedb.org/3/movie/${movie_id}?language=ru-Ru`,
            options
        );
        movie.value = data;
        movie_trailers.value = await getTrailers(movie_id);

        // const randomIndex = Math.floor(
        //     Math.random() * movie_trailers.value.length
        // );
        // randomTrailerKey.value = movie_trailers.value[randomIndex];
        // console.log(randomTrailerKey.value);
        if (movie_trailers.value.length > 0) {
            const randomIndex = Math.floor(
                Math.random() * movie_trailers.value.length
            );
            randomTrailerKey.value = movie_trailers.value[randomIndex];
            trailerMessage.value = "Смотреть трейлер";
        } else {
            // Если трейлеров нет, показываем сообщение
            randomTrailerKey.value = null;
            trailerMessage.value = "Трейлер пока недоступен";
        }
    } catch (error) {
        console.log(error);
    }
});

watch(
    () => movie.value.vote_average,
    (newVoteAverage) => {
        if (newVoteAverage) {
            let current = 0;
            const target = newVoteAverage * 10; // Переводим в проценты
            const interval = setInterval(() => {
                if (current < target) {
                    current += 1;
                    rating.value = current;
                } else {
                    clearInterval(interval);
                }
            }, 15);
        }
    },
    { immediate: true } // Запускаем сразу, если данные уже загружены
);

const formattedTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
    )}`;
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
};

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
</script>

<template>
    <div class="flex flex-col items-center gap-9 justify-center mt-14">
        <div class="flex items-center gap-9 justify-center">
            <div
                class="bg-[#191E2E] rounded-xl w-[350px] h-[460px] flex items-center justify-center max-sm:hidden"
            >
                <img
                    :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    alt=""
                    class="rounded-xl w-[350px] h-[460px]"
                    v-if="movie.poster_path != null"
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

            <div class="flex flex-col gap-4 max-sm:gap-1">
                <div class="flex items-center gap-2">
                    <NuxtLink to="/"
                        ><span class="text-[#4F5B7C] max-sm:text-[16px]"
                            >Главная</span
                        ></NuxtLink
                    >
                    <img src="/arrow3.svg" alt="Arrow Icon" />
                    <span class="text-[#4F5B7C] max-sm:text-[16px]"
                        >Фильмы</span
                    >
                    <img src="/arrow3.svg" alt="Arrow Icon" />
                    <span class="text-white max-sm:text-[16px]">{{
                        movie.title
                    }}</span>
                </div>
                <div class="text-white text-4xl font-bold max-sm:text-3xl">
                    {{ movie.title }}
                </div>
                <div class="text-white text-lg max-sm:mb-3">
                    {{ movie.original_title }}
                </div>
                <div class="flex items-start gap-5">
                    <div
                        class="bg-[#191E2E] rounded-xl w-[350px] h-[460px] flex items-center justify-center lg:hidden max-sm:w-[230px] max-sm:h-[310px]"
                    >
                        <img
                            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                            alt=""
                            class="rounded-xl w-[350px] h-[460px] max-sm:w-[230px] max-sm:h-[310px]"
                            v-if="movie.poster_path != null"
                        />
                        <div
                            class="flex flex-col gap-5 items-center relative"
                            v-else
                        >
                            <div
                                class="flex flex-col gap-2 items-center max-sm:gap-0"
                            >
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
                                <p
                                    class="text-[#404961] text-xl font-bold max-sm:text-base"
                                >
                                    Kinoarea
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3 max-sm:flex-col">
                        <div
                            class="flex flex-col gap-1 justify-center items-center"
                        >
                            <div class="rating-circle">
                                <svg viewBox="0 0 36 36" class="circular-chart">
                                    <!-- Базовый серый круг -->
                                    <path
                                        class="circle-bg"
                                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />

                                    <!-- Заполняющий круг -->
                                    <path
                                        class="circle"
                                        :style="{
                                            strokeDasharray: `${rating}, 100`,
                                        }"
                                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <!-- Рейтинг в центре -->
                                <div class="rating-text">7.2</div>
                            </div>
                            <div class="text-white max-sm:text-[15px]">
                                Kinoarea
                            </div>
                        </div>
                        <div
                            class="flex flex-col gap-1 justify-center items-center"
                        >
                            <div class="rating-circle">
                                <svg viewBox="0 0 36 36" class="circular-chart">
                                    <!-- Базовый серый круг -->
                                    <path
                                        class="circle-bg"
                                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />

                                    <!-- Заполняющий круг -->
                                    <path
                                        class="circle"
                                        :style="{
                                            strokeDasharray: `${rating}, 100`,
                                        }"
                                        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <!-- Рейтинг в центре -->
                                <div class="rating-text">
                                    {{ movie.vote_average?.toFixed(2) }}
                                </div>
                            </div>
                            <div class="text-white max-sm:text-[15px]">
                                IMDb
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-sm:mt-3">
                    <p
                        class="text-white w-[600px] max-sm:text-[15px] max-sm:w-[348px]"
                    >
                        {{ movie.overview }}
                    </p>
                </div>
                <div
                    class="flex items-center gap-6 max-sm:flex-col max-sm:mt-10"
                >
                    <div
                        class="flex gap-2 items-center justify-center cursor-pointer border-2 border-white py-5 px-3 rounded-xl text-center text-white text-base max-sm:py-3"
                    >
                        <img src="/play_icon.svg" alt="" />
                        <p>Смотреть трейлер</p>
                    </div>

                    <div class="flex gap-3.5 max-sm:gap-5">
                        <img src="/vk_white.svg" alt="" class="w-4 h-4" />
                        <img src="/insta_white.svg" alt="" class="w-4 h-4" />
                        <img src="/f_white.svg" alt="" class="w-4 h-4" />
                        <img src="/twit_white.svg" alt="" class="w-4 h-4" />
                        <img src="/point3.svg" alt="" class="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex gap-5 w-full justify-around max-sm:flex-col max-sm:gap-0 max-sm:text-[12px]"
        >
            <div class="flex gap-5 max-sm:gap-2">
                <div class="flex flex-col gap-2 text-white max-sm:w-[100px]">
                    <p>Год:</p>
                    <p>Страна:</p>
                    <p>Режиссер:</p>
                    <p>Сценарий:</p>
                    <p>Продюсер:</p>
                    <p>Оператор:</p>
                    <p>Композитор:</p>
                </div>
                <div class="flex flex-col gap-2 text-yellow-400">
                    <p>{{ movie.release_date?.split("-")[0] }}</p>
                    <p>
                        {{ movie.origin_country?.[0] || "Страна не указана" }}
                    </p>
                    <p>Фрэнсис Аннан</p>
                    <p>Фрэнсис Аннан, Л.Х. Адамс</p>
                    <p>Дэвид Баррон, Марк Блэйни</p>
                    <p>Джеффри Холл</p>
                    <p>Дэвид Хиршфелдер</p>
                    <p></p>
                </div>
            </div>
            <div class="flex gap-5 max-sm:gap-2">
                <div class="flex flex-col gap-2 text-white">
                    <p>Художник:</p>
                    <p>Монтаж:</p>
                    <p>Жанр:</p>
                    <p>Сборы в мире:</p>
                    <p>Премьера (мир):</p>
                    <p>Возраст:</p>
                    <p>Время:</p>
                </div>
                <div class="flex flex-col gap-2 text-yellow-400">
                    <p>Скотт Бёрд, Эрика Брайан</p>
                    <p>Ник Фентон</p>
                    <p>
                        {{
                            movie.genres
                                ? movie.genres
                                      .map((item) => item.name)
                                      .join(", ")
                                : "Жанры не указаны"
                        }}
                    </p>
                    <p>
                        ${{
                            movie.revenue
                                ?.toLocaleString("en-US")
                                .replace(/,/g, " ")
                        }}
                    </p>
                    <p>{{ formatDate(movie.release_date) }}</p>
                    <p>16+</p>
                    <p>
                        {{ movie.runtime }} мин. /
                        {{ formattedTime(movie.runtime) }}
                    </p>
                </div>
            </div>
        </div>

        <FilmCast :movie_id="movie_id" />
        <div class="mt-16 w-full">
            <div
                class="flex gap-3 justify-between items-center max-sm:flex-col"
            >
                <div class="text-5xl font-bold text-white max-sm:hidden">
                    Трейлеры фильма
                </div>
                <div class="text-3xl font-bold text-white lg:hidden">
                    Новые трейлеры
                </div>
                <div class="flex items-center gap-5">
                    <div class="text-white text-xl max-sm:text-[18px]">
                        Все трейлеры
                    </div>
                    <img src="/arrow_next.svg" alt="arrowNext" />
                </div>
            </div>
            <div
                v-if="randomTrailerKey?.key"
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
            <div v-else class="mt-10 text-center text-white text-lg">
                Трейлеры пока недоступны
            </div>
        </div>
    </div>
</template>

<style scoped>
.rating-circle {
    position: relative;
    width: 70px;
    height: 70px;
}

.circular-chart {
    width: 70px;
    height: 70px;
    transform: rotate(-90deg);
}

.circle-bg {
    fill: none;
    stroke: #e6e6e6; /* Серый цвет фона */
    stroke-width: 3.8;
}

.circle {
    fill: none;
    stroke: #76c043; /* Зеленый цвет заполнения */
    stroke-width: 3.8;
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease;
}

.rating-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    font-weight: bold;
    color: white;
}

@media (max-width: 480px) {
    .rating-text {
        font-size: 13px;
    }
    .rating-circle {
        position: relative;
        width: 52px;
        height: 52px;
    }
    .circular-chart {
        width: 52px;
        height: 52px;
        transform: rotate(-90deg);
    }
}
</style>
