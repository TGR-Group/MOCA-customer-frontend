<script setup>

const props = defineProps({
    storeData: {
        type: Object,
        required: true,
    },
});

</script>

<template>

    <h2>タイムテーブル</h2>
    <TimeTableBox class="timeTableComponent" v-if="props.storeData.timeTable" v-for="data in props.storeData.timeTable" :timeTable="data" />
</template>

<style scoped>
.timeTableComponent {
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>