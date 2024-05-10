<script setup>
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
</script>

<template>
    <div class="StoreBox">

        <div class="StoreName">{{ props.StoreData.StoreName }}</div>

        <img class="StoreImage" :src="props.StoreData.StoreImage" alt="StoreImage" />

        <div class="StoreDiscription">{{ props.StoreData.StoreDescription }}</div>

        <div class="StoreState">
            {{ props.StoreData.WaitingPeople }} 人待ち
        </div>

        <div class="buttons">
            <button class="btn col-6 ReserveBtn" @click="Reserve">
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
        margin: 0.5em auto;
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
        font-size: 1.8em;
        font-weight: bold;
        overflow-wrap: normal;
        word-break: keep-all;
        line-height: 1em;
        height: fit-content;
    }
    .StoreState {
        left: 100%;
        font-size: 1.2em;
        font-weight: bold;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .StoreDiscription {
        font-size: 0.8em;
        font-weight: bold;
        word-break: break-all;
        overflow: auto;
        height: 75%;
    }
    .StoreImage {
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        margin: 0;
    }
    .ReserveBtn {
        display: flex;
        width: 33%;
        font-size: 1.2em;
        color: #fff;
        border: none;
        background: #00bff8;
        border-bottom: 3px solid #0090bb;
        -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
        box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
        margin: auto;
        align-items: center;
        text-align: center;
        justify-content:center;
        margin: 0.5em 0.1em 0.5em auto;
    }
    .ReserveBtn:hover {
        color: #ffffff;
        background: #00bff8;
        border-bottom: 0px solid #0090bb;
    }
    .ToDetail {
        display: flex;
        width: 33%;
        font-size: 1.2em;
        color: #fff;
        background: #00bff8;
        border-bottom: 3px solid #0090bb;
        -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
        box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
        margin: 0.5em 0.1em 0.5em auto;
        align-items: center;
        text-align: center;
        justify-content:center;
        margin: 0.5em auto;
    }
    .ToDetail:hover {
        color: #ffffff;
        background: #00bff8;
        border-bottom: 0px solid #0090bb;
    }
</style>