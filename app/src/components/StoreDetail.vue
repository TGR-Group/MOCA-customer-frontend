<script setup>
    import { ref, inject, onUnmounted, computed } from 'vue';
    import { useRoute, useRouter } from "vue-router";
    import { getStoreDataDetail, registerQueue } from '../global/dbFunctions.js';
    import NotFound from './NotFound.vue';
    import foodDetail from './storDetail/food.vue';
    import cafeDetail from './storDetail/cafe.vue';
    import eventDetail from './storDetail/event.vue';
    import merchandiseSalesDetail from './storDetail/merchandiseSales.vue';
    import exhibitionDetail from './storDetail/exhibition.vue';
    import attractionDetail from './storDetail/attraction.vue';
    import otherDetail from './storDetail/other.vue';

    const route = useRoute();
    const router = useRouter();

    const storeId = route.params.StoreID;
    const StoreData = ref(null);
    getStoreDataDetail(storeId).then((data) => {
        StoreData.value = data;
    });

    const polling = setInterval(() => {
        if(router.currentRoute.path !== '/introduction/detail/:pathMatch(.*)*') return
        if (document.visibilityState === 'visible') {
            getStoreDataDetail(storeId).then((data) => {
                StoreData.value = data;
            });
        }
    }, 60000);


    const waitingTime = computed(() => {
        return Math.floor(StoreData.value.waitingCount / 60000);
    });

    const Reserve = () => {
        registerQueue(StoreData.value.id);
        router.push('/');
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
    onUnmounted(() => {
        clearInterval(polling);
    });
</script>

<template>
    <div v-if="StoreData">
        <h1>{{ StoreData.name }}</h1>
        <div class="storeInfo">
            <p class="Storedescription">{{ StoreData.description }}</p>
            <p class="storePlace">
                <span v-if="StoreData.grade=='部活'">部活：</span><span v-else>クラス：</span>{{ StoreData.className }}<br>
                <span>場所：{{ StoreData.place }}<br></span>
                <span>待ち時間：{{ waitingTime }}分待ち<br></span>
            </p>
        </div>

        <div v-if="StoreData.menu">
            <h2>商品一覧</h2>
            <div class="storeDetailMenuBox">
                <SimplifiedMenuBox :menuData="StoreData.menu"  />
            </div>
        </div>

        <div v-if="StoreData.timeTable && StoreData.timeTable.length > 0">
            <h2>タイムテーブル</h2>
            <TimeTableBox class="timeTableComponent"  v-for="data in StoreData.timeTable" :timeTable="data" />
        </div>

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
h2 {
    margin: auto;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
.Storedescription {
    width: 100%;
    margin: auto auto 2rem auto;
    text-align: left;
    padding: 0%;
    word-break: break-all;
    white-space: pre-line;
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
.storeInfo {
    width: 80%;
    margin: 2em auto;
    font-size: 1.2em;
    text-align: left;
}
</style>