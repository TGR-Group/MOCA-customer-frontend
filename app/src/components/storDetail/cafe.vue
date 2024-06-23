<script setup>

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

</style>