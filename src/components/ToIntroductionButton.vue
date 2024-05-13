<template>
    <div style="height: 4em; display: flex; align-items: end;">
        <router-link to="/introduction" class="btn col-6 ToIntroductionButton">
            <span class="ButtonText">
                <img src="/src/assets/search.svg" height="30em" /> 出し物紹介へ
            </span>
        </router-link>
    </div>
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
    align-items: center;
    text-align: center;
    margin: 0 auto;
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