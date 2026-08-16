<script setup>
definePageMeta({
    layout: 'auth',
})
</script>
<template>
    <div class="bg-white h-screen flex items-center justify-center">
        <div class="w-[300px] mt-20">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl mb-3">Sign Up</h1>
                <input
                    type="text"
                    name=""
                    placeholder="info@company.com"
                    id=""
                    class="focus:bg-focus-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-0 focus:focus:border-brand-800"
                />

                <input
                    type="password"
                    name=""
                    placeholder="Password"
                    id=""
                    class="mb-2 focus:bg-focus-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-0 focus:focus-brand-800"
                />

                <button class="rounded-md mb-2 text-white py-2 bg-indigo-500 text-sm font-semibold">
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
