<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    data() {
        return {
            store,
        }

    },
    components: {
        AppCard,
    }
}
</script>
<template>
    <main>
        <div class="container">
            <div class="row d-flex">
                <div class="bg-black text-white py-3" id="ms_row-header">row header </div>
                <div class="col-12 col-md-6 ms_col-5 " v-for="monster in store.characters.data" :key="monster">
                    <AppCard :monster="monster" />
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
        border: 100px solid $primary-color;

        .row {
            border-top: 50px solid white;
            border-left: calc(50px - 12px) solid white;
            border-right: calc(50px - 12px) solid white;
            border-bottom: calc(50px - 24px) solid white;
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