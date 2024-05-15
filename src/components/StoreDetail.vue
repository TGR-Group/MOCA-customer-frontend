<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from "vue-router";
    import StoreDatasSample from '../assets/StoreDatasSample.json';
    import NotFound from './NotFound.vue';

    const StoreDatas = ref(StoreDatasSample);

    const route = useRoute();
    const router = useRouter();

    const StoreData = ref(StoreDatas.value.find( d => {return d.id == route.params.StoreID}))

</script>

<template>
    <div v-if="StoreData">
        <h1>{{ StoreData.name }}詳細</h1>
    </div>
    <div v-else>
        <NotFound />
    </div>
</template>