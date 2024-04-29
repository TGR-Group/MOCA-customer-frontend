<script setup>


    import { ref, reactive, onMounted } from 'vue';
    import StoreDatasSample from '../assets/StoreDatasSample.json';

    const StoreDatas = ref(StoreDatasSample);

    const props = defineProps({
        StoreID: Number,
    });

    const StoreDatasIndex = ref(StoreDatas.value.findIndex((data) => data.StoreId == props.StoreID));

    const StoreData = ref(StoreDatas.value[StoreDatasIndex.value]);

    const BackGroundColor = ref('#ffffff');


    if(StoreData.value.CalledOver){
        BackGroundColor.value = '#888888';
    }else if (StoreData.value.Called) {
        BackGroundColor.value = '#ff0000';
    }else if (StoreData.value.WaitingPeople <= 5) {
        BackGroundColor.value = '#ffff00';
    }

    /////////////////////////////////////////////////////////////////////////////////

    const NowDate = ref(new Date());
    const NowGetTime = ref(NowDate.value.getTime());
    const AfterThirtyMinutes = ref(30 * 60 * 1000 + NowGetTime.value);

    const RemainingTime = ref(null);
    if (StoreData.value.Called) {
        StoreData.value.CalledOverTime = AfterThirtyMinutes.value - (945 * 1000);
        RemainingTime.value = Math.floor((StoreData.value.CalledOverTime - NowGetTime.value) / 1000 / 60);
    }

</script>

<template>
    <div class="StoreBox">

        <div class="StoreName">{{ StoreData.StoreName }}</div>

        <div class="StoreDiscription">{{ StoreData.StoreDescription }}</div>

        <div class="StoreState">


            <div v-if="StoreData.CalledOver">
                呼び出し終了
            </div>
            <div v-else-if="StoreData.Called">
                呼び出し済み<br>残り{{ RemainingTime }}分
            </div>
            <div v-else>
                {{ StoreData.WaitingPeople }} 人待ち

            </div>

        </div>

    </div>
</template>


<style scoped>
    .StoreBox {
        display: grid;
        width: 80%;
        max-height: 5em;
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
        font-size: 1.0em;
        font-weight: bold;
        grid-column: 2;
        grid-row: 1 / 3;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .StoreDiscription {
        font-size: 0.5em;
        font-weight: bold;
        word-break: break-all;
        overflow: auto;
        grid-column: 1;
        grid-row: 2 / 3;
        height: 75%;
    }
</style>