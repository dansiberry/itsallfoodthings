<template>
    <ais-instant-search
        :search-client="searchClient"
        index-name="itsallfoodthings"
        :routing="routing"
    >
        <header class="navbar">
            <ais-search-box placeholder="" />
        </header>

        <main>
            <div :class="{'active' : sideBarActive}">
                <SidePannel :active="sideBarActive" />
            </div>

            <div class="Toggler" @click="sideBarActive = !sideBarActive">
                📂
            </div>

            <section class="content">
                <div class="results">
                    <div class="results-header">
                        <div class="results__views">
                            <a @click="groupsView = true" :class="{'active' : groupsView}">Groups</a>
                            <a @click="groupsView = false" :class="{'active' : !groupsView}">List</a>
                        </div>
                        <ais-stats />
                    </div>
                    <ais-hits>
                        <div class="movies" slot-scope="{ items }">
                            <Groups v-if="groupsView" :items="items" />
                            <Recipe v-else v-for="item in items" :key="item.title" :recipe="item" />
                        </div>
                    </ais-hits>
                </div>
            </section>
        </main>
    </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
import { simple as simpleMapping } from 'instantsearch.js/es/lib/stateMappings';
import Groups from './components/Groups';
import Recipe from './components/Recipe';
import SidePannel from './components/SidePannel';

import './App.css';

export default {
    data() {
        return {
            groupsView: true,
            sideBarActive: false,
            searchClient: algoliasearch('OZIAMBH3SH', 'ae54064ae96523820ee8cbe123eee971'),
            routing: {
                router: historyRouter(),
                stateMapping: simpleMapping()
            }
        };
    },
    components: {
        SidePannel,
        Groups,
        Recipe
    }
};
</script>
