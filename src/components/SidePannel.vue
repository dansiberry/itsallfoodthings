<template>
    <aside>
        <div v-if="loggedIn">
            <button class="p-2 mr-2 text-white bg-blue-500 rounded" @click="newRecipe">Add Recipe</button>
            <button class="p-2 mt-2 text-white bg-blue-500 rounded" @click="newCategory">Add Category</button>
        </div>
        <button v-else class="p-2 mt-2 text-white bg-blue-500 rounded" @click="login">login..</button>
        <ais-panel>
            <h5 slot="header">Type</h5>
            <ais-refinement-list :limit="3" :sort-by="['count:desc']" :show-more="true" attribute="types.title" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Cuisine</h5>
            <ais-refinement-list :limit="3" :sort-by="['count:desc']" :show-more="true" attribute="cuisines.title" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Ocasion</h5>
            <ais-refinement-list :limit="3" :sort-by="['count:desc']" :show-more="true" attribute="occasions.title" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Course</h5>
            <ais-refinement-list :limit="3" :sort-by="['count:desc']" :show-more="true" attribute="courses.title" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Chef</h5>
            <ais-refinement-list :limit="3" :sort-by="['count:desc']" :show-more="true" attribute="chefs.title" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Diet</h5>
            <ais-refinement-list :limit="3" :sort-by="['count:desc']" :show-more="true" attribute="diets.title" />
        </ais-panel>
    </aside>
</template>

<script>
import FormRecipeNew from './forms/recipe/New';
import FromCategoryNew from './forms/category/New';
import Login from './forms/login';

export default {
    computed: {
        loggedIn() {
            return document.cookie.includes('sessionID');
        }
    },

    methods : {
        newRecipe() {
            this.$modal.show(
                FormRecipeNew,
                {},
                { adaptive: false }
            )
        },
        login() {
            this.$modal.show(
                Login,
                { adaptive: false }
            )
        },
        newCategory() {
            this.$modal.show(
                FromCategoryNew,
                {},
                { adaptive: false }
            )
        }
    }
};
</script>
