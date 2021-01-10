<template>
    <aside>

        <ais-panel>
            <h5 slot="header">Group</h5>
            <ais-refinement-list :limit="5" :sort-by="['count:desc']" :show-more="true" attribute="group" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Cuisine</h5>
            <ais-refinement-list :limit="5" :sort-by="['count:desc']" :show-more="true" attribute="cuisine" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Ocasion</h5>
            <ais-refinement-list :limit="5" :sort-by="['count:desc']" :show-more="true" attribute="occasion" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Course</h5>
            <ais-refinement-list :limit="5" :sort-by="['count:desc']" :show-more="true" attribute="course" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Chef</h5>
            <ais-refinement-list :limit="5" :sort-by="['count:desc']" :show-more="true" attribute="chef" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Time</h5>
            <ais-refinement-list :limit="5" :sort-by="['count:desc']" :show-more="true" attribute="time" />
        </ais-panel>

        <ais-panel>
            <h5 slot="header">Diet</h5>
            <ais-refinement-list :limit="5" :sort-by="['count:desc']" :show-more="true" attribute="diet" />
        </ais-panel>

    </aside>
</template>

<script>
export default {
};
</script>
