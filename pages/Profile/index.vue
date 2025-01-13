<script setup>
import { useMovieStore } from "~/store/MovieStore";
const movieStore = useMovieStore();
const changeSection = (section) => {
    movieStore.setActiveSection(section);
};
</script>

<template>
    <div class="mt-16 flex gap-4 m-auto items-start w-full max-sm:flex-col">
        <div
            class="flex lg:flex-col gap-1.5 max-sm:w-[352px] max-sm:items-center max-sm:gap-0.5"
        >
            <div
                class="py-5 px-5 bg-[#3657CB] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md max-sm:py-4 max-sm:px-4 max-sm:w-[60px] max-sm:h-[50px] flex justify-center items-center"
                @click="changeSection('profile')"
            >
                <img
                    src="/h.svg"
                    alt=""
                    class="max-sm:w-[25px] max-sm:h-[25px]"
                />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md max-sm:py-4 max-sm:px-4 max-sm:w-[60px] max-sm:h-[50px] flex justify-center items-center"
            >
                <img
                    src="/friend.svg"
                    alt=""
                    class="max-sm:w-[25px] max-sm:h-[25px]"
                />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md max-sm:py-4 max-sm:px-4 max-sm:w-[60px] max-sm:h-[50px] flex justify-center items-center"
            >
                <img
                    src="/review.svg"
                    alt=""
                    class="max-sm:w-[25px] max-sm:h-[25px]"
                />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md max-sm:py-4 max-sm:px-4 max-sm:w-[60px] max-sm:h-[50px] flex justify-center items-center"
            >
                <img
                    src="/review2.svg"
                    alt=""
                    class="max-sm:w-[25px] max-sm:h-[25px]"
                />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md max-sm:py-4 max-sm:px-4 max-sm:w-[60px] max-sm:h-[50px] flex justify-center items-center"
            >
                <img
                    src="/com2.svg"
                    alt=""
                    class="max-sm:w-[25px] max-sm:h-[25px]"
                />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md max-sm:py-4 max-sm:px-4 max-sm:w-[60px] max-sm:h-[50px] flex justify-center items-center"
            >
                <img
                    src="/film1.svg"
                    alt=""
                    class="max-sm:w-[25px] max-sm:h-[25px]"
                />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md max-sm:py-4 max-sm:px-4 max-sm:w-[60px] max-sm:h-[50px] flex justify-center items-center"
            >
                <img
                    src="/famous1.svg"
                    alt=""
                    class="max-sm:w-[25px] max-sm:h-[25px]"
                />
            </div>
        </div>
        <div v-if="movieStore.activeSection === 'profile'">
            <Profile2 @changeSection="changeSection" />
        </div>
        <div v-if="movieStore.activeSection === 'settings'">
            <Settings @changeSection="changeSection" />
        </div>
    </div>
</template>
