<script setup>
import { useSearchStore } from "~/store/SearchStore";
const searchMovie = ref("");
const searchInput = ref(null);
const searchPerformed = ref(false);
const searchStore = useSearchStore();
const emit = defineEmits(["closeSearchModal"]);
const closeModal = () => {
    searchPerformed.value = false;
    searchStore.clearMovies();
    emit("closeSearchModal");
};
const focusSearchInput = () => {
    nextTick(() => {
        searchInput.value?.focus();
    });
};
const onSearch = () => {
    searchStore.getMovies(searchMovie.value);
    searchPerformed.value = true;
};
defineExpose({
    focusSearchInput,
});
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="relative m-auto">
            <div class="flex items-center gap-3 absolute right-3 top-1.5">
                <img
                    src="/setup.svg"
                    alt=""
                    class="cursor-pointer max-sm:hidden"
                />
                <img
                    src="/search_icon.svg"
                    alt=""
                    class="cursor-pointer max-sm:w-[30px] max-sm:h-[30px]"
                    @click="onSearch"
                />
            </div>
            <input
                type="text"
                placeholder="Поиск"
                class="py-5 pl-7 w-[800px] rounded-xl text-lg max-sm:w-full max-sm:py-3 max-sm:text-xs max-sm:pl-3 max-sm:rounded-lg"
                v-model="searchMovie"
                ref="searchInput"
                @keydown.enter="onSearch"
            />
            <img
                src="/close.svg"
                alt=""
                class="absolute -right-14 top-5 cursor-pointer max-sm:w-[15px] max-sm:h-[15px] max-sm:top-3 max-sm:-right-10"
                @click="closeModal"
            />
        </div>

        <div
            class="flex flex-col gap-3 w-full mt-8"
            v-if="
                searchPerformed &&
                !searchStore.loader &&
                searchStore.movies.length === 0 &&
                searchStore.people.length === 0
            "
        >
            <p class="text-2xl text-white font-bold">Ничего не нашлось</p>
            <p class="text-base text-slate-500">
                Может быть, вы ищете то, чего пока нет в каталоге
            </p>
        </div>

        <Loader v-if="searchStore.loader" />

        <div class="w-full scroll-container" v-else>
            <div v-if="searchStore.movies.length > 0">
                <div class="text-white text-xl mt-5 mb-3">Фильмы</div>
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

<style scoped>
/* Контейнер с ограниченной высотой и прокруткой */
.scroll-container {
    max-height: 700px; /* Ограничение высоты списка */
    overflow-y: auto; /* Включение вертикальной прокрутки */
    padding-right: 10px; /* Пространство для внутреннего отступа */
}

/* Стилизация полосы прокрутки для Webkit (Chrome, Safari) */
.scroll-container::-webkit-scrollbar {
    width: 8px; /* Ширина полосы прокрутки */
}

.scroll-container::-webkit-scrollbar-track {
    background: #1a1a1a; /* Цвет фона трека */
    border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-thumb {
    background-color: #007bff; /* Синяя полоса прокрутки */
    border-radius: 4px;
    border: 2px solid #1a1a1a; /* Пространство между полосой и треком */
}

/* Стилизация полосы прокрутки для Firefox */
.scroll-container {
    scrollbar-color: #007bff #1a1a1a; /* Цвет полосы и трека */
    scrollbar-width: thin; /* Уменьшенная ширина полосы */
}
</style>
