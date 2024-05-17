<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  timeTable: {
    type: Object,
    required: true
  }
});

const timeTableDate = new Date(props.timeTable.year, props.timeTable.month - 1, props.timeTable.day);
const nowDate = new Date();

const formatTime = (time) => {
  if (!time.hour && !time.minute) {
    return '';
  }
  return `${time.hour}:${time.minute < 10 ? '0' : ''}${time.minute}`;
};
</script>

<template>
  <div class="timeTable">
    <div class="tableName">{{ timeTable.tableName }}</div>
    <div class="tableDate">{{ timeTable.month }}月{{ timeTable.day }}日</div>
    <table>
      <tr v-for="item in timeTable.table" :key="item.content" class="timeTableList">
        <td>{{ item.content }}</td>
        <td>{{ formatTime(item.start) }}~{{ formatTime(item.end) }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
    .timeTable {
        width: fit-content;
        display: flex;
        flex-flow: column;
    }
    .timeTableList{
        border-bottom: 5px solid;
    }
</style>