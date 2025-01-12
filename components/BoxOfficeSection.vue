<script setup>
import axios from "axios";
const boxMovies = ref([]);
const revenue = ref(null);

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
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=1&sort_by=revenue.desc",
            options
        );
        boxMovies.value = data.results;
        if (data.results.length > 0) {
            revenue.value = await getRevenue(data.results[0].id);
        }
    } catch (error) {
        console.log(error);
    }
});

const getRevenue = async (movieId) => {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
            },
        };
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?language=ru-RU`,
            options
        );
        return data.revenue;
    } catch (error) {
        console.error("Ошибка получения выручки:", error);
        return null;
    }
};

const formatRevenue = (revenue) => {
    if (revenue >= 1_000_000_000) {
        return `$${Math.floor(revenue / 1_000_000_000)} млрд`;
    } else if (revenue >= 1_000_000) {
        return `$${Math.floor(revenue / 1_000_000)} млн`;
    } else if (revenue >= 1_000) {
        return `$${Math.floor(revenue / 1_000)} тыс.`;
    } else {
        return `$${revenue}`;
    }
};

const boxoffice = [
    {
        id: 1,
        title: "Бладшот",
        imgUrl: "/bladshot.png",
        current: "$13 млн",
        total: "$15.1 млн за 4 недели",
    },
    {
        id: 2,
        title: "Вперёд",
        imgUrl: "/go.png",
        current: "$6.8 млн",
        total: "$41.4 млн за 4 недели",
    },
    {
        id: 3,
        title: "Человек-невидимка",
        imgUrl: "/nevedimka.png",
        current: "$6.2 млн",
        total: "$58.3 млн за 3 недели",
    },
    {
        id: 4,
        title: "Соник в кино",
        imgUrl: "/sonic2.png",
        current: "$2.9 млн",
        total: "$15.1 млн за 4 недели",
    },
    {
        id: 5,
        title: "Джентльмены",
        imgUrl: "/djen.png",
        current: "$1.8 млн",
        total: "$78.7 млн за 11 недель",
    },
];
</script>

<template>
    <div class="mt-16">
        <!-- bg-[#151A26] -->
        <div class="flex gap-3 justify-between items-center max-sm:flex-col">
            <div class="flex items-center gap-8 max-sm:flex-col max-sm:gap-3">
                <div class="text-5xl font-bold text-white max-sm:text-[35px]">
                    Кассовые сборы
                </div>
                <div class="text-white">Все сборы</div>
            </div>
            <div class="w-14 border border-white border-b max-sm:hidden"></div>
            <ul class="flex gap-4 text-slate-500 max-sm:hidden">
                <li class="text-white">Россия</li>
                <li>Весь мир</li>
                <li>США и Канада</li>
            </ul>
        </div>

        <div
            class="flex gap-2 mt-8 max-sm:grid max-sm:grid-cols-2 max-sm:gap-4"
        >
            <BoxOfficeCard
                v-for="(item, index) in boxMovies.slice(0, 4)"
                :key="item.id"
                :id="item.id"
                :number="index + 1"
                :title="item.title"
                :imgUrl="item.poster_path"
                :current="revenue ? formatRevenue(revenue) : null"
                :total="'Информация недоступна'"
            />
        </div>
    </div>
</template>
