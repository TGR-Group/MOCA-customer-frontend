<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from "vue-router";
    import StoreDatasSample from '../assets/StoreDatasSample.json';

    const StoreDatas = ref(StoreDatasSample);

    const route = useRoute();
    const router = useRouter();

    const StoreData = ref(StoreDatas.value.find( d => {return d.id == route.params.StoreID}))

    if (StoreData.value == undefined){
        StoreData.value = {name: "該当する店舗がありません"}
        router.push('/NotFound')
    }
</script>

<template>
    <div>
        <h1>{{ StoreData.name }}詳細</h1>
    </div>
</template>