<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    id: Number,
    imageUrl: String,
    title: String,
    genre: String,
    vote_average: Number,
});

const ratingColor = computed(() => {
    if (props.vote_average >= 7) {
        return "bg-green-500";
    } else if (props.vote_average >= 5) {
        return "bg-yellow-500";
    } else {
        return "bg-red-500";
    }
});

const router = useRouter();

const goToFilmCard = () => {
    router.push(`/FilmCard/${props.id}`);
};
</script>

<template>
    <div
        @click="goToFilmCard"
        class="relative flex flex-col items-start cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
        <img :src="imageUrl" alt="" class="w-80 h-120 rounded-lg mb-2" />
        <p class="text-lg text-white font-medium max-sm:text-base">
            {{ title }}
        </p>
        <p class="text-base text-yellow-400 max-sm:text-xs">{{ genre }}</p>
        <div
            v-show="vote_average == null ? false : true"
            :class="[
                'absolute text-white px-3 h-8 py-1 rounded-lg text-center top-3 right-2 max-sm:text-xs max-sm:h-5 max-sm:px-2 max-sm:py-0.5 max-sm:top-2 ',
                ratingColor,
            ]"
        >
            {{ ((vote_average * 10) / 10).toFixed(1) }}
        </div>
    </div>
</template>
