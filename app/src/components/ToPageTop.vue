<script setup>
import { onMounted, ref } from 'vue'

const buttonActive = ref(false)

let scroll = 0

const toPageTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

const scrollWindow = () => {
  const top = 50 //topから100pxスクロールしたらボタン登場
  scroll = window.scrollY //垂直方向

  if (top <= scroll) {
    buttonActive.value = true
  } else {
    buttonActive.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollWindow)
})
</script>

<template>
    <button v-show="buttonActive" class="pagetop" @click="toPageTop"><div class="pagetop__arrow"></div></button>
</template>

<style scoped>
    .pagetop {
        height: 3.8rem;
        width: 3.8rem;
        position: fixed;
        right: 30px;
        bottom: 3.5rem;
        background: #a0a0a055;
        border: solid 2px #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        animation: fadein 500ms ease-out forwards;
    }

    @keyframes fadein {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
    .pagetop:hover {
        background: #a0a0a07d;
    }

    .pagetop__arrow {
        height: 10px;
        width: 10px;
        border-top: 3px solid #000;
        border-right: 3px solid #000;
        transform: translateY(20%) rotate(-45deg);
    }
</style>