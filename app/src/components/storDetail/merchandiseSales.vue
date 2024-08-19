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
    <h2>商品一覧</h2>
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