<template>
    <div class="bg-white Form__wrapper">
        <h3 class="mb-16 text-xl font-bold text-blue-500">
            Categories
        </h3>
        <div class="mb-8">
            <div v-for="(categoryGroup, i) in categories" :key="'catGroup' + i" class="mb-4">
                <h3 class="flex items-center justify-start mb-4 font-bold text-blue-500 text-md">
                    {{ categoryGroup.category }}
                    <input class="ml-4" style="width: 40px" type="radio" :value="categoryGroup.category" v-model="chosenCategoryGroup">
                </h3>
            </div>
        </div>

        <input class="block mb-16 text-xl font-bold" type="text" placeholder="Cateogry Title" v-model="title">

        <button class="mt-10 button" @click="submit">Submit</button>
        <p v-if="error" class="mt-2 text-red-500">{{ error }}</p>
    </div>
</template>

<script>
import { getCookie } from '@/utils';

export default {
    data: () => ({
        categories: [],
        chosenCategoryGroup: '',
        title: '',
        error: null
    }),
    created() {
        fetch(`${process.env.VUE_APP_API_URL}/categories`)
        .then(response => response.json())
        .then((data) => {
            this.categories = data;
        });
    },

    methods: {
        async submit() {
            try {
                const res = await fetch(`${process.env.VUE_APP_API_URL}/categories/create`, {
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                        authentication: getCookie('sessionID')
                    },
                    mode: 'cors',
                    credentials: 'same-origin',
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify({
                        title: this.title,
                        category: this.chosenCategoryGroup
                    })
                });
                if (res.status !== 200) {
                    const response = await res.json();
                    this.error = await response.error;
                    return;
                }
                this.$emit('close');
            } catch (error) {
                this.error = error;
            }
        }
    }
};
</script>

<style>

</style>
