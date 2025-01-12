<script setup>
const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => {},
    },
});
const router = useRouter();

const goToFilmCard = () => {
    router.push(`/FilmCard/${props.movie.id}`);
};
</script>

<template>
    <div class="flex items-center justify-between w-full max-sm:flex-col">
        <div class="flex items-center gap-5">
            <img
                :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                alt=""
                class="rounded-xl w-[200px] h-[280px] max-sm:w-[144px] max-sm:h-[205px]"
            />
            <div class="flex flex-col gap-1 max-sm:gap-0">
                <p class="text-xl text-white font-medium max-sm:text-[17px]">
                    {{ movie.title }} ({{ movie.release_date?.split("-")[0] }})
                </p>
                <p class="text-[#54689E] text-base max-sm:text-[13px]">
                    {{ movie.original_title }}
                </p>
                <p class="text-yellow-400 max-sm:text-[13px] max-sm:w-[180px]">
                    {{ movie.genre }}
                </p>
                <p class="text-[#54689E] text-base max-sm:text-[13px]">
                    {{ movie.character }}
                </p>
                <div class="flex gap-2 items-start lg:hidden">
                    <div class="flex flex-col gap-2 items-center">
                        <div
                            class="text-white bg-green-500 px-4 h-10 py-2 rounded-lg text-center max-sm:text-[15px] max-sm:h-8 max-sm:py-1"
                        >
                            7.2
                        </div>
                        <div class="text-white max-sm:text-[15px]">
                            Kinoarea
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 items-center">
                        <div
                            class="text-white bg-green-500 px-4 h-10 py-2 rounded-lg text-center max-sm:text-[15px] max-sm:h-8 max-sm:py-1"
                        >
                            {{ Math.round(movie.vote_average * 10) / 10 }}
                        </div>
                        <div class="text-white max-sm:text-[15px]">IMDb</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-4 items-start max-sm:hidden">
            <div class="flex flex-col gap-2 items-center">
                <div
                    class="text-white bg-green-500 px-4 h-10 py-2 rounded-lg text-center max-sm:text-[15px] max-sm:h-8 max-sm:py-1"
                >
                    7.2
                </div>
                <div class="text-white max-sm:text-[15px]">Kinoarea</div>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <div
                    class="text-white bg-green-500 px-4 h-10 py-2 rounded-lg text-center max-sm:text-[15px] max-sm:h-8 max-sm:py-1"
                >
                    {{ Math.round(movie.vote_average * 10) / 10 }}
                </div>
                <div class="text-white max-sm:text-[15px]">IMDb</div>
            </div>
            <button
                @click="goToFilmCard"
                class="bg-[#3657CB] rounded-lg px-5 py-4 text-base shadow-xl shadow-[#375ee866] font-medium text-white ml-10"
            >
                Карточка фильма
            </button>
        </div>
    </div>
</template>
