<script setup>
import MainHeader from './components/MainHeader.vue';
import ToPageTop from './components/ToPageTop.vue';
import MainFooter from './components/MainFooter.vue';
import { ref,provide } from 'vue';
import { storeDatas, DB_URL, THIS_SITE_URL, queues, timeTables, storeDataDetail } from './global/constDatas.js';


provide('DB_URL', DB_URL);
provide('THIS_SITE_URL', THIS_SITE_URL);
provide ('timeTables', timeTables);
provide ('storeDataDetail', storeDataDetail);
</script>

<template>
  <MainHeader />
  <ToPageTop />
  <div style="margin: 6rem auto 9rem;">
    <router-view />
  </div>
  <!--<MainFooter />-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
