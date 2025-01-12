<template>
    <div class="px-60">
        <Header />
        <div
            class="h-full flex flex-col justify-center items-center mt-40 gap-3 mb-16"
        >
            <div class="text-9xl text-white font-bold">404</div>
            <div class="text-6xl text-white font-bold">Кина не будет:(</div>
            <p class="text-white text-base mt-5 mb-5">
                Возможно, данного адреса страницы не сущетсвует, или странциа
                была перемещена.
            </p>
            <div class="flex gap-3">
                <NuxtLink to="/">
                    <button
                        class="px-8 py-4 bg-blue-700 text-white shadow-lg shadow-blue-800 rounded-xl"
                    >
                        Вернуться на главную
                    </button>
                </NuxtLink>
                <button
                    class="px-14 py-4 bg-[#1E2538] text-white border border-white rounded-xl"
                >
                    Поиск по сайту
                </button>
            </div>
        </div>
        <Footer />
    </div>
</template>
