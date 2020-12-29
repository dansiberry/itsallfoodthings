<template>
    <div>
        <div 
            v-for="group in Object.keys(grouped)"
            class="Group"
            :key="group"
        >
            <h2 class="Group__title">{{ group }}</h2>
            <Recipe v-for="item in grouped[group]" :key="item.title" :recipe="item" />
        </div>
    </div>
</template>

<script>
import Recipe from './Recipe';

export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },

    components: {
        Recipe
    },

    computed: {
        grouped() {
            if (!this.items.length) return [];
            return this.items.reduce((acc, current) => {
                current.group.forEach(group => {
                    if (acc[group]) {
                        acc[group].push(current)
                    } else {
                        acc[group] = [current]
                    }
                })
                return acc;
            }, {})
        }
    }
};
</script>

<style>

.Group {
    border-bottom: 1px solid #eeeeee;
    padding: 15px 0;
    font-weight: 600;
}

.Group__title {
    text-align: center;
    color: black;
    margin-bottom: 30px;
    margin-top: 10px;
    font-size: 35px;
}
</style>
