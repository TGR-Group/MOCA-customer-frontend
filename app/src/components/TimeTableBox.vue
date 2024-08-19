<script setup>
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
    <div class="tableDate">日付：{{ timeTable.month }}月{{ timeTable.day }}日</div>
    <div v-if="timeTable.venueName">
      場所：<router-link :to="timeTable.venueMap">{{ timeTable.venueName }}</router-link>
    </div>
      <ul style="width: 95%;">
        <li v-for="item in timeTable.table" :key="item.content" class="timeTableList" :class="{'listHighlight' : item.highlight}">
          <div class="timeTableTime">
            <div class="timeTableTimeContent">
              {{ formatTime(item.start) }}~{{ formatTime(item.end) }}
            </div>
          </div>
          <router-link v-if="item.pageLink" :to="item.pageLink" class="timeTableContent">
            {{ item.content }}
          </router-link>
          <div v-else class="timeTableContent">
            {{ item.content }}
          </div>
        </li>
    </ul>
  </div>
</template>

<style scoped>
    .timeTable {
        width: 75%;
        display: flex;
        flex-flow: column;
        color: black;
        -webkit-box-shadow: 0 0em 0.7em 0.2em rgba(0, 0, 0, 0.2);
        box-shadow: 0 0em 0.7em 0.2em rgba(0, 0, 0, 0.2);
        border-radius: 1em;
    }

    .timeTable .tableName {
        text-align: center;
        font-size: 1.5em;
        padding: 0.2em;
    }
    .tableDate {
        text-align: center;
        font-size: 1.2em;
        padding: 0.2em;
    }

    .timeTableList{
        display: flex;
        flex-flow: row;
        justify-content: center;
        width: 100%;
        border-bottom: 1px solid;
        text-align: center;
    }
    .listHighlight{
        background-color: #8af57e;
    }
    .timeTableTime{
        width: 50%;
        display: flex;
        flex-flow: row;
        justify-content: center;
    }
    .timeTableTimeContent{
        width: 6em;
        text-align: left;
    }
    .timeTableContent{
        width: 50%;
    }
    ul{
        padding-left:0;
    }

    li{
        list-style:none;
    }
</style>