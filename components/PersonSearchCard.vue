<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
    person: {
        type: Object,
        required: true,
        default: () => {},
    },
});
const router = useRouter();
const goToPersonCard = () => {
    router.push(`/actors/${props.person.id}`);
};
</script>

<template>
    <div
        class="flex flex-col items-start w-full mt-5 mb-3 cursor-pointer"
        @click="goToPersonCard"
    >
        <!-- <div class="text-white text-xl mt-5 mb-3">Фильмы</div> -->

        <div
            class="bg-[#1E2538] flex items-center justify-between w-full px-4 py-3 rounded-xl"
        >
            <div class="flex items-center gap-4">
                <div
                    class="bg-[#191E2E] rounded-xl w-20 h-28 flex items-center justify-center max-sm:w-12 max-sm:h-20"
                >
                    <img
                        :src="`https://image.tmdb.org/t/p/w500${person.profile_path}`"
                        alt=""
                        class="rounded-xl w-20 h-28 max-sm:w-12 max-sm:h-20"
                        v-if="person.profile_path != null"
                    />
                    <img src="/camera1.svg" alt="" v-else />
                </div>
                <div>
                    <p class="text-white font-bold text-xl max-sm:text-sm">
                        {{ person.name }}
                    </p>
                    <p class="text-slate-500 max-sm:text-xs">
                        {{ person.original_name }}
                    </p>
                    <p class="text-yellow-400 max-sm:text-xs">
                        {{ person.known_for_department }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
