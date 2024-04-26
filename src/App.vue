<script setup>
import {ref,computed} from 'vue'
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <MainHeader :key=0 />
  <MainHeader :key=1 />
  <router-view></router-view>
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
