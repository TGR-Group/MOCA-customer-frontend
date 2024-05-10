<script setup>
    import { ref } from 'vue';
    import { useRoute } from "vue-router";
    import StoreDatasSample from '../assets/StoreDatasSample.json';

    const StoreDatas = ref(StoreDatasSample);

    const route = useRoute();

    const StoreData = ref(StoreDatas.value.find( d => {return d.id == route.params.StoreID}))
</script>

<template>
    <div>
        <h1>{{ StoreData.name }}詳細</h1>
    </div>
</template>