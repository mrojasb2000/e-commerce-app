<script setup>
definePageMeta({
    layout: 'auth',
})
</script>
<template>
    <div class="bg-slate-200 h-screen">
        <div class="flex justify-between" />
        <div class="w-[300px] mt-20">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl mb-3">Sign In</h1>
                <input
                    id=""
                    name=""
                    type="text"
                    placeholder="info@company.com"
                    class="focus:bg-focus-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-0 focus:focus:border-brand-800"
                />

                <input
                    id=""
                    name=""
                    type="password"
                    placeholder="Password"
                    class="mb-2 focus:bg-focus-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-0 focus:focus-brand-800"
                />

                <button class="rounded-md mb-2 text-white py-2 bg-indigo-500 text-sm font-semibold">
                    Login
                </button>
                <p class="text-sm font-normal text-center text-gray-700 dark:text-gray-500">
                    Already have an account?
                    <a class="text-indigo-500 hover:text-brand-600 font-semibold">Sign In</a>
                </p>
            </div>
        </div>
    </div>
</template>
