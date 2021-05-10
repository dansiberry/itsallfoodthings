<template>
    <div>
        <div 
            v-for="group in Object.keys(grouped)"
            class="Group"
            :class="{'Group--active' : active === group }"
            :key="group"
        >
            <h2 class="Group__title" @click="active = (active === group ? null : group)">{{ group }}</h2>
            <div class="Group__list">
                <Recipe v-for="(item, i) in grouped[group]" :key="item.title + i" :recipe="item" />
            </div>
        </div>
    </div>
</template>

<script>
import Recipe from './Recipe';

export default {
    data: () => ({
        active: false
    }),

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
                current.types.forEach(type => {
                    if (acc[type.title]) {
                        acc[type.title].push(current)
                    } else {
                        acc[type.title] = [current]
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
    position: relative;
    max-height: 80px;
    overflow: hidden;
}

.Group--active {
    max-height: 100000px;
}

.Group:before {
    content: '⌃';
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: 7px;
    left: 0;
    font-size: 18px;
    opacity: .3;
    z-index: 30;
    transform: rotate(180deg);
}

.Group--active:before {
    display: none;
}

.Group__list {
    opacity: 0;
    transition: .5s ease;
}

.Group--active .Group__list {
    opacity: 1;
}

.Group__title {
    text-align: center;
    color: black;
    margin-bottom: 30px;
    margin-top: 10px;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
    z-index: 20;
    position: relative;
}
</style>
