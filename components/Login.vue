<script setup>
const emit = defineEmits(["closeLoginModal", "toggleToRegister"]);
</script>

<template>
    <div
        class="relative bg-[#191E2E] w-[800px] flex flex-col items-center rounded-lg gap-5 py-9 m-auto max-sm:w-[360px]"
    >
        <div class="text-white font-bold text-4xl max-sm:text-2xl">Войти</div>

        <input
            type="email"
            placeholder="Логин, почта или телефон"
            class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-96 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all max-sm:w-72 max-sm:text-base"
        />

        <input
            type="password"
            placeholder="Ваш пароль"
            class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-96 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all max-sm:w-72 max-sm:text-base"
        />

        <button
            class="bg-[#F2F60F] py-4 w-96 rounded-xl text-lg text-[#191E2E] font-bold hover:bg-yellow-400 transition-all max-sm:w-72 max-sm:text-base"
        >
            Войти
        </button>

        <button
            class="bg-[#1E2538] py-4 w-96 text-white rounded-xl text-lg hover:bg-[#252E42] transition-all max-sm:w-72 max-sm:text-base"
            @click="emit('toggleToRegister')"
        >
            Зарегистрироваться
        </button>

        <a href="#" class="text-blue-700 underline max-sm:text-sm"
            >Восстановить пароль</a
        >

        <div class="flex gap-3.5">
            <img
                src="/vk_iconka.svg"
                alt=""
                class="bg-[#1E2538] p-3 rounded-xl"
            />
            <img
                src="/f_icon.svg"
                alt=""
                class="bg-[#3657CB] px-4 py-3 rounded-xl"
            />
            <img src="/google.svg" alt="" class="bg-[#1E2538] p-3 rounded-xl" />
            <img
                src="/twitter_iconka.svg"
                alt=""
                class="bg-[#1E2538] p-3 rounded-xl"
            />
        </div>

        <div class="absolute top-5 right-6 cursor-pointer">
            <img
                src="/close.svg"
                alt="Close"
                class="max-sm:w-6 max-sm:h-6"
                @click="emit('closeLoginModal')"
            />
        </div>
    </div>
</template>
