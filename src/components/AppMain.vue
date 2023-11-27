<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    data() {
        return {
            store,
            itemsPerPage: 25,
            currentPage: 1,
        };
    },
    computed: {
        totalItems() {
            return this.store.characters.data.length;
        },
        totalPages() {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        },
        paginatedMonsters() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.store.characters.data.slice(startIndex, endIndex);
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
    },
    components: {
        AppCard,
    },
};
</script>

<template>
    <main>
        <div class="container">
            <div class="row d-flex">
                <div class="bg-black text-white py-3" id="ms_row-header">row header </div>
                <div class="col-12 col-md-6 ms_col-5" v-for="monster in paginatedMonsters" :key="monster.id">
                    <AppCard :monster="monster" />
                </div>
            </div>
            <div class="pagination-buttons d-flex justify-content-center align-items-center pb-4">
                <button class="btn btn-secondary" @click="prevPage" :disabled="currentPage === 1">Prev</button>
                <span class="mx-3">Page {{ currentPage }} of {{ totalPages }}</span>
                <button class="btn btn-secondary" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use "../style/partials/_mixin" as*;
@use "../style/partials/_variables" as*;



@media screen and (min-width: 992px) {
    main {
        border: $border-height solid $primary-color;

        .row {
            border-top: 50px solid white;
            border-left: calc(50px - 12px) solid white;
            border-right: calc(50px - 12px) solid white;
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