<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios'
import { store } from './store'
export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppHeader,
        AppMain,
    },
    created() {
        axios.get(this.store.apiUrl).then((resp) => {
            this.store.characters = resp.data;
        })
    }
}
</script>

<template>
    <AppHeader/>
    <AppMain/>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
