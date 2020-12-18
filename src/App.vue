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
            <SidePannel :active="sideBarActive" />

            <div class="Toggler" @click="sideBarActive = !sideBarActive">
                🗄
            </div>

            <section class="content">
                <div class="results">
                    <div class="results-header">
                        <ais-stats />
                    </div>
                    <ais-hits>
                        <div class="movies" slot-scope="{ items }">
                            <Recipe v-for="item in items" :key="item.title" :recipe="item" />
                        </div>
                    </ais-hits>
                    <ais-pagination />
                </div>
            </section>
        </main>
    </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
import { simple as simpleMapping } from 'instantsearch.js/es/lib/stateMappings';
import Recipe from './components/Recipe';
import SidePannel from './components/SidePannel';

import './App.css';

export default {
    data() {
        return {
            sideBarActive: false,
            searchClient: algoliasearch('OZIAMBH3SH', 'ae54064ae96523820ee8cbe123eee971'),
            routing: {
                router: historyRouter(),
                stateMapping: simpleMapping()
            }
        };
    },
    components: {
        Recipe,
        SidePannel
    }
};
</script>
