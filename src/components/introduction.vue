<script setup>
    import { ref } from 'vue';
    import StoreDatasSample from '../assets/StoreDatasSample.json';
    import StoreDiscriptionBox from './StoreDiscriptionBox.vue';

    const StoreDatas = ref(StoreDatasSample);

    const StoreIDs = ref(Object.keys(StoreDatas.value));
</script>

<template>
    <div>
        <h1>出し物紹介</h1>
    </div>
    <div class="StoreBox" v-for="StoreID in StoreIDs" :key="StoreID">
        <StoreDiscriptionBox :StoreData=StoreDatas[StoreID]  />
    </div>
</template>

<style>
.StoreBox {
    margin: 1.5em 0;
    height: fit-content;
}
</style>