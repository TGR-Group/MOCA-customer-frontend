<script setup>
import MainHeader from './components/MainHeader.vue';
import ToPageTop from './components/ToPageTop.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
  <MainHeader />
  <ToPageTop />
  <div style="margin: 6rem auto;">
    <router-view />
  </div>
  <MainFooter />
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
