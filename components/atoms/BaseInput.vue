<script setup>
defineProps({
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue'])

function updateInput(event) {
    const val = event.target.value
    emit('update:modelValue', val)
}
</script>
<template>
    <input
        id=""
        name=""
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        class="focus:bg-focus-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-0 focus:focus:border-brand-800"
        @input="updateInput"
    />
</template>
