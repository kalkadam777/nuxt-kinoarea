<script setup>
const emit = defineEmits(["changeSection"]);
</script>

<template>
    <div class="flex flex-col gap-5 bg-[#191E2E] py-7 px-7 rounded-xl">
        <div class="flex items-center justify-between gap-4">
            <p class="text-4xl text-white font-bold">Ваш профиль</p>
            <div
                class="flex gap-4 bg-[#1E2538] rounded-xl py-4 px-5"
                @click="emit('changeSection', 'settings')"
            >
                <img src="/settings1.svg" alt="settings" />
                <p class="text-white">Настройки</p>
            </div>
        </div>
        <div class="flex gap-7">
            <img
                class="rounded-xl w-[300px] h-[350px]"
                src="/mine.jpg"
                alt="profile"
            />

            <div class="flex flex-col gap-2">
                <p class="text-white font-bold text-4xl">Koishybai Erkebulan</p>
                <div class="flex gap-3.5">
                    <div class="relative">
                        <img src="/el3.svg" alt="" class="w-full h-full" />
                        <img
                            src="/vk_white.svg"
                            alt=""
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                    <div class="relative">
                        <img src="/el3.svg" alt="" class="w-full h-full" />
                        <img
                            src="/youtube_white.svg"
                            alt=""
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                    <div class="relative">
                        <img src="/el3.svg" alt="" class="w-full h-full" />
                        <img
                            src="/insta_white.svg"
                            alt=""
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                    <div class="relative">
                        <img src="/el3.svg" alt="" class="w-full h-full" />
                        <img
                            src="/twit_white.svg"
                            alt=""
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                    <div class="relative">
                        <img src="/el3.svg" alt="" class="w-full h-full" />
                        <img
                            src="/f_white.svg"
                            alt=""
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
                <p class="text-white w-[600px]">
                    Учитывая ключевые сценарии поведения, базовый вектор
                    развития, а также свежий взгляд на привычные вещи -
                    безусловно открывает новые горизонты для поставленных
                    обществом задач.
                </p>
                <div class="flex gap-5">
                    <div class="flex flex-col gap-2 text-white">
                        <p>Пол:</p>
                        <p>День рождения:</p>
                        <p>Страна:</p>
                        <p>Город:</p>
                        <p>Любимые жанры:</p>
                    </div>
                    <div class="flex flex-col gap-2 text-yellow-400">
                        <p>Мужской</p>
                        <p>23 янв 2005 г. (20 лет)</p>
                        <p>Казахстан</p>
                        <p>Алматы</p>
                        <p>Боевик, Комедия, Драма</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex gap-5 mx-auto mt-5">
            <div class="text-[#323A55] flex flex-col text-center">
                <p class="text-2xl">25</p>
                <p class="font-medium text-xl">Фильмы</p>
            </div>
            <div class="text-white flex flex-col text-center">
                <p class="text-2xl">15</p>
                <p class="font-medium text-xl">Друзья</p>
            </div>
            <div class="text-[#323A55] flex flex-col text-center">
                <p class="text-2xl">2</p>
                <p class="font-medium text-xl">Любимые фильмы</p>
            </div>
            <div class="text-[#323A55] flex flex-col text-center">
                <p class="text-2xl">5</p>
                <p class="font-medium text-xl">Избранное</p>
            </div>
            <div class="text-[#323A55] flex flex-col text-center">
                <p class="text-2xl">22</p>
                <p class="font-medium text-xl">Рецензии</p>
            </div>
            <div class="text-[#323A55] flex flex-col text-center">
                <p class="text-2xl">13</p>
                <p class="font-medium text-xl">Комментарии</p>
            </div>
            <div class="text-[#323A55] flex flex-col text-center">
                <p class="text-2xl">16</p>
                <p class="font-medium text-xl">Ожидаемые фильмы</p>
            </div>
        </div>
    </div>
</template>
