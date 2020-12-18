<template>
    <aside :class="active ? 'active' : ''">
        <ais-panel>
            <h5 slot="header">Time</h5>
            <ais-refinement-list attribute="time" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Cuisine</h5>
            <ais-refinement-list attribute="cuisine" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Course</h5>
            <ais-refinement-list attribute="course" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Chef</h5>
            <ais-refinement-list attribute="chef" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Diet</h5>
            <ais-refinement-list attribute="diet" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Dish</h5>
            <ais-refinement-list attribute="dish" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Preparation</h5>
            <ais-refinement-list attribute="preparation" />
        </ais-panel>
    </aside>
</template>

<script>
export default {
    props: {
        active: {
            required: true,
            type: Boolean
        }
    }
};
</script>
