<script setup>
const newslist = [
    {
        date: "15 Апр 2020",
        imageUrl: "/sonic.png",
        title: "Как изменили Соника с последнего анонса",
    },
    {
        date: "15 Апр 2020",
        imageUrl: "/news1.png",
        title: "Не время умирать. Перенос релиза фильма",
    },
    {
        date: "15 Апр 2020",
        imageUrl: "/news2.png",
        title: "От этой новости вы будете шокированы до завтра",
    },
    {
        date: "13 Апр 2020",
        imageUrl: "/news3.png",
        title: "Вот это, конечно, да!",
    },
];
</script>

<template>
    <div class="mt-16">
        <div class="flex gap-3 justify-between items-center max-sm:flex-col">
            <div class="text-5xl font-bold text-white max-sm:text-3xl">
                Последние новости
            </div>
            <div class="flex items-center gap-5">
                <div class="text-white text-xl max-sm:text-[18px]">
                    Все новости
                </div>
                <img src="/arrow_next.svg" alt="arrowNext" />
            </div>
        </div>

        <div class="flex items-center gap-4 mt-10 max-sm:flex-col">
            <div class="relative">
                <div class="absolute top-3 left-4 flex gap-5 max-sm:gap-2">
                    <p class="text-white text-[12px]">12 Янв 2025</p>
                    <div class="flex gap-1">
                        <img src="/eye.svg" alt="" class="max-sm:w-[12px]" />
                        <span class="text-white max-sm:text-[12px]">242</span>
                    </div>
                    <div class="flex gap-1">
                        <img
                            src="/comment.svg"
                            alt=""
                            class="max-sm:w-[12px]"
                        />
                        <span class="text-white max-sm:text-[12px]">14</span>
                    </div>
                </div>
                <img
                    src="/news1.png"
                    alt=""
                    class="rounded-lg max-sm:w-[358px] max-sm:h-[200px]"
                    height="700"
                    width="900"
                />
                <div
                    class="absolute bottom-9 left-6 flex flex-col gap-4 max-sm:bottom-5"
                >
                    <h2 class="text-white text-3xl font-bold max-sm:text-xl">
                        Не время умирать. Перенос релиза фильма
                    </h2>
                    <p
                        class="text-white text-base leading-8 max-sm:hidden"
                        style="width: 700px"
                    >
                        Но действия представителей оппозиции в равной степени
                        предоставлены сами себе. В рамках спецификации
                        современных стандартов, стремящиеся вытеснить
                        традиционное производство, нанотехнологии указаны как
                        претенденты на роль ключевых факторов.
                    </p>
                </div>
            </div>

            <div class="flex lg:flex-col gap-2">
                <div
                    class="relative group"
                    v-for="news in newslist.slice(0, 2)"
                >
                    <NewsCard
                        :date="news.date"
                        :image-url="news.imageUrl"
                        :title="news.title"
                    />
                    <div
                        class="absolute rounded-xl inset-0 bg-blue-800/70 flex items-center justify-center text-white text-base font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                        <div
                            class="border-2 border-white rounded-lg px-3 py-2 text-sm font-bold"
                        >
                            Читать новость
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
