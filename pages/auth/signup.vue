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
