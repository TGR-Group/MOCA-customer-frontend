<script setup>
    const props = defineProps({
        StoreID: {
            type: String,
            required: true,
        },
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
        <router-link :to="'/introduction/detail/' + props.StoreID" class="btn col-6 ToDetail">
            詳しく
        </router-link>
    </div>
</template>

<style scoped>
    *,
    *:before,
    *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }
    .btn {
        padding: 0;
    }
    .StoreBox {
        display: grid;
        width: 80%;
        max-height: 9em;
        margin: 0.5em auto;
        height: fit-content;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 1fr 2fr;
        background-color: #ffffff;
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
        font-size: 1.8em;
        font-weight: bold;
        overflow-wrap: normal;
        word-break: keep-all;
        grid-column: 1;
        grid-row: 1 / 2;
        line-height: 1em;
        height: fit-content;
    }
    .StoreState {
        left: 100%;
        font-size: 1.2em;
        font-weight: bold;
        grid-column: 2;
        grid-row: 1 / 3;
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
        grid-row: 2 / 4;
        height: 75%;
    }
    .ToDetail {
        grid-column: 2;
        grid-row: 3;
        display: flex;
        width: 100%;
        color: #fff;
        background: #00bff8;
        border-bottom: 5px solid #0090bb;
        -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
        box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
        margin: auto;
        align-items: center;
        text-align: center;
        justify-content:center;
    }
    .ToDetail:hover {
        color: #ffffff;
        background: #00bff8;
        border-bottom: 2px solid #0090bb;
    }
</style>