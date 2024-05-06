<template>
    <router-link to="/" class="btn col-6 ToIntroductionButton">
        <span class="ButtonText">
            <img src="/src/assets/home.svg" height="30em" /> HOMEへ
        </span>
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
    display: flex;
    width: 50%;
    font-size: 150%;
    color: #fff;
    background: #00bff8;
    border-bottom: 5px solid #0090bb;
    -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    margin: 0 auto;
    align-items: center;
    text-align: center;
}

.ToIntroductionButton:hover {
  color: #ffffff;
  background: #00bff8;
  border-bottom: 2px solid #0090bb;
}

.ButtonText {
    display: flex;
    align-items: center;
    margin: 0.2em auto;
    text-align: center;
    justify-content: center;
}

</style>