<script setup>
import MainHeader from './components/MainHeader.vue';
import ToPageTop from './components/ToPageTop.vue';
import MainFooter from './components/MainFooter.vue';
import callNotification from './components/callNotification.vue';
import { ref, provide, readonly, onUnmounted } from 'vue';
import { getQueue } from './global/dbFunctions.js';
import { timeTables, storeDataDetail } from './global/constDatas.js';
import CallNotification from './components/callNotification.vue';

const Queues = ref(null);
getQueue().then((data) => {
  Queues.value = data;
});
const showCallNotification = ref(false);
const callNotificationData = ref(null);

const pollingQueueFunc = () => {for (let i = 0; i < Queues.value.length; i++) {
    if (!Queues.value[i].callNotification) {
      Queues.value[i].callNotification = false;
    }
    if (Queues.value[i].callNotification = true && Queues.value[i].status == 'called') {
      showCallNotification.value = true;
      callNotificationData.value = Queues.value[i];
    }
  }
}

const polling = setInterval(() => {
  if (document.visibilityState === 'visible') {
    getQueue().then((data) => {
      Queues.value = data;
    });
  }
  pollingQueueFunc();
}, 60000);

const checkNotification = () => {
  showCallNotification.value = false;
  callNotificationData.value = null;
}

provide('Queues', readonly(Queues));
provide('DB_URL', readonly(import.meta.env.VITE_API_URL));
provide('THIS_SITE_URL', readonly(import.meta.env.VITE_THIS_SITE_URL));
provide ('timeTables', readonly(timeTables));
provide ('storeDataDetail', readonly(storeDataDetail));

onUnmounted(() => {
    clearInterval(polling);
});
</script>

<template>
  <MainHeader />
  <ToPageTop />
  <div style="margin: 6rem auto 9rem;">
    <router-view />
  </div>
  <CallNotification @checkNotification="checkNotification" v-if="showCallNotification" :storeId="callNotificationData.programId" />
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
