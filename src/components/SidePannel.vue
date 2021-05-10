<template>
    <aside>
        <button class="p-2 text-white bg-blue-500 rounded" @click="newRecipe">Add Recipe</button>
        <button class="p-2 mt-2 text-white bg-blue-500 rounded" @click="newCategory">Add Category</button>
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

export default {
    methods : {
        newRecipe() {
            this.$modal.show(
                FormRecipeNew,
                {},
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
