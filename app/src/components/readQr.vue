<script setup>
import { inject, ref, onMounted } from 'vue';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

const Url = inject('THIS_SITE_URL');

const qrError = ref(null);
const qrResult = ref(null);

const onDecode = (result) => {
   qrResult.value = result;
}

const onInit = (promise) => {
   promise.then(() => {
      qrError.value = null;
   }).catch((error) => {
      qrError.value = error;
   });
}

</script>

<template>
   <div id="app">
      <p class="error">{{ qrError }}</p>
      <p class="decode-result">Last result: <b>{{ qrResult }}</b></p>
      <qrcode-stream @decode="onDecode" @init="onInit" />
   </div>
</template>

<style scoped>

</style>