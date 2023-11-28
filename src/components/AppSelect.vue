<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
        };
    },
    computed: {
        selectedOptions() {
            return this.store.characters.data.filter((currentArchetype, index, array) =>
                index === array.findIndex(archetype => archetype.archetype === currentArchetype.archetype)
            );
        },
    },
};
</script>


<template>
    <div>
        <select name="select" id="select">
            <option v-for="archetype in selectedOptions" :key="archetype.archetype" :value="archetype.archetype">
                {{ archetype.archetype }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped></style>