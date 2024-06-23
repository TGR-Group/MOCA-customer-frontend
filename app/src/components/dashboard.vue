<script setup>
    import { ref, inject, onUpdated, onUnmounted, computed } from 'vue';
    import StoreState from './StoreState.vue';
    import ToIntroductionButton from './ToIntroductionButton.vue';
    import VueQrcode from '@chenfengyuan/vue-qrcode';
    import TimeTableBox from './TimeTableBox.vue';
    import { getUserData } from '../global/dbFunctions.js';

    const userData = ref(getUserData());
    const Queues = inject('Queues');

    const polling = setInterval(() => {
        if(router.currentRoute.path !== '/') return
        if (document.visibilityState === 'visible') {
            userData.value =  getUserData();
        }
    }, 60000);

    const timeTableData = ref(inject('timeTables'));

    const QRIsActive = ref(false);

    const QRSize = 200;
    const QRTop = ref(window.outerHeight / 2 - QRSize / 2 + "px");
    const QRLeft = ref(window.outerWidth / 2 - QRSize / 2 + "px");

    onUpdated(() => {
        QRTop.value = window.outerHeight / 2 - QRSize / 2 + "px";
        QRLeft.value = window.outerWidth / 2 - QRSize / 2 + "px";
    });

    const date = new Date();

    const showStoreList = ref(Queues.filter(Queue => (Queue.status === 'wait' || Queue.status === 'called')));
    computed(() => {showStoreList.value = Queues.filter(Queue => (Queue.status === 'wait' || Queue.status === 'called'));})

    const reserveIsActve = ref(parseInt(sessionStorage.getItem("reserve"),10));
    const Demo = setInterval(() => {
        reserveIsActve.value = parseInt(sessionStorage.getItem("reserve"),10);
    }, 100);
    onUnmounted(() => {
        clearInterval(polling);
        clearInterval(Demo);
    });
</script>

<template>

    <h1>HOME</h1>

    <div class="IdBox" @click="QRIsActive = !QRIsActive">
        ID:{{ userData.screenId }}
    </div>

    <h2>予約状況</h2>

    <div class="NoResearved" v-if="/***showStoreList.length == 0 ||*/ !reserveIsActve">
        <p>予約店舗がありません</p>
    </div>
    <div v-else>
        <div class="StoreBox" v-for="Queue in showStoreList" :key="Queue.programId">
            <StoreState :VisitorID=userData.screenId :StoreID=Queue.programId :UserData=userData :Queue=Queue />
        </div>
    </div>
    <div class="ToIntroductionButton_dashboard">
        <ToIntroductionButton />
    </div>

    <div class="QRBackground" v-show="QRIsActive" @click="QRIsActive = !QRIsActive">
        <div class="QRBox">
            <VueQrcode :value="userData.screenId" :options="{ width: QRSize }" />
        </div>
    </div>

    <h2>タイムテーブル</h2>

    <TimeTableBox class="timeTableComponent" v-for="data in timeTableData.wholeTimeTable" :timeTable="data" />

</template>

<style>
h2 {
    margin: 07rem auto 3rem auto;
    text-align: center;
}
.NoResearved {
    margin: 0;
    font-size: medium;
}
.timeTableComponent {
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.StoreBox {
    margin: 1.0em 0;
    height: fit-content;
}

.QRBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.395);
    z-index: 200;
    vertical-align: middle;
    text-align: center;
}

.QRBox {
    position: fixed;
    top: v-bind(QRTop);
    left: v-bind(QRLeft);
    margin: auto;
}

.IdBox {
    margin: 1.9em auto 1.5em;
    height: fit-content;
    width: fit-content;
    text-align: center;
    font-size: 2.0em;
    font-weight: bold;
    color: #000000;
    background-color: #ffffff;
    padding: 0.3em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.9em rgba(0, 0, 0, 0.5);
}
.ToIntroductionButton_dashboard {
    margin: 4.5em auto 5em;
    align-items: center;
    text-align: center;
}
</style>