<script>
export default {
    props: {
        monster: Object,
    }
}
</script>

<template>
    <div>
        <div>
            <img :src="monster.card_images[0].image_url" :alt="monster.name" class="w-100" />
        </div>
        <div class="ms_bg-card text-center mb-4 p-1 pt-4">
            <h3 class="fs-6 text-white">{{ monster.name }}</h3>
            <p>{{ monster.type }}</p>
            <p>{{ monster.archetype }}</p>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/partials/_mixin" as*;
@use "../style/partials/_variables" as*;

.ms_bg-card {
    background-color: $primary-color;
    min-height: 200px;
}
</style>