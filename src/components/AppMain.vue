<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppSelect from './AppSelect.vue';

export default {
    data() {
        return {
            store,
            itemsPerPage: 25,
            currentPage: 1,
            filteredTotalItems: 0,
            selectedArchetype: '',
        };
    },
    computed: {
        totalItems() {
            return this.store.characters.data.length;
        },
        totalPages() {
            return Math.ceil(this.filteredTotalItems / this.itemsPerPage);
        },
        paginatedMonsters() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            if (this.selectedArchetype) {
                const filteredMonsters = this.store.characters.data.filter(monster => monster.archetype === this.selectedArchetype);
                this.filteredTotalItems = filteredMonsters.length;
                return filteredMonsters.slice(startIndex, endIndex);
            } else {
                this.filteredTotalItems = this.totalItems;
                return this.store.characters.data.slice(startIndex, endIndex);
            }
        },
        headerInfo() {
            const totalCardsText = `TOTAL CARDS: ${this.filteredTotalItems}`;
            const archetypeText = this.selectedArchetype === '' || this.selectedArchetype === undefined ? `ARCHETYPE: All archetypes` : `ARCHETYPE: ${this.selectedArchetype}`;

            return `${totalCardsText} - ${archetypeText}`;
        },
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage -= 1;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage += 1;
            }
        },
        handleSelectedArchetypeChange(newArchetype) {
            this.selectedArchetype = newArchetype;
            this.currentPage = 1;
        },

    },
    components: {
        AppCard,
        AppSelect,
    },
};
</script>


<template>
    <main class="py-5">
        <div class="container">
            <AppSelect @selected-archetype-change="handleSelectedArchetypeChange"/>
            <div class="row d-flex">
                <div class="bg-black text-white py-3" id="ms_row-header">{{ headerInfo }}
                </div>
                <div class="col-12 col-md-6 ms_col-5" v-for="monster in paginatedMonsters" :key="monster.id">
                    <AppCard :monster="monster" :key="monster.id" />
                </div>
                <div class=" d-flex justify-content-center align-items-center pb-4">
                    <button class="btn btn-secondary" @click="prevPage" :disabled="currentPage === 1">Prev</button>
                    <span class="mx-3">Page {{ currentPage }} of {{ totalPages }}</span>
                    <button class="btn btn-secondary" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use "../style/partials/_mixin" as*;
@use "../style/partials/_variables" as*;



@media screen and (min-width: 992px) {
    main {
        background-color: $primary-color;

        .row {
            background-color: white;
            padding: 40px;
            padding-bottom: 0;
        }

        .ms_col-5 {
            flex: 0 0 20%;
            max-width: 20%;
        }
    }

}

#ms_row-header {
    margin: 0 auto;
    width: calc(100% - 24px);

}
</style>