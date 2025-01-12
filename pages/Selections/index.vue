<template>
    <div class="mt-16 flex flex-col gap-10">
        <div class="text-white text-5xl font-bold">Подборки фильмов</div>
        <div class="flex items-center gap-2">
            <NuxtLink to="/"
                ><span class="text-[#4F5B7C]">Главная</span></NuxtLink
            >
            <img src="/arrow3.svg" alt="Arrow Icon" />
            <span class="text-white">Подборки</span>
        </div>
        <p class="text-white w-[800px]">
            Также как дальнейшее развитие различных форм деятельности, в своём
            классическом представлении, допускает внедрение первоочередных
            требований. Современные технологии достигли такого уровня, что
            внедрение современных методик предполагает независимые способы
            реализации стандартных подходов. Сторонники тоталитаризма в науке
            могут быть объявлены нарушающими общечеловеческие нормы этики и
            морали.
        </p>
        <ul
            class="flex items-center justify-between text-slate-500 font-medium"
        >
            <li
                class="text-white bg-[#3657CB] shadow-xl shadow-[#375ee866] px-6 py-4 rounded-xl"
            >
                Kinoarea
            </li>
            <li>Сериалы</li>
            <li>Направления</li>
            <li>Критика</li>
            <li>Сборы</li>
            <li>Премии</li>
            <li>Годы</li>
            <li>Жанры</li>
        </ul>
        <div
            class="flex flex-col items-center justify-between w-full mt-10"
            v-for="(i, index) in 5"
        >
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-5">
                    <!-- <img
                    :src="`https://image.tmdb.org/t/p/w500$`"
                    alt=""
                    class="rounded-xl w-[200px] h-[280px]"
                /> -->
                    <div class="relative">
                        <img
                            class="w-[240px] h-[240px]"
                            src="/collect1.svg"
                            alt=""
                        />
                        <div
                            class="flex flex-col items-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <div class="flex flex-col gap-0">
                                <div class="flex items-center gap-2">
                                    <span class="text-white font-bold text-3xl"
                                        >ТОП</span
                                    >
                                    <span
                                        class="text-[#3657CB] font-bold text-3xl"
                                        >250</span
                                    >
                                </div>
                                <span class="text-white font-medium text-2xl"
                                    >ФИЛЬМОВ</span
                                >
                            </div>
                            <div class="flex items-center gap-1">
                                <img src="/cin2_w.svg" alt="" />
                                <p class="text-white text-xs">Kinoarea</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-xl text-white font-medium">
                            ТОП 250 лучших фильмов
                        </p>
                        <p class="text-yellow-400">250 фильмов</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <button
                        class="bg-[#3657CB] rounded-lg px-5 py-4 text-base shadow-xl shadow-[#375ee866] font-medium text-white ml-10"
                    >
                        Посмотреть
                    </button>
                </div>
            </div>
            <div class="w-full border-b border-slate-600"></div>
        </div>
    </div>
</template>
