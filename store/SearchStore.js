import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useSearchStore = defineStore("searchStore", () => {
    const loader = ref(false);
    const movies = ref([]);
    const people = ref([]);

    const getMovies = async (search) => {
        loader.value = true;
        try {
            const options = {
                headers: {
                    accept: "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA3ZDYxM2ZkMGI0ZDg5YWZjNWZlMDM0MmUwNTEwNCIsIm5iZiI6MTcxMTczMDYyMi44NDcwMDAxLCJzdWIiOiI2NjA2ZWZiZTJmYWY0ZDAxN2RjN2RlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xXjOfJveI_qa_Sewl19WGAeNd1HQSm3lqRV26xjCeLs",
                },
            };
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=ru-Ru&page=1`,
                options
            );

            movies.value = data.results.filter(
                (item) => item.media_type === "movie"
            );
            people.value = data.results.filter(
                (item) => item.media_type === "person"
            );
            console.log(movies.value);
            console.log(people.value);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            loader.value = false;
        }
    };

    const clearMovies = () => {
        movies.value = [];
        people.value = [];
    };

    return {
        loader,
        movies,
        people,
        getMovies,
        clearMovies,
    };
});
