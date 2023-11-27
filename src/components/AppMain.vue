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
    <div class="container">
        <div class="row d-flex">
            <div class="col-12 col-md-6 col-lg-2" v-for="monster in store.characters.data" :key="monster">
                <AppCard :monster="monster" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/partials/_mixin" as*;
@use "../style/partials/_variables" as*;
</style>