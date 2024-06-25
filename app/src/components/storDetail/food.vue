<script setup>
import simplifiedMenuBox from './simplifiedMenuBox.vue';
import SimplifiedMenuBox from './simplifiedMenuBox.vue';

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

    <div class="storeDetailMenuBox">
        <SimplifiedMenuBox :menuData="props.storeData.menu"  />
    </div>

    </section>
</template>

<style scoped>

    h2{
        width: 76.8%;
        margin: auto ;
    }

    .storeDetailMenuBox {
        width: 60%;
    }
</style>