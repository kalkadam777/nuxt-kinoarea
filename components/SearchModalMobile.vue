<script setup>
import { ref } from "vue";
import { useSearchStore } from "~/store/SearchStore";
const searchMovie = ref("");
const searchInput = ref(null);
const searchStore = useSearchStore();
const searchPerformed = ref(false);
const emit = defineEmits(["closeSearchModalMobile"]);
const closeModal = () => {
    searchPerformed.value = false;
    searchStore.clearMovies();
    emit("closeSearchModalMobile");
};
const onSearch = () => {
    searchStore.getMovies(searchMovie.value);
    searchPerformed.value = true;
};
const clearSearch = () => {
    searchMovie.value = "";
    searchInput.value?.focus();
};
</script>

<template>
    <div
        class="relative flex flex-col gap-7 pt-12 px-5 overflow-y-auto h-screen"
    >
        <img
            src="/close.svg"
            alt=""
            class="absolute top-6 right-5 w-4 h-4"
            @click="closeModal"
        />
        <div class="text-white text-3xl font-bold">Поиск</div>
        <div
            class="border rounded-lg h-11 w-full text-sm font-medium relative bg-white flex-shrink-0"
        >
            <input
                id="search-input"
                type="text"
                class="w-full h-full px-4 pt-3 outline-none bg-transparent peer"
                autocomplete="off"
                v-model="searchMovie"
                @keydown.enter="onSearch"
                ref="searchInput"
                placeholder=" "
            />
            <label
                for="search-input"
                class="text-gray-500 font-medium absolute left-4 transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:text-xs peer-focus:top-1"
                :class="{ 'text-xs top-1': searchMovie !== '' }"
            >
                Фильмы, сериалы, персоны
            </label>

            <img
                v-show="searchMovie"
                src="/close_black.svg"
                alt=""
                class="absolute top-4 right-2 w-3 h-3"
                @click="clearSearch"
            />
        </div>

        <div
            class="flex flex-col gap-3 w-full"
            v-if="
                searchPerformed &&
                !searchStore.loader &&
                searchStore.movies.length === 0 &&
                searchStore.people.length === 0
            "
        >
            <p class="text-xl text-white font-bold">Ничего не нашлось</p>
            <p class="text-sm text-slate-500">
                Может быть, вы ищете то, чего пока нет в каталоге
            </p>
        </div>
        <!-- <Loader v-if="searchStore.loader" /> -->
        <div v-if="searchStore.loader" class="flex justify-center items-center">
            <div
                class="w-10 h-10 border-2 border-t-transparent border-white rounded-full animate-spin"
            ></div>
        </div>

        <div class="w-full" v-else>
            <div v-if="searchStore.movies.length > 0">
                <div class="text-white text-xl mt-0 mb-3">Фильмы</div>
                <MovieSearchCard
                    v-for="movie in searchStore.movies"
                    :key="movie.id"
                    :movie="movie"
                    @click="closeModal"
                />
            </div>

            <div v-if="searchStore.people.length > 0" class="mt-5">
                <div class="text-white text-xl mb-3">Люди</div>
                <PersonSearchCard
                    v-for="person in searchStore.people.slice(0, 10)"
                    :id="person.id"
                    :key="person.id"
                    :person="person"
                    @click="closeModal"
                />
            </div>
        </div>
    </div>
</template>
