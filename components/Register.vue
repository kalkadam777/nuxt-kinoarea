<script setup>
const emit = defineEmits(["closeRegisterModal"]);
</script>

<template>
    <div
        class="relative bg-[#191E2E] w-[800px] flex flex-col items-center rounded-lg gap-5 py-9 m-auto max-sm:w-[360px]"
    >
        <div class="text-white font-bold text-4xl mb-5 max-sm:text-2xl">
            Зарегистрироваться
        </div>
        <div class="flex flex-col items-start gap-4 max-sm:items-center">
            <div class="flex flex-col items-start gap-4">
                <input
                    type="text"
                    placeholder="Имя"
                    class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-96 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all max-sm:w-72 max-sm:text-base"
                />
                <input
                    type="text"
                    placeholder="Фамилия"
                    class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-96 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all max-sm:w-72 max-sm:text-base"
                />
                <input
                    type="text"
                    placeholder="Придумайте логин"
                    class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-96 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all max-sm:w-72 max-sm:text-base"
                />
                <input
                    type="password"
                    placeholder="Придумайте пароль"
                    class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-96 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all max-sm:w-72 max-sm:text-base"
                />
                <input
                    type="password"
                    placeholder="Повторите пароль"
                    class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-96 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all max-sm:w-72 max-sm:text-base"
                />
                <input
                    type="text"
                    placeholder="Номер телефона или e-mail"
                    class="bg-[#1E2538] text-white placeholder-gray-500 pl-7 w-96 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#F2F60F] transition-all max-sm:w-72 max-sm:text-base"
                />
            </div>
            <div class="flex flex-col items-start gap-4 max-sm:gap-2">
                <div class="flex items-center gap-3">
                    <div>
                        <label
                            class="relative flex items-center cursor-pointer"
                        >
                            <input type="checkbox" class="sr-only peer" />
                            <div
                                class="w-5 h-5 rounded-md border-2 border-gray-400 peer-checked:bg-[#F2F60F] peer-checked:border-[#F2F60F] flex items-center justify-center transition-all"
                            >
                                <img
                                    src="/yes.svg"
                                    alt=""
                                    width="13px"
                                    height="13px"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="flex gap-2 max-sm:gap-1">
                        <span class="text-xs text-white max-sm:text-[10px]"
                            >Соглашаюсь на условия</span
                        >
                        <span class="text-[#F2F60F] text-xs max-sm:text-[10px]"
                            >политики конфиденциальности</span
                        >
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div>
                        <label
                            class="relative flex items-center cursor-pointer"
                        >
                            <input type="checkbox" class="sr-only peer" />
                            <div
                                class="w-5 h-5 rounded-md border-2 border-gray-400 peer-checked:bg-[#F2F60F] peer-checked:border-[#F2F60F] flex items-center justify-center transition-all"
                            >
                                <img
                                    src="/yes.svg"
                                    alt=""
                                    width="13px"
                                    height="13px"
                                />
                            </div>
                        </label>
                    </div>
                    <p class="text-xs text-white max-sm:text-[10px]">
                        Соглашаюсь на обработку персональных данных
                    </p>
                </div>
            </div>
        </div>
        <button
            class="bg-[#F2F60F] py-4 w-96 rounded-xl text-lg text-[#191E2E] font-bold hover:bg-yellow-400 transition-all max-sm:w-72 max-sm:text-base"
        >
            Зарегистрироваться
        </button>
        <div
            class="absolute top-5 right-6 cursor-pointer max-sm:w-5 max-sm:h-5 max-sm:right-4"
        >
            <img src="/close.svg" alt="" @click="emit('closeRegisterModal')" />
        </div>
    </div>
</template>
