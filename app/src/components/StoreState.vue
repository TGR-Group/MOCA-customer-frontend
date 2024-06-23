<script setup>
    import { ref, onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { delateQueue, getStoreDataDetail } from '../global/dbFunctions.js'

    const router = useRouter();
    const StoreBoxClick = () => {
        router.push('/introduction/detail/' + props.StoreID);
    }

    const ThirtyMinutes = 30 * 60 * 1000;

    const props = defineProps({
        VisitorID: {
            type: String,
            required: true,
        },
        StoreID: {
            type: String,
            required: true,
        },
        UserData: {
            type: Object,
            required: true,
        },
        Queue: {
            type: Object,
            required: true,
        }

    });

    const ReserveData = ref(null);
    getStoreDataDetail(props.StoreID).then((data) => {
        ReserveData.value = data;
    });

    const polling = setInterval(() => {
        if (router.currentRoute.path !== '/') return
        if (document.visibilityState === 'visible') {
            getStoreDataDetail(props.StoreID).then((data) => {
                ReserveData.value = data;
            });
        }
    }, 60000);

    const BackGroundColor = ref('#ffffff');

    const NowDate = ref(new Date());
    const NowGetTime = ref(NowDate.value.getTime());

    const waitingCount = ref(Math.floor(props.Queue.waitingCount / 60000));

    if((props.Queue.calledAt + ThirtyMinutes - NowGetTime.value) / 1000 / 60 + 5 > 0 && props.Queue.status == 'over'){
        BackGroundColor.value = '#888888';
    }else if (props.Queue.status == 'called') {
        BackGroundColor.value = '#ff000088';
    }else if ( waitingCount.value <= 5) {
        BackGroundColor.value = '#ffff0088';
    }


    /////////////////////////////////////////////////////////////////////////////////


    const RemainingTime = ref(null);
    if (props.Queue.status == 'called') {
        RemainingTime.value = Math.floor((props.Queue.calledAt + ThirtyMinutes - NowGetTime.value) / 1000 / 60);
    }

    const cancel = () => {
        delateQueue(props.StoreID);
    }

    onUnmounted(() => {
        clearInterval(polling);
    });
</script>

<template>
    <div v-if="ReserveData" class="StoreBox" @click="StoreBoxClick">

        <div class="StoreName">{{ ReserveData.name }}</div>

        <div class="StoreDiscription">{{ ReserveData.summary }}</div>

        <div class="StoreState">


            <div v-if="props.Queue.status == 'over'">
                呼び出し終了
            </div>
            <div v-else-if="props.Queue.status == 'called'">
                呼び出し済み<br>残り{{ RemainingTime }}分
            </div>
            <div v-else>
                {{ waitingCount }} 分待ち

            </div>

        </div>

        <div v-if="props.Queue.status != 'over'" class="cancelButton" @click.stop="cancel">
            キャンセル
        </div>

    </div>
</template>


<style scoped>
    .cancelButton {
        margin: auto;
        font-size: 1.2em;
        cursor: pointer;
        grid-row: 2 / 3;
    }
    .StoreBox {
        display: grid;
        width: 80%;
        max-height: 9em;
        margin: 0.5em auto;
        height: fit-content;
        grid-template-columns: 7fr 3fr;
        grid-template-rows: 1fr 2fr;
        background-color: v-bind(BackGroundColor);
        border-radius: 1.5em;
        box-shadow: 0 0em 0.7em 0.2em rgba(0, 0, 0, 0.2);
        font-weight: bold;
        text-decoration: none;
        padding: 0.5em;
        gap: 0.5em;
    }
    .StoreName {
        top: 0%;
        left: 0%;
        font-size: 1.8em;
        font-weight: bold;
        overflow-wrap: normal;
        word-break: keep-all;
        grid-column: 1;
        grid-row: 1;
        line-height: 1em;
        height: fit-content;
    }
    .StoreState {
        left: 100%;
        font-size: 1.2em;
        font-weight: bold;
        grid-column: 2;
        grid-row: 1;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .StoreDiscription {
        font-size: 0.8em;
        font-weight: bold;
        word-break: break-all;
        overflow: auto;
        grid-column: 1;
        grid-row: 2 / 3;
        height: 75%;
    }
</style>