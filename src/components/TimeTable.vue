<script setup>
    import TimeTableBox from './TimeTableBox.vue';
    import timeTableData from '../assets/TimeTables.json';

</script>

<template>

    <h1>
        タイムテーブル
    </h1>

    <h2>
        全体の日程
    </h2>
    <TimeTableBox class="timeTableComponent" v-for="data in timeTableData.wholeTimeTable" :timeTable="data" />

    <h2>
        会場別の日程
    </h2>
    <TimeTableBox class="timeTableComponent" v-for="data in timeTableData.eachVenueTimeTable" :timeTable="data" />

</template>

<style scoped>
.timeTableComponent {
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>