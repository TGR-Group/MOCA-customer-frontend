<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const StoreBoxClick = () => {
        router.push('/introduction/detail/' + props.StoreID);
    }

    const ReserveIsActive = true;

    const Reserve = () => {
        console.log('Reserve');
    }

    const props = defineProps({
        StoreID: {
            type: String,
            required: true,
        },
        StoreData: {
            type: Object,
            required: true,
        }
    });

    props.StoreData.StoreImage = "https://placehold.jp/160x100.png";
</script>

<template>
    <div class="StoreBox" @click="StoreBoxClick">

        <img class="StoreImage" :src="props.StoreData.StoreImage" alt="StoreImage" />

        <div class="StoreName">{{ props.StoreData.name }}</div>

        <div class="StoreDiscription">{{ props.StoreData.description }}</div>

        <div class="StoreState" v-if="props.StoreData.WaitingPeople <= 0">
            待ち時間なし
        </div><div class="StoreState" v-else>
            {{ props.StoreData.WaitingPeople }} 人待ち
        </div>

        <div class="buttons">
            <button class="btn col-6 ReserveBtn" v-if="ReserveIsActive" @click.stop="Reserve">
                並ぶ
            </button>
            <router-link :to="'/introduction/detail/' + props.StoreID" class="btn col-6 ToDetail">
                詳しく
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    *,
    *:before,
    *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }
    .btn {
        padding: 0;
    }
    .buttons {
        display: flex;
        gap: 0.1em;
        margin: 0.1em auto;
        width: 100%;
    }
    .StoreBox {
        margin: 0;
        display: flex;
        width: 100%;
        height: fit-content;
        background-color: #ffffff;
        border-radius: 0.5em;
        box-shadow: 0 0em 0.7em 0.2em rgba(0, 0, 0, 0.2);
        font-weight: bold;
        text-decoration: none;
        gap: 0.5em;
        flex-flow: column;
    }
    .StoreName {
        top: 0%;
        left: 0%;
        font-size: 1.9em;
        font-weight: bold;
        overflow-wrap: normal;
        word-break: keep-all;
        line-height: 1em;
        height: fit-content;
    }
    .StoreState {
        left: 100%;
        font-size: 1.1em;
        font-weight: bold;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .StoreDiscription {
        display: flex;
        align-items: center;
        font-size: 0.8em;
        font-weight: bold;
        max-height: 3.0em;
        flex-basis: 3em;
        word-break: break-all;
        overflow: auto;
        margin: auto auto;
    }
    .StoreImage {
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        margin: 0;
        border-radius: 0.5em 0.5em 0 0;
    }
    .ReserveBtn {
        background-color: #ffffff;
        display: flex;
        width: 33%;
        font-size: 1.2em;
        color: #363636;
        border: none;
        border-bottom: 2px solid #555555;
        align-items: center;
        text-align: center;
        justify-content:center;
        border-radius: 0em;
        margin: 0.5em 0.7em 0.5em auto;
        text-decoration: none;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
    .ReserveBtn:hover {
        color: #363636;
    }
    .ToDetail {
        display: flex;
        width: 33%;
        font-size: 1.2em;
        color: #363636;
        background: #ffffff;
        border-bottom: 2px solid #555555;
        margin: 0.5em auto 0.5em v-bind("ReserveIsActive ? '0.7em' : 'auto'");
        align-items: center;
        text-align: center;
        justify-content:center;
        border-radius: 0%;
        text-decoration: none;
    }
    .ToDetail:hover {
        color: #363636;
    }
</style>