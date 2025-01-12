<script setup>
defineProps({
    date: String,
    imageUrl: String,
    title: String,
});
</script>

<template>
    <div class="relative">
        <p class="absolute top-2 left-3 text-white text-sm max-sm:text-[12px]">
            {{ date }}
        </p>
        <img
            :src="imageUrl"
            alt=""
            class="rounded-xl max-sm:w-[240px] max-sm:h-[135px]"
            height="100"
            width="200"
        />
        <p
            class="absolute bottom-5 left-3 text-white w-56 font-bold text-xs max-sm:w-36 max-sm:text-[13px] max-sm:bottom-3"
        >
            {{ title }}
        </p>
    </div>
</template>
