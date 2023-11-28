<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import AppLoading from './components/AppLoading.vue';
import { store } from './store'
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppLoading,
    },
    created() {
        this.getCharacters()
    },
    methods: {
        getCharacters() {
            const offset = 0;
            this.store.loading = true
            console.log(this.store.loading)
            axios.get(this.store.apiUrl).then((resp) => {
                const num = resp.data.length;
                this.store.characters = resp.data;
            }).finally(() => {
                this.store.loading = false
                console.log(this.store.loading)
            })
        }
    }
}
</script>

<template>
    <AppHeader />
    <AppLoading v-if="store.loading" />
    <AppMain v-else />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
