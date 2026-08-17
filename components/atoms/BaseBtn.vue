<script setup>
defineProps({
    loading: Boolean,
    label: String,
})
</script>
<template>
    <button
        class="flex justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="loading"
    >
        <svg
            v-show="loading"
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
            />
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
        </svg>
        {{ label }}
    </button>
</template>
