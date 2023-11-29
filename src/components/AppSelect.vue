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
            ).sort((a, b) => (a.archetype && b.archetype) ? a.archetype.localeCompare(b.archetype) : 0);
        },
    },
    methods: {
        emitSelectedArchetype() {
            this.$emit('selected-archetype-change', this.selectedArchetype);
        },
        
    }
}
</script>

<template>
    <div class="mb-5">
        <select class="form-select w-25" name="select" id="select" v-model="selectedArchetype" @change="emitSelectedArchetype">
            <option value="">All Archetypes</option>
            <option v-for="archetype in selectedOptions" :key="archetype.archetype" :value="archetype.archetype">
                {{ archetype.archetype }}
            </option>
        </select>
    </div>
</template>


<style lang="scss" scoped></style>