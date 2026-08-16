<script setup>
defineProps({
    errors: {
        type: Array,
        default: () => [],
    },
})
</script>
<template>
    <div :class="{ error: errors.length }">
        <slot />
        <div v-for="error of errors" :key="error.$uid" class="input-errors">
            <div class="text-sm text-red-400 font-normal text-center sm:text-end py-1">
                {{ error.$message }}
            </div>
        </div>
    </div>
</template>
