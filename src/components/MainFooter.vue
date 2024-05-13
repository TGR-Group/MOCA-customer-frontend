
import router from '../routes';
<template>
    <footer>
        <div class="FooterToHome">
            <router-link to="/" class="FooterToHomeText" >HOME</router-link>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100vw;
        background-color: #333;
        color: white;
        text-align: center;
        padding: 10px;
    }

    .FooterToHome {
        display: block;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        color: white;
        background-color: aqua;
        text-decoration: none;
        text-align: center;
    }

    .FooterToHomeText {
        text-align: center;
        margin: auto;
        font-size: 2.0rem;
        color: white;
        text-decoration: none;
    }
</style>