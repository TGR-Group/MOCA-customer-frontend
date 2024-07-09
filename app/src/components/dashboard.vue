<script setup>
    import { ref, inject, onUpdated, onUnmounted, computed } from 'vue';
    import StoreState from './StoreState.vue';
    import ToIntroductionButton from './ToIntroductionButton.vue';
    import VueQrcode from '@chenfengyuan/vue-qrcode';
    import TimeTableBox from './TimeTableBox.vue';

    const userData = inject('userData');
    const Queues = inject('Queues');


    const timeTableData = ref(inject('timeTables'));

    const QRIsActive = ref(false);

    const QRSize = 200;
    const QRTop = ref(window.outerHeight / 2 - QRSize / 2 + "px");
    const QRLeft = ref(window.outerWidth / 2 - QRSize / 2 + "px");

    onUpdated(() => {
        QRTop.value = window.outerHeight / 2 - QRSize / 2 + "px";
        QRLeft.value = window.outerWidth / 2 - QRSize / 2 + "px";
    });

    const showStoreList = computed(() => {
        if (Queues.value){
            return Queues.value.filter(Queue => (Queue.status === 'wait' || Queue.status === 'called'));
        }else{
            return [];
        }
    })

</script>

<template>

    <h1>HOME</h1>

    <div class="IdBox" v-if="userData" @click="QRIsActive = !QRIsActive">
        ID:{{ userData.screenId }}
    </div>
    <div class="IdBox" v-else>
        ID:取得中
    </div>

    <h2>予約状況</h2>

    <div class="NoResearved" v-if="showStoreList.length == 0">
        <p>予約店舗がありません</p>
    </div>
    <div v-else>
        <div class="StoreBox" v-for="Queue in showStoreList" :key="Queue.programId">
            <StoreState :VisitorID=userData.screenId :StoreID=Queue.programId :UserData=userData :Queue=Queue />
        </div>
    </div>
    <!--<p style="font-size: medium;">予約機能停止中</p>-->
    <div class="ToIntroductionButton_dashboard">
        <ToIntroductionButton />
    </div>

    <div class="QRBackground" v-if="false && userData && QRIsActive" @click="QRIsActive = !QRIsActive">
        <div class="QRBox">
            <VueQrcode :value="userData.screenId" :options="{ width: QRSize }" />
        </div>
    </div>

    <h2>タイムテーブル</h2>

    <h3>
        全体の日程
    </h3>
    <TimeTableBox class="timeTableComponent" v-for="data in timeTableData.wholeTimeTable" :timeTable="data" />

    <h3>
        会場別の日程
    </h3>
    <TimeTableBox class="timeTableComponent" v-for="data in timeTableData.eachVenueTimeTable" :timeTable="data" />


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
