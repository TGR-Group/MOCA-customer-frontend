<script setup>
    import { computed, ref, onUnmounted } from 'vue';
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
    const waitingCount = computed(() => {
        return Math.floor(props.StoreData.waitingCount / 60000)
    });

    const crowdingSituation = ref('不明');
    getCrowdingSituation(props.StoreID).then((data) => {
        if(data){
            crowdingSituation.value = data;
        };
    })
    .catch(err => {
        console.log(err);
    })

    const polling = setInterval(() => {
        if(router.currentRoute.path !== '/introduction') return
        if (document.visibilityState === 'visible') {
            getCrowdingSituation(props.StoreID)((data) => {
                if (data) {
                    crowdingSituation.value = data.quantity;
                };
            });
        };
    },60000);

    onUnmounted(() => {
        clearInterval(polling);
    });
</script>

<template>
    <div class="StoreBox">

        <img v-if="props.StoreData.StoreImage" class="StoreImage" :src="props.StoreData.StoreImage" alt="StoreImage" />

        <div class="StoreName">{{ props.StoreData.name }}</div>

        <div class="StoreDescription">{{ props.StoreData.summary }}</div>

        <div class="StoreState" v-if="props.StoreData.WaitingPeople <= 0">
            待ち時間なし
        </div><div class="StoreState" v-else>
            <span v-if="waitingCount">{{ waitingCount }} 分待ち</span><span v-else>待ち時間調査中</span>
        </div>

        <div class="buttons">
            <button class="ReserveBtn btn col-6" v-if="props.StoreData.waitEnabled" @click.stop="Reserve">
                並ぶ
            </button>
            <div class="ReserveBtn col-6" v-else-if="crowdingSituation">
                {{ crowdingSituation }}
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
        text-align: left;
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