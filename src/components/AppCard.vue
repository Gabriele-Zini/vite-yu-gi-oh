<script>
export default {
    props: {
        monster: Object,
    }
}
</script>

<template>
    <div>
        <div v-for="image in monster.card_images" :key="image.id">
            <img :src="image.image_url" :alt="monster.name" class="w-100" />
        </div>
        <h3>{{ monster.name }}</h3>
        <p>{{ monster.type }}</p>
        <p>{{ monster.archetype }}</p>
    </div>
</template>

<style lang="scss">
@use "../style/partials/_mixin" as*;
@use "../style/partials/_variables" as*;
</style>