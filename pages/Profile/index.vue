<script setup>
import { useMovieStore } from "~/store/MovieStore";
const movieStore = useMovieStore();
const changeSection = (section) => {
    movieStore.setActiveSection(section);
};
</script>

<template>
    <div class="mt-16 flex gap-4 m-auto items-start w-full">
        <div class="flex flex-col gap-1.5">
            <div
                class="py-5 px-5 bg-[#3657CB] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md"
                @click="changeSection('profile')"
            >
                <img src="/h.svg" alt="" />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md"
            >
                <img src="/friend.svg" alt="" />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md"
            >
                <img src="/review.svg" alt="" />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md"
            >
                <img src="/review2.svg" alt="" />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md"
            >
                <img src="/com2.svg" alt="" />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md"
            >
                <img src="/film1.svg" alt="" />
            </div>
            <div
                class="py-5 px-5 bg-[#191E2E] rounded-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-[#2d4aae] shadow-md"
            >
                <img src="/famous1.svg" alt="" />
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
