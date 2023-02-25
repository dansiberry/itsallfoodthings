<template>
    <div class="bg-white Form__wrapper">
        <input class="text-xl font-bold" type="text" placeholder="Title" v-model="title">

        <div class="my-16">
            <h3 class="mb-8 text-xl font-bold text-blue-500">
                Steps 
                <a class="p-2 ml-3 bg-gray-200 rounded cursor-pointer" @click="addStep">➕</a>
            </h3>
            <div v-for="(step, i) in steps" :key="'step' + i" class="flex">
                <input type="text" placeholder="Step" v-model="steps[i]">
                <a class="mt-4 text-xl transform rotate-45 cursor-pointer hover:no-underline decorate " @click="removeStep(i)">➕</a>
            </div>
        </div>

        <div class="my-16">
            <h3 class="mb-8 text-xl font-bold text-blue-500">
                Ingredients
                <a class="p-2 ml-3 bg-gray-200 rounded cursor-pointer" @click="addIngredientGroup">➕</a>
            </h3>
            <div v-for="(ingredientGroup, i) in ingredients" :key="'step' + i" class="mb-4">
                <div class="flex items-center">
                    <input type="text" placeholder="Group" class="text-xl border-b-2" v-model="ingredients[i].group">
                    <a class="flex flex-shrink-0 p-2 mx-6 text-xl text-black bg-gray-200 rounded cursor-pointer" @click="addIngredientGroupItem(i)">➕ Item</a>
                    <a class="text-xl transform rotate-45 cursor-pointer hover:no-underline decorate " @click="removeIngredientGroup(i)">➕</a>
                </div>
                <ul class="pl-12">
                    <li v-for="(ingredient, ii) in ingredientGroup.items" :key="ii" class="flex items-center">
                        <a class="mr-4 text-xl transform rotate-45 cursor-pointer hover:no-underline decorate " @click="removeIngredientGroupItem(i, ii)">➕</a>
                        <input placeholder="item" type="text" v-model="ingredients[i].items[ii]">
                    </li>
                </ul>
            </div>
        </div>

        <div class="my-16">
            <h3 class="mb-8 text-xl font-bold text-blue-500">
                Categories
            </h3>
            <div v-for="(categoryGroup, i) in categories" :key="'catGroup' + i" class="mb-4">
                <h3 class="mb-4 font-bold text-blue-500 text-md">
                    {{ categoryGroup.category }}
                </h3>
                <div class="flex flex-wrap">
                    <div v-for="(category, i) in categoryGroup.rows" :key="i" class="flex items-center w-1/2 cursor-pointer" @click="toggleCategory(categoryGroup.category, category)">
                        <div class="inline-flex items-center justify-center inline-block w-5 h-5 mr-2 text-xs bg-gray-300">
                            <span v-if="activeCategoriesFlat.includes(categoryGroup.category + '-' + category.id)">✔︎</span>
                        </div>
                        {{ category.title }}
                    </div>
                </div>
            </div>
        </div>
        <button class="button" @click="submit">Submit</button>
        <p v-if="error" class="mt-2 text-red-500">{{ error }}</p>
    </div>
</template>

<script>
import { getCookie } from '@/utils';

export default {
    data: () => ({
        error: false,
        title: '',
        steps: [''],
        ingredients: [{
            group: '',
            items: ['']
        }],
        categories: [],
        activeCategories: []
    }),
    created() {
        fetch(`${process.env.VUE_APP_API_URL}/categories`)
        .then(response => response.json())
        .then((data) => {
            this.categories = data;
            this.categories.forEach(cat => {
                this.activeCategories.push({category: cat.category, rows: []});
            });
        });
    },
    computed: {
        activeCategoriesFlat() {
            let res = []
            this.activeCategories.forEach(group => {
                group.rows.forEach(row => res.push(`${group.category}-${row.id}`));
            });
            return res;
        },
        
    },
    methods: {
        addStep() {
            this.steps = [...this.steps, ''];
        },
        removeStep(i) {
            this.steps = this.steps.filter((step, index) => i !== index);
        },
        addIngredientGroup() {
            this.ingredients = [...this.ingredients, {group: '', items: ['']}];
        },
        removeIngredientGroup(i) {
            this.ingredients = this.ingredients.filter((item, index) => index !== i);
        },
        addIngredientGroupItem(i) {
            this.ingredients[i].items = [...this.ingredients[i].items, ''];
        },
        removeIngredientGroupItem(groupI, itemI) {
            this.ingredients[groupI].items = this.ingredients[groupI].items.filter((group, index) => itemI !== index);
        },
        toggleCategory(group, category) {
            const activeGroup = this.activeCategories.find(cat => cat.category === group);
            const isAdded = activeGroup.rows.find(item => item.id === category.id);
            if (isAdded) {
                activeGroup.rows = activeGroup.rows.filter(item => item.id !== category.id);
            } else {
                activeGroup.rows.push(category);
            }
        },
        async submit() {
            try {
                const res = await fetch(`${process.env.VUE_APP_API_URL}/recipes/create`, {
                  method: 'POST',
                  mode: 'cors',
                  cache: 'no-cache',
                  credentials: 'same-origin',
                  headers: {
                    'Content-Type': 'application/json',
                    authentication: getCookie('sessionID')
                  },
                  redirect: 'follow',
                  referrerPolicy: 'no-referrer',
                  body: JSON.stringify({
                      title: this.title,
                      steps: this.steps,
                      ingredients: this.ingredients,
                      activeCategories: this.activeCategories
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
