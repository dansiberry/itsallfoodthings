<template>
    <div class="Recipe" :class="{'Recipe--active' : active }">
        <h3 class="Recipe__title" @click="active = !active">
            {{ recipe.title }}
        </h3>
        <div class="Recipe__expandable" :class="active && 'active'">
            <ol class="Recipe__steps">
                <li v-for="(step, i) in recipe.steps" :key="i">{{ step }}</li>
            </ol>

            <div v-for="group in recipe.ingredients" :key="group.group" class="Recipe__ingredient-group">
                <p class="Recipe__ingredient-heading" v-if="group.group">{{ group.group }}</p>
                <div class="Recipe__ingredient-table">
                    <p v-for="ingredient in group.items" :key="ingredient">
                        {{ ingredient }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        active: false
    }),
    props: {
        recipe: {
            type: Object,
            required: true
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

.Recipe__expandable {
    max-height: 0px;
    opacity: 0;
    overflow: hidden;
    transition: 0.5s ease;
}

.Recipe__expandable.active {
    max-height: 1000px;
    opacity: 1;
}
</style>
