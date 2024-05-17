<script setup>
    import { ref } from 'vue';
    import StoreState from './StoreState.vue';
    import ToIntroductionButton from './ToIntroductionButton.vue';
    import UserDataSample from '../assets/UserDataSample.json';
    import VueQrcode from '@chenfengyuan/vue-qrcode';
    import QueueSample from '../assets/QueuesSample.json';
    import timeTableData from '../assets/TimeTables.json';
    import timeTableComponent from './TimeTable.vue';

    const VisitorID = "MC00001";

    const Queues = ref(QueueSample);

    const UserData = ref(UserDataSample);

    const QRIsActive = ref(false);

    const QRSize = 200;
    const QRTop = window.outerHeight / 2 - QRSize / 2 + "px";
    const QRLeft = window.outerWidth / 2 - QRSize / 2 + "px";

    const date = new Date();

    const showStoreList = ref(Queues.value.filter((Queue) => {
        return (!(Queue.calledAt + (35 * 60 * 1000) < date.getTime()) || Queue.status == 'wait');
    }));
</script>

<template>

    <h1>HOME</h1>

    <div class="IdBox" @click="QRIsActive = !QRIsActive">
        ID:{{ VisitorID }}
    </div>

    <div class="NoResearved" v-if="showStoreList.length == 0">
        <h2>予約店舗がありません</h2>
    </div>
    <div v-else>
        <div class="StoreBox" v-for="Queue in showStoreList" :key="Queue.programId">
            <StoreState :VisitorID=VisitorID :StoreID=Queue.programId :UserData=UserData :Queue=Queue />
        </div>
    </div>
    <div class="ToIntroductionButton_dashboard">
        <ToIntroductionButton />
    </div>

    <div class="QRBackground" v-show="QRIsActive" @click="QRIsActive = !QRIsActive">
        <div class="QRBox">
            <VueQrcode :value="VisitorID" :options="{ width: QRSize }" />
        </div>
    </div>

    <timeTableComponent class="timeTableComponent" v-for="data in timeTableData.wholeTimeTable" :timeTable="data" />

</template>

<style>
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
.NoResearved {
    margin: 10em 0;
}
.ToIntroductionButton_dashboard {
    margin: 4.5em auto 5em;
    align-items: center;
    text-align: center;
}
</style>