<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { registerQueue } from '../global/dbFunctions.js'
    import { getCrowdingSituation } from '../global/dbFunctions.js'

    const router = useRouter();
    const StoreBoxClick = () => {
        router.push('/introduction/detail/' + props.StoreID);
    }


    const Reserve = () => {
        registerQueue(props.StoreID);
        router.push('/');
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

    //props.StoreData.StoreImage = "https://placehold.jp/160x100.png";

    const crowdingSituation = ref(null);
    getCrowdingSituation(props.StoreID).then((data) => {
        crowdingSituation.value = data;
    })

    const polling = setInterval(() => {
        if(router.currentRoute.path !== '/introduction') return
        if (document.visibilityState === 'visible') {
            getCrowdingSituation(props.StoreID)((data) => {
                crowdingSituation.value = data;
            });
        };
    },60000);

</script>

<template>
    <div class="StoreBox" @click="StoreBoxClick">

        <img v-if="props.StoreData.StoreImage" class="StoreImage" :src="props.StoreData.StoreImage" alt="StoreImage" />

        <div class="StoreName">{{ props.StoreData.name }}</div>

        <div class="StoreDescription">{{ props.StoreData.summary }}</div>

        <div class="StoreState" v-if="props.StoreData.WaitingPeople <= 0">
            待ち時間なし
        </div><div class="StoreState" v-else>
            {{ props.StoreData.WaitingPeople }} 人待ち
        </div>

        <div class="buttons">
            <button class="ReserveBtn btn col-6" v-if="props.StoreData.waitEnabled" @click.stop="Reserve">
                並ぶ
            </button>
            <div class="ReserveBtn btn col-6" v-else-if="crowdingSituation">
                {{ crowdingSituation.quantity }}
            </div>
            <router-link :to="'/introduction/detail/' + props.StoreID" class="ToDetail btn col-6">
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
        margin: 1.2rem auto 1.0rem auto;
        width: 75%;
        justify-content: space-between;
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
        gap: 0.0em;
        flex-flow: column;
        justify-content: center;
        align-content: center;
    }
    .StoreName {
        display: flex;
        width: 75%;
        justify-content: start;
        align-items: stretch;
        margin: auto auto;
        font-size: 1.5em;
        font-weight: bold;
        overflow-wrap: normal;
        word-break: normal;
        line-height: 1em;
        height: fit-content;
        padding: 0.5em 0 0 0;
    }
    .StoreState {
        display: flex;
        width: 75%;
        justify-content: start;
        align-items: stretch;
        margin: auto auto;
        left: 100%;
        font-size: 1.1em;
        font-weight: bold;
        top: 0;
        bottom: 0;
    }
    .StoreDescription {
        display: flex;
        width: 75%;
        align-items: stretch;
        font-size: 0.8em;
        font-weight: bold;
        max-height: 3.0em;
        flex-basis: 3em;
        word-break: break-all;
        overflow: auto;
        justify-content: start;
        margin: auto auto;
        border-top: 1px solid #555555;
        border-bottom: 1px solid #555555;
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
        display: block;
        width: fit-content;
        font-size: 1.2em;
        border: none;
        border-bottom: 0px solid #555555;
        text-align: left;
        border-radius: 0em;
        text-decoration: none;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        color: #3d3d3d;
    }
    .ReserveBtn:hover {
        color: #3d3d3d;
    }
    .ToDetail {
        display: block;
        width: fit-content;
        font-size: 1.2em;
        background: #ffffff;
        border-bottom: 0px solid #555555;
        text-align: right;
        border-radius: 0%;
        text-decoration: none;
        color: #3d3d3d;
    }
    .ToDetail:hover {
        color: #3d3d3d;
    }
</style>