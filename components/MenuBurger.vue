<script setup>
const emit = defineEmits(["closeMenuBurger"]);
const handleClose = () => {
    emit("closeMenuBurger");
};
</script>

<template>
    <div class="relative pt-12 flex flex-col gap-5 items-center justify-center">
        <img
            src="/close.svg"
            class="w-4 h-4 absolute top-14 right-6"
            alt=""
            @click="emit('closeMenuBurger')"
        />
        <div class="flex gap-2 items-center">
            <img src="/cinema_icon.svg" class="w-[20px] h-[20px]" alt="" />
            <NuxtLink to="/">
                <p class="text-xl font-bold">
                    <span class="text-blue-700">Kino</span>
                    <span class="text-white">area</span>
                </p>
            </NuxtLink>
        </div>
        <ul
            class="flex flex-col items-center gap-5 text-base text-white"
            @click="handleClose"
        >
            <NuxtLink to="/Afiche">Афиша</NuxtLink>
            <NuxtLink to="/FilmCard"><li>Фильмы</li></NuxtLink>
            <li>Актёры</li>
            <li>Новости</li>
            <NuxtLink to="/Selections"><li>Подборки</li></NuxtLink>
            <NuxtLink to="/profile"><li>Категории</li></NuxtLink>
        </ul>
    </div>
</template>
