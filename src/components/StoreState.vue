<script setup>
    import { ref } from 'vue';
    import StoreDatasSample from '../assets/StoreDatasSample.json';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const StoreBoxClick = () => {
        router.push('/introduction/detail/' + props.StoreID);
    }


    const StoreDatas = ref(StoreDatasSample);

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

    const ReserveData = ref(StoreDatas.value.find( d => {
        return d.id === props.StoreID
    }));

    const BackGroundColor = ref('#ffffff');

    if(props.Queue.status == 'canceled'){
        BackGroundColor.value = '#888888';
    }else if (props.Queue.status == 'called') {
        BackGroundColor.value = '#ff000088';
    }/*else if (ReserveData.value.WaitingPeople <= 5) {
        BackGroundColor.value = '#ffff0088';
    }*/

    /////////////////////////////////////////////////////////////////////////////////

    const NowDate = ref(new Date());
    const NowGetTime = ref(NowDate.value.getTime());
    const AfterThirtyMinutes = ref(30 * 60 * 1000 + NowGetTime.value);

    const RemainingTime = ref(null);
    if (props.Queue.status == 'called') {
        ReserveData.value.CalledOverTime = AfterThirtyMinutes.value - (945 * 1000);
        RemainingTime.value = Math.floor((ReserveData.value.CalledOverTime - NowGetTime.value) / 1000 / 60);
    }

</script>

<template>
    <div class="StoreBox" @click="StoreBoxClick">

        <div class="StoreName">{{ ReserveData.name }}</div>

        <div class="StoreDiscription">{{ ReserveData.description }}</div>

        <div class="StoreState">


            <div v-if="props.Queue.status == 'cancelled'">
                呼び出し終了
            </div>
            <div v-else-if="props.Queue.status == 'called'">
                呼び出し済み<br>残り{{ RemainingTime }}分
            </div>
            <div v-else>
                {{ ReserveData.WaitingPeople }} 人待ち

            </div>

        </div>

    </div>
</template>


<style scoped>
    .StoreBox {
        display: grid;
        width: 80%;
        max-height: 9em;
        margin: 0.5em auto;
        height: fit-content;
        grid-template-columns: 4fr 1fr;
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
        grid-row: 1 / 3;
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