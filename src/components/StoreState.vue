<script setup>
    import { ref, reactive } from 'vue';


    const Categories = [
        'Food' ,
        'Attraction',
        'Restaurant',
        'Display',
        'Other'
    ];

    const props = defineProps({
        StoreID: Number,
    });
    const state = reactive({
        StoreId: props.StoreID,
        Category: Categories[1],
        StoreName: '私たちの店',
        StoreDescription: 'This is my...qwaesedrfhjgkuhlj;lknbhvjhdrytufyihijkjbhgcfxgstrdyttioijkjbhvjgdtrytuyoihljghftuytuihlkhjfuyiuihljhgdt',
        TimeOrPeople: 'Time',
        WaitingTimeOrpeople: 0,
        Called: false
    });
</script>

<template>
    <div class="StoreBox">
        <div class="StoreName">{{ state.StoreName }}</div>
        <div class="StoreDiscription">{{ state.StoreDescription }}</div>
        <div v-if="state.Called" class="StoreState">
            呼び出し済み
        </div>
        <div v-else-if="state.TimeOrPeople === 'Time'" class="StoreState">
            {{ state.WaitingTimeOrpeople }} 分待ち
        </div>
        <div v-else class="StoreState">
            {{ state.WaitingTimeOrpeople }} 人待ち
        </div>
    </div>
</template>


<style scoped>
    .StoreBox {
        display: grid;
        border: 1px solid #000000;
        width: 80%;
        max-height: 5em;
        margin: 0 auto;
        height: fit-content;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0;
    }
    .StoreName {
        top: 0%;
        left: 0%;
        font-size: 1.5em;
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
        font-size: 1em;
        font-weight: bold;
        grid-column: 2;
        grid-row: 1 / 3;
        height: fit-content;
    }
    .StoreDiscription {
        font-size: 0.5em;
        font-weight: bold;
        word-break: break-all;
        overflow: hidden;
        grid-column: 1;
        grid-row: 2 / 3;
        height: 75%;
    }
</style>