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
                        <ais-stats />
                    </div>
                    <ais-hits>
                        <div class="movies" slot-scope="{ items }">
                            <Groups :items="items" />
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
        SidePannel,
        Groups
    }
};
</script>
