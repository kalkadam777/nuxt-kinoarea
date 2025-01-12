<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
    id: Number,
    number: Number,
    title: String,
    imgUrl: String,
    current: String,
    total: String,
});
const router = useRouter();

const goToFilmCard = () => {
    router.push(`/FilmCard/${props.id}`);
};
</script>

<template>
    <div class="flex gap-1 items-center" @click="goToFilmCard">
        <img
            :src="`https://image.tmdb.org/t/p/w500${imgUrl}`"
            alt=""
            class="w-[95px] h-[141px] rounded-lg max-sm:w-[75px] max-sm:h-[110px]"
        />
        <div>
            <div
                class="text-white text-sm font-bold mb-2 w-[120px] max-sm:w-[100px]"
            >
                {{ `${number}. ${title}` }}
            </div>
            <div class="text-yellow-400 text-sm max-sm:text-[12px]">
                {{ current }}
            </div>
            <!-- <div class="text-slate-500 text-sm">{{ total }}</div> -->
        </div>
    </div>
</template>
