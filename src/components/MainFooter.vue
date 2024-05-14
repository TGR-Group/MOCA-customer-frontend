
import router from '../routes';
<template>
    <div class="Footer">
        <div class="FooterToHomeBg" />
            <router-link to="/#HOME" class="FooterToHome" >HOME</router-link>
    </div>
</template>

<style scoped>
    .Footer {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        bottom: 0;
        width: 100vw;
        height: 1.5rem;
        background-color: #ffffff;
        color: white;
        text-align: center;
        padding: 10px;
        margin: auto 0 0;
        z-index: 50;
        -webkit-box-shadow: 0 0 1.0em rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 1.0em rgba(0, 0, 0, 0.5);
    }

    .FooterToHome {
        display: flex;
        padding: auto;
        font-size: 1.5rem;
        position: fixed;
        bottom: 0.6rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        color: rgb(34, 34, 34);
        background-color: rgb(165, 226, 252);
        text-decoration: none;
        text-align: center;
        align-items: center;
        justify-content: center;
        z-index: 60;
    }
    .FooterToHomeBg {
        display: flex;
        position: fixed;
        bottom: 2.7rem;
        height: 2.8rem;
        width: 5.6rem;
        border-radius: 50% / 100% 100% 0 0;
        color: rgb(34, 34, 34);
        background-color: #ffffff;
        text-decoration: none;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
        z-index: 10;
    }
</style>