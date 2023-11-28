<script>
export default {

}
</script>

<template>
    <main>
        <div class="d-flex justify-content-center align-items-center ms_loading">
            <div class="d-flex align-items-center justify-content-center fw-bold ms_text-color">
                LOADING... <span class="loader ms-4"></span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/_mixin" as*;
@use "../style/partials/_variables" as*;



main {

    @media screen and (min-width:992px) {
       
    }


    .ms_loading {
        height: calc(100vh - 280px);

        .ms_text-color {
            color: $primary-color;
            font-size: 2rem;
        }

        .loader {
            border: 4px solid $primary-color;
            border-radius: 50%;
            border-top: 4px dotted $primary-color;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            display: inline-block;

        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }

}
</style>