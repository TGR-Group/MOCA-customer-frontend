
import router from '../routes';
<template>
    <div class="Footer">
        <div class="FooterToHomeBg">
            <router-link to="/" class="FooterToHome" >HOME</router-link>
        </div>
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
        background-color: #cee3e3;
        color: white;
        text-align: center;
        padding: 10px;
    }

    .FooterToHome {
        display: flex;
        padding: auto;
        font-size: 1.5rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        color: rgb(34, 34, 34);
        background-color: rgb(255, 255, 255);
        text-decoration: none;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .FooterToHomeBg {
        display: flex;
        position: fixed;
        bottom: 0;
        padding: 0.3rem;
        border-radius: 50%;
        color: rgb(34, 34, 34);
        background-color: #cee3e3;
        text-decoration: none;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
    }
</style>