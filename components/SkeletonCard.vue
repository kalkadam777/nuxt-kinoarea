<template>
    <div
        class="flex flex-col items-start cursor-pointer space-y-2 animate-pulse"
    >
        <div class="w-80 h-120 bg-gray-700 rounded-lg"></div>
        <div class="w-3/4 h-6 bg-gray-600 rounded"></div>
        <div class="w-1/2 h-4 bg-yellow-500 rounded"></div>
    </div>
</template>

<style scoped>
.animate-pulse {
    animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
</style>
