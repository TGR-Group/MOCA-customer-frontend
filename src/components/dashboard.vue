<script setup>
    import { ref } from 'vue';
    import StoreState from './StoreState.vue';
    import ToIntroductionButton from './ToIntroductionButton.vue';
    import UserDataSample from '../assets/UserDataSample.json';
    import VueQrcode from '@chenfengyuan/vue-qrcode';

    const VisitorID = "MC00001";

    const UserData = ref(UserDataSample);

    const ResearvedStoreIDs = ref(Object.keys(UserData.value[VisitorID].ReservedStore));

    const QRIsActive = ref(false);

    const QRSize = 200;
    const QRTop = window.outerHeight / 2 - QRSize / 2 + "px";
    const QRLeft = window.outerWidth / 2 - QRSize / 2 + "px";

    for (const i of ResearvedStoreIDs.value){
        //残り時間でソートする
    }
</script>

<template>

    <h1>HOME</h1>

    <div class="IdBox" @click="QRIsActive = !QRIsActive">
        ID:{{ VisitorID }}
    </div>

    <div class="NoResearved" v-if="ResearvedStoreIDs.length == 0">
        <h2>予約店舗がありません</h2>
    </div>
    <div v-else>
        <div class="StoreBox" v-for="ResearvedStoreID in ResearvedStoreIDs" :key="ResearvedStoreID">
            <StoreState :VisitorID=VisitorID :StoreID=ResearvedStoreID :UserData=UserData />
        </div>
    </div>
    <div class="ToIntroductionButton">
        <ToIntroductionButton />
    </div>

    <div class="QRBackground" v-show="QRIsActive" @click="QRIsActive = !QRIsActive">
        <div class="QRBox">
            <VueQrcode :value="VisitorID" :options="{ width: QRSize }" />
        </div>
    </div>

</template>

<style>
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
    margin: 0.5em auto;
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
.ToIntroductionButton {
    margin: 5em auto;
    align-items: center;
}
</style>