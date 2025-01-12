<script setup>
import { ref, defineProps } from "vue";
import { genreMap, genreMapRu } from "~/genreMap";
import { useRouter } from "vue-router";
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
const ratingColor = computed(() => {
    if (props.movie.vote_average >= 7) {
        return "bg-green-500";
    } else if (props.movie.vote_average >= 5) {
        return "bg-yellow-500";
    } else {
        return "bg-red-500";
    }
});
</script>

<template>
    <div
        class="flex flex-col items-start w-full mt-5 mb-3 cursor-pointer"
        @click="goToFilmCard"
    >
        <div
            class="bg-[#1E2538] flex items-center justify-between w-full px-4 py-3 rounded-xl"
        >
            <div class="flex items-center gap-4">
                <div
                    class="bg-[#191E2E] rounded-xl w-20 h-28 flex items-center justify-center max-sm:w-12 max-sm:h-20"
                >
                    <img
                        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                        alt=""
                        class="rounded-xl w-20 h-28 max-sm:w-12 max-sm:h-20"
                        v-if="movie.poster_path != null"
                    />
                    <img src="/camera1.svg" alt="" v-else />
                </div>
                <div class="">
                    <div class="flex gap-1">
                        <p class="text-white font-bold text-xl max-sm:text-sm">
                            {{ movie.title }}
                        </p>
                        <p class="text-white font-bold text-xl max-sm:hidden">
                            ({{ movie.release_date }})
                        </p>
                    </div>
                    <p class="text-slate-500 max-sm:text-sm">
                        {{ movie.original_title }}
                    </p>
                    <p class="text-yellow-400 max-sm:hidden">
                        {{
                            movie.genre_ids
                                .map((id) => genreMapRu[id])
                                .join(", ")
                        }}
                    </p>
                </div>
            </div>
            <div
                :class="[
                    'text-white px-3 h-10 py-2 rounded-lg text-center max-sm:h-5 max-sm:text-sm max-sm:px-2 max-sm:py-0',
                    ratingColor,
                ]"
            >
                {{ Math.round(movie.vote_average * 10) / 10 }}
            </div>
        </div>
    </div>
</template>
