<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
const props = defineProps({
    movie_id: String,
});

const actors = ref([]);
const showAllActors = ref(false);
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
            `https://api.themoviedb.org/3/movie/${props.movie_id}/credits?language=en-US`,
            options
        );
        actors.value = data.cast;
        // console.log(actors.value);
    } catch (error) {
        console.log(error);
    }
});

const router = useRouter();
const goToPersonCard = (person_id) => {
    router.push(`/actors/${person_id}`);
};
</script>

<template>
    <div class="flex flex-col gap-8">
        <div class="flex gap-3 justify-between items-center max-sm:flex-col">
            <div class="text-3xl font-bold text-white">В главных ролях:</div>
            <div class="flex items-center gap-5">
                <div class="text-white text-xl">Все актёры</div>
                <img
                    src="/arrow_next.svg"
                    alt="arrowNext"
                    class="cursor-pointer opacity-70 hover:opacity-100 transition hover:translate-x-1"
                    @click="showAllActors = !showAllActors"
                />
            </div>
        </div>
        <div class="grid grid-cols-5 gap-5 max-sm:grid-cols-2" v-auto-animate>
            <div
                v-for="actor in showAllActors ? actors : actors.slice(0, 5)"
                :key="actor.id"
                @click="goToPersonCard(actor.id)"
                class="cursor-pointer translate-y-0 hover:translate-y-[-5px] transition"
            >
                <img
                    :src="`https://image.tmdb.org/t/p/w500${actor.profile_path}`"
                    alt=""
                    class="w-[248px] h-[230px] rounded-xl max-sm:w-[167px] max-sm:h-[180px]"
                />
                <p class="text-lg text-white mt-5 max-sm:text-base">
                    {{ actor.name }}
                </p>
                <p class="font-extralight text-slate-400 max-sm:text-[12px]">
                    {{ actor.original_name }}
                </p>
                <p class="text-base text-yellow-400 max-sm:text-[12px]">
                    {{ actor.character }}
                </p>
            </div>
        </div>
    </div>
</template>
