<script setup>
    import { ref } from "vue";

    const props = defineProps({
        StoreData: {
            type: Object,
            required: true,
        }
    });
</script>

<template>
    <div class="StoreBox">

        <div class="StoreName">{{ props.StoreData.StoreName }}</div>

        <div class="StoreDiscription">{{ props.StoreData.StoreDescription }}</div>

        <div class="StoreState">
            {{ props.StoreData.WaitingPeople }} 人待ち
        </div>
    </div>
</template>

<style scoped>
    .StoreBox {
        display: grid;
        width: 80%;
        max-height: 9em;
        margin: 0.5em auto;
        height: fit-content;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 1fr 2fr;
        background-color: v-bind(BackGroundColor);
        border-radius: 1.5em;
        box-shadow: 0 0em 0.7em 0.2em rgba(0, 0, 0, 0.2);
        font-weight: bold;
        text-decoration: none;
        padding: 0.5em;
        gap: 0.5em;
    }
    .StoreName {
        top: 0%;
        left: 0%;
        font-size: 2.0em;
        font-weight: bold;
        overflow-wrap: normal;
        word-break: keep-all;
        grid-column: 1;
        grid-row: 1;
        line-height: 1em;
        height: fit-content;
    }
    .StoreState {
        left: 100%;
        font-size: 1.5em;
        font-weight: bold;
        grid-column: 2;
        grid-row: 1 / 2;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .StoreDiscription {
        font-size: 0.8em;
        font-weight: bold;
        word-break: break-all;
        overflow: auto;
        grid-column: 1;
        grid-row: 2 / 3;
        height: 75%;
    }
</style>