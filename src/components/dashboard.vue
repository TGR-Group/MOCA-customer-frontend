<script setup>
    import { ref } from 'vue';
    import StoreState from './StoreState.vue';

    const VisitorID = "MC00001";

    //const ResearvedStoreIDs = ref([10001,20001,30001,40001,50001]);
    const ResearvedStoreIDs = ref([]);

</script>

<template>

    <h1>HOME</h1>

    <div class="IdBox">
        ID:{{ VisitorID }}
    </div>
    <div v-if="ResearvedStoreIDs.length == 0">
        <h2>予約店舗がありません</h2>
    </div>
    <div v-else>
        <div class="StoreBox" v-for="ResearvedStoreID in ResearvedStoreIDs" :key="ResearvedStoreID">
            <StoreState :StoreID=ResearvedStoreID />
        </div>
    </div>
</template>

<style>
.StoreBox {
    margin: 1.0em 0;
    height: fit-content;
}
.IdBox {
    margin: auto auto;
    height: fit-content;
    width: fit-content;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    color: #000000;
    background-color: #ffffff;
    padding: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em #000000;
}
</style>