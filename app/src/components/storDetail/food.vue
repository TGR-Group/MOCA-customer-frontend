<script setup>
import menuBox from './menuBox.vue';

const props = defineProps({
    storeData: {
        type: Object,
        required: true,
    },
});

</script>

<template>


    <section>

    <h2 class="h2_menu">メニュー</h2>

    <div class="storeDetailMenuBoxes">
        <div class="storeDetailMenuBox" v-for="menuData of props.storeData.menu" >
            <menuBox  :storeName="props.storeData.name" :menuData="menuData"  />
        </div>
    </div>

    </section>
</template>

<style scoped>

    h2{
        width: 76.8%;
        margin: auto ;
        background-color: #dc936f;
    }
    .storeDetailMenuBoxes {
        display: flex;
        width: 80%;
        flex-flow: row wrap;
        gap: 0rem;
        margin: auto;
        justify-content:normal;
    }

    .storeDetailMenuBox {
        max-width: 50%;
        flex-shrink: 0;
        width: 15em;
        margin: 0;
    }
</style>