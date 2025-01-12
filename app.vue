<script setup>
import { ref, nextTick } from "vue";

const isLoginModalVisible = ref(false);
const isRegisterModalVisible = ref(false);
const isSearchModalVisible = ref(false);
const isSearchModalMobileVisible = ref(false);
const isMenuBurgerVisible = ref(false);
// const searchInput = ref(null);
const openLoginModal = () => {
    isLoginModalVisible.value = true;
    isRegisterModalVisible.value = false;
};

const closeLoginModal = () => {
    isLoginModalVisible.value = false;
    isRegisterModalVisible.value = false;
};

const toggleToRegister = () => {
    isLoginModalVisible.value = false;
    isRegisterModalVisible.value = true;
};

const openSearchModal = () => {
    isSearchModalVisible.value = true;
    setTimeout(() => {
        if (childRef.value?.focusSearchInput) {
            childRef.value.focusSearchInput();
        } else {
            console.error("focusSearchInput не найден в дочернем компоненте");
        }
    }, 0);
};

const closeSearchModal = () => {
    isSearchModalVisible.value = false;
};

const openSearchModalMobile = () => {
    isSearchModalMobileVisible.value = true;
};

const closeSearchModalMobile = () => {
    isSearchModalMobileVisible.value = false;
};

const openMenuBurger = () => {
    isMenuBurgerVisible.value = true;
};
const closeMenuBurger = () => {
    isMenuBurgerVisible.value = false;
};
const childRef = ref(null);
</script>

<template>
    <div class="px-52 max-sm:px-5">
        <Header
            @openLoginModal="openLoginModal"
            @openSearchModal="openSearchModal"
            @openSearchModalMobile="openSearchModalMobile"
            @openMenuBurger="openMenuBurger"
        />

        <transition name="fade">
            <div
                v-if="isSearchModalVisible"
                class="fixed inset-0 z-40 bg-black bg-opacity-50"
                @click="closeSearchModal"
            ></div>
        </transition>

        <transition name="slide-up">
            <div
                v-if="isSearchModalVisible"
                class="fixed inset-0 z-50 flex items-start justify-center pt-20"
            >
                <SearchModal
                    @closeSearchModal="closeSearchModal"
                    ref="childRef"
                />
            </div>
        </transition>

        <transition name="fade">
            <div
                class="fixed inset-0 z-50 bg-black bg-opacity-70"
                v-if="isSearchModalMobileVisible"
            >
                <SearchModalMobile
                    @closeSearchModalMobile="closeSearchModalMobile"
                />
            </div>
        </transition>

        <transition name="fade">
            <div
                class="fixed inset-0 z-50 bg-[#1e2538] bg-opacity-90"
                v-if="isMenuBurgerVisible"
            >
                <MenuBurger @closeMenuBurger="closeMenuBurger" />
            </div>
        </transition>

        <div v-auto-animate>
            <NuxtPage />
        </div>

        <transition name="modal">
            <div
                v-if="isLoginModalVisible || isRegisterModalVisible"
                class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
                <Login
                    v-if="isLoginModalVisible"
                    @toggleToRegister="toggleToRegister"
                    @closeLoginModal="closeLoginModal"
                />

                <Register
                    v-if="isRegisterModalVisible"
                    @closeRegisterModal="closeLoginModal"
                />
            </div>
        </transition>

        <Footer />
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
    transform: scale(1);
}
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0);
    opacity: 1;
}
</style>
