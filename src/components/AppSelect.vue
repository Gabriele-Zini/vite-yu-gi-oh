<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            selectedArchetype: '',
        };
    },
    computed: {
        selectedOptions() {
            return this.store.characters.data.filter((currentArchetype, index, array) =>
                index === array.findIndex(archetype => archetype.archetype === currentArchetype.archetype)
            );
        },
    },
    methods: {
        emitSelectedArchetype() {
            this.$emit('selected-archetype-change', this.selectedArchetype);
        },
        handleFilterClick() {
            this.$emit('handleFilterClick')
        }
    }
}
</script>

<template>
    <div class="mb-5">
        <select name="select" id="select" v-model="selectedArchetype" @change="emitSelectedArchetype">
            <option value="">All Archetypes</option>
            <option v-for="archetype in selectedOptions" :key="archetype.archetype" :value="archetype.archetype">
                {{ archetype.archetype }}
            </option>
        </select>
        <button class="btn btn-secondary ms-3" @click="handleFilterClick">Filter</button>
    </div>
</template>


<style lang="scss" scoped></style>