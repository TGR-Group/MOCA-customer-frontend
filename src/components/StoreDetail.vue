<script setup>
    import { ref, inject } from 'vue';
    import { useRoute } from "vue-router";
    import NotFound from './NotFound.vue';
    import foodDetail from './storDetail/food.vue';
    import cafeDetail from './storDetail/cafe.vue';
    import eventDetail from './storDetail/event.vue';
    import merchandiseSalesDetail from './storDetail/merchandiseSales.vue';
    import exhibitionDetail from './storDetail/exhibition.vue';
    import attractionDetail from './storDetail/attraction.vue';
    import otherDetail from './storDetail/other.vue';

    const StoreDatas = ref(inject('storeDatas'));

    const route = useRoute();

    const StoreData = ref(StoreDatas.value.find( d => {return d.id == route.params.StoreID}))

    const StoreCategory = {
        '食販': foodDetail,
        '飲食店': cafeDetail,
        '物販': merchandiseSalesDetail,
        '体験型': eventDetail,
        '展示': exhibitionDetail,
        'イベント': eventDetail,
        '体験型': attractionDetail,
        'その他': otherDetail
    };

</script>

<template>
    <div v-if="StoreData">
        <h1>{{ StoreData.name }}</h1>
        <component :is="StoreCategory[StoreData.category]" :storeData="StoreData" />
    </div>
    <div v-else>
        <NotFound />
    </div>
</template>