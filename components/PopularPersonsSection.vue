<script setup>
import axios from "axios";

const persons = ref([]);
onMounted(async () => {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
            },
        };
        const { data } = await axios.get(
            "https://api.themoviedb.org/3/person/popular",
            options
        );
        persons.value = data.results;
        console.log(persons.value);
    } catch (e) {
        console.log(e);
    }
});
const personlist = [
    {
        name: "Квентин Тарантино",
        name2: "Quentin Tarantino",
        age: "57 лет",
        imageUrl: "/kev1.png",
        rating: "1-е место",
    },
    {
        name: "Джейсон Стейтем",
        name2: "Jason Stathom",
        age: "52 года",
        imageUrl: "/jason1.png",
        rating: "2-е место",
    },
];

const personlist2 = [
    {
        name: "Тинто Брасс",
        name2: "Tinto Brass",
        age: "87 лет",
        rating: "3-е место",
    },
    {
        name: "Джеки Чан",
        name2: "Jackie Chan",
        age: "66 лет",
        rating: "4-е место",
    },
    {
        name: "Том Харди",
        name2: "Tom Hardy",
        age: "42 года",
        rating: "5-е место",
    },
    {
        name: "Акшай Кумар",
        name2: "Akshay Kumar",
        age: "52 года",
        rating: "6-е место",
    },
];
</script>

<template>
    <div class="mt-16">
        <div
            class="flex gap-3 justify-between items-center mb-10 max-sm:justify-center max-sm:gap-2"
        >
            <div class="text-5xl font-bold text-white max-sm:text-[30px]">
                Популярные персоны
            </div>
            <img
                src="/vector_mobile.svg"
                alt=""
                class="w-[16px] h-[13px] lg:hidden"
            />

            <ul class="flex gap-4 text-slate-500 max-sm:hidden">
                <li class="text-white">За год</li>
                <li>За месяц</li>
                <li>За неделю</li>
            </ul>
        </div>

        <div class="flex gap-4 items-center max-sm:flex-col">
            <div class="flex items-center gap-5">
                <PersonCard
                    v-for="(person, index) in persons.slice(0, 2)"
                    :key="index"
                    :id="index + 1"
                    :name="person.name"
                    :name2="person.original_name"
                    :image-url="person.profile_path"
                    :known-for="person.known_for_department"
                />
            </div>
            <div
                class="w-96 h-96 rounded-xl overflow-hidden max-sm:w-[358px] max-sm:h-[290px]"
            >
                <div
                    class="flex items-center justify-between bg-[#1B2133] px-3 py-2.5 relative"
                    v-for="(person, index) in persons.slice(2, 6)"
                    :key="index"
                >
                    <div class="max-sm:flex max-sm:flex-col max-sm:gap-2">
                        <div
                            class="text-white text-lg font-bold max-sm:text-[15px] max-sm:leading-none"
                        >
                            {{ person.name }}
                        </div>
                        <p
                            class="text-slate-700 text-base max-sm:text-[11px] max-sm:leading-none"
                        >
                            {{ person.original_name }}
                        </p>
                        <span
                            class="text-yellow-400 max-sm:text-[10px] max-sm:leading-none"
                            >{{ person.known_for_department }}</span
                        >
                    </div>
                    <div class="text-yellow-400 text-base max-sm:text-[15px]">
                        {{ index + 3 }}-е место
                    </div>
                    <div
                        v-if="index !== persons.slice(2, 6).length - 1"
                        class="absolute bottom-0 left-3 right-3 border-b border-slate-600"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
