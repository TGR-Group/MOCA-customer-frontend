<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const ToIntroduction = () => {
    router.push("/introduction");
};
</script>

<template>
    <router-link to="/introduction" class="btn col-6 ToIntroductionButton">
        <img src="/src/assets/search.svg" height="30em" /> 出し物紹介へ
    </router-link>
</template>

<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
.ToIntroductionButton {
    font-size: 250%;
    color: #fff;
    background: #00bff8;
    border-bottom: 5px solid #0090bb;
    -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    text-align: center;
}

.ToIntroductionButton:hover {
  margin-top: 3px;
  color: #0090bb;
  background: #00bff8;
  border-bottom: 2px solid #0090bb;
}


</style>