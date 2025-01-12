<script setup>
const emit = defineEmits(["changeSection"]);
</script>

<template>
    <div>
        <div class="flex flex-col gap-5 bg-[#191E2E] py-7 px-7 rounded-xl">
            <div class="flex items-center justify-between gap-4">
                <p class="text-4xl text-white font-bold">Ваш профиль</p>
                <div
                    class="flex gap-4 bg-[#1E2538] rounded-xl py-4 px-5"
                    @click="emit('changeSection', 'profile')"
                >
                    <img src="/shapes1.svg" alt="" />
                    <p class="text-white">Сохранить</p>
                </div>
            </div>
            <div class="flex gap-7">
                <div class="flex flex-col gap-4">
                    <img
                        class="rounded-xl w-[400px] h-[390px]"
                        src="/mine.jpg"
                        alt=""
                    />
                    <div
                        class="w-full bg-[#1E2538] py-3 px-5 rounded-xl flex items-center justify-between text-white"
                    >
                        <div class="flex gap-1">
                            <span class="text-slate-400 font-extralight"
                                >Фото профиля:</span
                            >
                            <span>photo.jpg</span>
                        </div>
                        <button class="bg-[#3657CB] rounded-xl px-8 py-3">
                            Загрузить
                        </button>
                    </div>

                    <div class="flex flex-col gap-4">
                        <div
                            class="w-full bg-[#1E2538] relative pl-16 py-3.5 px-5 rounded-xl"
                        >
                            <div
                                class="absolute top-0 left-0 bg-[#4D7198] py-5 px-4 rounded-xl"
                            >
                                <img src="/vk_white.svg" alt="" />
                            </div>
                            <div class="text-white">
                                https://vk.com/kalkadamov
                            </div>
                        </div>
                        <div
                            class="w-full bg-[#1E2538] relative pl-16 py-3.5 px-5 rounded-xl"
                        >
                            <div
                                class="absolute top-0 left-0 bg-[#F00] py-5 px-4 rounded-xl"
                            >
                                <img src="/youtube_white.svg" alt="" />
                            </div>
                            <div class="text-white">
                                https://vk.com/kalkadamov
                            </div>
                        </div>
                        <div
                            class="w-full bg-[#1E2538] relative pl-16 py-3.5 px-5 rounded-xl"
                        >
                            <div
                                class="absolute top-0 left-0 bg-custom-gradient py-4 px-4 rounded-xl"
                            >
                                <img src="/insta_white.svg" width="20" alt="" />
                            </div>
                            <div class="text-white">
                                https://vk.com/kalkadamov
                            </div>
                        </div>
                        <div
                            class="w-full bg-[#1E2538] relative pl-16 py-3.5 px-5 rounded-xl"
                        >
                            <div
                                class="absolute top-0 left-0 bg-[#1DA1F2] py-5 px-4 rounded-xl"
                            >
                                <img src="/twit_white.svg" alt="" />
                            </div>
                            <div class="text-white">
                                https://vk.com/kalkadamov
                            </div>
                        </div>
                        <div
                            class="w-full bg-[#1E2538] relative pl-16 py-3.5 px-5 rounded-xl"
                        >
                            <div
                                class="absolute top-0 left-0 bg-[#3B5998] py-4 px-5 rounded-xl"
                            >
                                <img src="/f_white.svg" alt="" />
                            </div>
                            <div class="text-white">
                                https://vk.com/kalkadamov
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-5">
                    <div class="grid grid-cols-2 gap-4">
                        <input
                            type="tex"
                            placeholder="Имя"
                            class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-64 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Фамилия"
                            class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-64 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Пол"
                            class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-64 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Дата рождения"
                            class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-64 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Страна"
                            class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-64 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Город"
                            class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-64 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Любимый жанр"
                        class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all"
                    />
                    <textarea
                        placeholder="Информация о себе"
                        class="bg-[#1E2538] h-40 w-full resize-y text-white placeholder-gray-500 pl-7 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all"
                    ></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
