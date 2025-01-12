<script setup>
defineProps({
    id: Number,
    name: String,
    name2: String,
    imageUrl: String,
    knownFor: String,
});
</script>

<template>
    <div class="relative">
        <div
            class="absolute top-3 left-5 text-yellow-400 max-sm:text-[12px] max-sm:top-1 max-sm:left-2"
        >
            {{ id }}-е место
        </div>
        <img
            :src="`https://image.tmdb.org/t/p/w500${imageUrl}`"
            alt=""
            class="rounded-lg w-96 h-96 max-sm:w-44 max-sm:h-44"
        />
        <div
            class="absolute bottom-4 left-5 flex flex-col items-start gap-2 max-sm:bottom-2 max-sm:left-2"
        >
            <div
                class="text-white text-3xl font-bold max-sm:text-[15px] max-sm:leading-none"
            >
                {{ name }}
            </div>
            <p
                class="text-slate-700 text-xl max-sm:text-[11px] max-sm:leading-none"
            >
                {{ name2 }}
            </p>
            <span
                class="text-yellow-400 max-sm:text-[10px] max-sm:leading-none"
                >{{ knownFor }}</span
            >
        </div>
    </div>
</template>
