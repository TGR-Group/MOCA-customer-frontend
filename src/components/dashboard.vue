<script setup>
    import { ref } from 'vue';
    import StoreState from './StoreState.vue';
    import ToIntroductionButton from './ToIntroductionButton.vue';

    const VisitorID = "MC00001";

    const ResearvedStoreIDs = ref([10001,20001,30001,40001,50001]);
    //const ResearvedStoreIDs = ref([]);

    for (const i of ResearvedStoreIDs.value){
        //残り時間でソートする
    }
</script>

<template>

    <h1>HOME</h1>

    <div class="IdBox">
        ID:{{ VisitorID }}
    </div>
    <div class="NoResearved" v-if="ResearvedStoreIDs.length == 0">
        <h2>予約店舗がありません</h2>
    </div>
    <div v-else>
        <div class="StoreBox" v-for="ResearvedStoreID in ResearvedStoreIDs" :key="ResearvedStoreID">
            <StoreState :StoreID=ResearvedStoreID />
        </div>
    </div>
    <div class="ToIntroductionButton">
        <ToIntroductionButton />
    </div>
</template>

<style>
.StoreBox {
    margin: 1.0em 0;
    height: fit-content;
}
.IdBox {
    margin: 0.5em auto;
    height: fit-content;
    width: fit-content;
    text-align: center;
    font-size: 2.7em;
    font-weight: bold;
    color: #000000;
    background-color: #ffffff;
    padding: 0.3em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em #000000;
}
.NoResearved {
    margin: 10em 0;
}
.ToIntroductionButton {
    margin: 5em 0;
    align-items: center;
}
</style>