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
export default {
    data: () => ({
        categories: [],
        chosenCategoryGroup: '',
        title: '',
        error: null
    }),
    created() {
        fetch('http://localhost:3000/api/categories')
        .then(response => response.json())
        .then((data) => {
            this.categories = data;
        });
    },

    methods: {
        async submit() {
            try {
                const res = await fetch('http://localhost:3000/api/categories/create', {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                    'Content-Type': 'application/json'
                    },
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
    .Form__wrapper {
        padding: 30px;
        height: 80vh;
        max-height: 900px;
        overflow: scroll;
    }

    .Form__wrapper input {
        display: block;
    }

    .Form__ingredients-group {
        margin: 15px;
    }

    .Form__ingredients-group-title {
        font-size: 16px;
    }

    .vm--modal {
        overflow: scroll;
        @apply mx-auto overflow-scroll mt-20;
        width: 80vw !important;
        top: 0 !important;
        left: 0 !important;
        height: 80vh !important;
        max-height: 700px !important;
        max-width: 600px !important;
    }
</style>
