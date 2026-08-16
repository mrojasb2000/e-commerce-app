<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import FormError from '~/components/atoms/FormError.vue'

definePageMeta({
    layout: 'auth',
})

const rules = {
    email: { required, email }, // Matches state.email
    password: { required }, // Matches state.password
}

const registerInputState = ref({
    email: '',
    password: '',
})

const v$ = useVuelidate(rules, registerInputState)

async function submitInput() {
    const isValid = v$.value.$validate()
    if (!isValid) return
}
</script>
<template>
    <div class="bg-white h-screen flex items-center justify-center">
        <div class="w-[300px] mt-20">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl mb-3">Sign up</h1>
                <div :class="{ error: v$.email.$errors.length }">
                    <FormError :errors="v$.email.$errors">
                        <BaseInput
                            v-model="registerInputState.email"
                            :type="'text'"
                            :placeholder="'info@company.com'"
                        />
                    </FormError>
                    <FormError :errors="v$.password.$errors">
                        <BaseInput
                            v-model="registerInputState.password"
                            :type="'password'"
                            :placeholder="'Password'"
                        />
                    </FormError>
                </div>
                <button
                    class="flex justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <svg
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
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                    </svg>
                    Loading in...
                </button>
                <button
                    class="rounded-md mb-2 text-white py-2 bg-indigo-500 text-sm font-semibold"
                    @click="submitInput"
                >
                    Create Account
                </button>
                <p
                    class="text-sm font-normal text-center text-gray-700 dark:text-gray-500 sm:text-start"
                >
                    Already have an account?
                    <NuxtLink
                        to="/auth/signin"
                        class="text-indigo-500 hover:text-brand-600 font-semibold"
                        >Sign In</NuxtLink
                    >
                </p>
            </div>
        </div>
    </div>
</template>
