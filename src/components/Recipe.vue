<template>
    <div class="Recipe" :class="{'Recipe--active' : active }">
        <h3 class="Recipe__title" @click="active = !active">
            {{ recipe.title }}
        </h3>
        <div class="pb-8 Recipe__expandable" v-if="active">
            <span v-if="loggedIn" @click="deleteRecipe" class="absolute top-0 right-0 p-2 mt-4 mr-4 font-bold text-red-500 border border-red-500 rounded cursor-pointer">{{ deleted ? 'Deleted' : 'Delete' }}</span>
            <span v-if="loggedIn" @click="edit" class="absolute top-0 right-0 p-2 mt-4 mr-32 font-bold text-blue-500 border border-blue-500 rounded cursor-pointer">Edit</span>
            <ol class="Recipe__steps">
                <li v-for="(step, i) in recipe.steps" :key="i">{{ step }}</li>
            </ol>

            <div v-for="(group, i) in recipe.ingredients" :key="i" class="Recipe__ingredient-group">
                <p class="Recipe__ingredient-heading" v-if="group.group">{{ group.group }}</p>
                <div class="Recipe__ingredient-table">
                    <p v-for="(ingredient, i) in group.items" :key="i">
                        {{ ingredient }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormRecipeEdit from './forms/recipe/Edit';
import { getCookie } from '@/utils';

export default {
    data: () => ({
        active: false,
        deleted: false
    }),
    computed: {
        loggedIn() {
            return document.cookie.includes('sessionID');
        }
    },
    props: {
        recipe: {
            type: Object,
            required: true
        }
    },
    methods: {
        async deleteRecipe() {
            try {
                const res = await fetch(`${process.env.API_URL}/api/recipe/delete/${this.recipe.objectID}`, {
                    method: 'GET',
                    headers: {
                      authentication: getCookie('sessionID')
                    },
                });
                if (res.status !== 200) {
                    const response = await res.json();
                    const error = await response.error;
                    console.error(error);
                } else {
                    this.deleted = true;
                }
            } catch (error) {
                this.error = error;
            }
        },
        edit() {
            this.$modal.show(
                FormRecipeEdit,
                {recipe: this.recipe},
                { adaptive: false }
            )
        }
    }
};
</script>

<style>
.Recipe {
    margin-top: 15px;
    margin-bottom: 15px;
    max-width: 800px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    color: black;
    transition: .5s ease;
    background-color: transparent;
}

.Recipe--active {
    padding-top: 65px;
    background-color: #fff4d6;
}

.Recipe--active .Recipe__title {
   font-size: 22px;
   font-weight: 600;
   padding-bottom: 30px;
}

.Recipe__title {
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    margin: 0;
    transition: .5s ease;
}

.Recipe__steps {
    font-size: 16px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 30px;
}

.Recipe__steps li {
    margin-bottom: 15px;
}

.Recipe__ingredient-group {
    margin-top: 25px;
    margin-bottom: 45px;
}

.Recipe__ingredient-table {
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    display: flex;
    flex-wrap: wrap;
}

.Recipe__ingredient-table p {
    width: 50%;
    padding: 5px 8px;
    margin: 0;
    border-bottom: 1px solid grey;
    flex-grow: 1;
}

.Recipe__ingredient-table p:nth-child(2n) {
    border-left: 1px solid grey;
}

.Recipe__ingredient-heading {
    font-weight: 600;
}
</style>
