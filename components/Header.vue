<script setup>
const emit = defineEmits([
    "openLoginModal",
    "openSearchModal",
    "openSearchModalMobile",
    "openMenuBurger",
]);
</script>

<template>
    <div
        class="flex items-center justify-between m-auto mt-4 max-sm:items-start"
    >
        <div class="flex gap-2 items-center lg:hidden">
            <img
                src="/menu_sm.svg"
                alt=""
                class="cursor-pointer"
                @click="emit('openMenuBurger')"
            />
            <img
                src="/search_sm.svg"
                alt=""
                class="cursor-pointer"
                @click="emit('openSearchModalMobile')"
            />
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex gap-2 items-center">
                <img
                    src="/cinema_icon.svg"
                    class="max-sm:w-[20px] max-sm:h-[20px]"
                    alt=""
                />
                <NuxtLink to="/">
                    <p class="text-2xl font-bold max-sm:text-xl">
                        <span class="text-blue-700">Kino</span>
                        <span class="text-white">area</span>
                    </p>
                </NuxtLink>
            </div>
            <div class="flex gap-3.5">
                <img src="/vkontacte.svg" class="w-5 h-5 max-sm:w-4" alt="" />
                <img src="/insta_white.svg" class="w-5 h-5 max-sm:w-4" alt="" />
                <img
                    src="/facebook_icon.svg"
                    class="w-5 h-5 max-sm:w-4"
                    alt=""
                />
                <img src="/twitter_icon.svg" class="w-5 h-5 max-sm:w-4" />
            </div>
        </div>
        <ul class="flex gap-5 text-base text-white max-sm:hidden">
            <NuxtLink to="/Afiche" class="cursor-pointer">Афиша</NuxtLink>
            <NuxtLink to="/FilmCard"
                ><li class="cursor-pointer">Фильмы</li></NuxtLink
            >
            <li class="cursor-pointer">Актёры</li>
            <li class="cursor-pointer">Новости</li>
            <NuxtLink to="/Selections"
                ><li class="cursor-pointer">Подборки</li></NuxtLink
            >
            <NuxtLink to="/profile"
                ><li class="cursor-pointer">Категории</li></NuxtLink
            >
        </ul>
        <div class="flex gap-2 items-center">
            <img
                src="/search.svg"
                alt=""
                class="cursor-pointer max-sm:hidden"
                @click="emit('openSearchModal')"
            />
            <button
                class="py-3.5 bg-blue-700 text-white rounded-xl px-8 shadow-lg shadow-blue-800 max-sm:py-2 max-sm:px-3.5 max-sm:text-xs max-sm:rounded-lg"
                @click="emit('openLoginModal')"
            >
                Войти
            </button>
        </div>
    </div>
</template>
