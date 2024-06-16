<script setup>
    import { ref, inject } from 'vue';
    import { useRoute, useRouter } from "vue-router";
    import { registerQueue } from '../global/dbFunctions.js'
    import NotFound from './NotFound.vue';
    import foodDetail from './storDetail/food.vue';
    import cafeDetail from './storDetail/cafe.vue';
    import eventDetail from './storDetail/event.vue';
    import merchandiseSalesDetail from './storDetail/merchandiseSales.vue';
    import exhibitionDetail from './storDetail/exhibition.vue';
    import attractionDetail from './storDetail/attraction.vue';
    import otherDetail from './storDetail/other.vue';

    const StoreDatas = ref(inject('storeDatas'));

    const storeDataDetail = inject('storeDataDetail');

    const route = useRoute();
    const router = useRouter();

    const StoreData = ref(StoreDatas.value.find( d => {return d.id == route.params.StoreID}));

    StoreData.value.img = storeDataDetail[StoreData.value.name].img;

    const Reserve = () => {
        registerQueue(StoreData.value.id);
        router.push('/');
    }

    if (storeDataDetail[StoreData.value.name].menu) {
        StoreData.value.menu = storeDataDetail[StoreData.value.name].menu;
    }

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
        <section>
            <img :src="StoreData.img" alt="storeImage" width="76.8%" style="margin: auto auto 2.5em auto;" />
        </section>
        <component :is="StoreCategory[StoreData.category]" :storeData="StoreData" margin="auto" />
        <div style="height: 7em; display: flex; align-items: end;">
            <button v-if="StoreData.waitEnabled" class="reserveButton" @click="Reserve">
                <span class="ButtonText">並ぶ</span>
            </button>
        </div>
    </div>
    <div v-else>
        <NotFound />
    </div>
</template>

<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
.reserveButton {
    display: flex;
    width: 50%;
    font-size: 150%;
    color: #fff;
    background: #00bff8;
    border: 0;
    border-radius: 0.3em;
    border-bottom: 3px solid #0090bb;
    align-items: center;
    text-align: center;
    margin: auto;
}

.reserveButton:hover {
  color: #ffffff;
  background: #00bff8;
  border-bottom: 0px solid #0090bb;
}

.ButtonText {
    display: flex;
    align-items: center;
    margin: 0.2em auto;
    text-align: center;
    justify-content: center;
}
</style>