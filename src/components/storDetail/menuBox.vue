<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        menuData: {
            type: Object,
            required: true,
        }
    });


</script>

<template>
    <div class="menuBox">

        <img class="menuImage" :src="props.menuData.img" alt="menuImage" />

        <div class="menuName">{{ props.menuData.name }}</div>

        <div class="menuDiscription">{{ props.menuData.discription }}</div>

        <div class="menuPrice">\{{ props.menuData.price }}</div>

    </div>
</template>

<style scoped>
    .menuBox {
        margin: 0;
        display: flex;
        width: 100%;
        height: fit-content;
        background-color: #ffffff;
        font-weight: bold;
        text-decoration: none;
        gap: 0.0em;
        flex-flow: column;
        justify-content: center;
        align-content: center;
    }
    .menuName {
        display: flex;
        width: 90%;
        justify-content: start;
        align-items: stretch;
        margin: auto auto;
        font-size: 1.4em;
        font-weight: bold;
        overflow-wrap: normal;
        word-break: keep-all;
        line-height: 1em;
        height: fit-content;
        padding: 0.5em 0 0 0;
    }
    .menuDiscription {
        display: flex;
        width: 90%;
        font-size: 0.8em;
        font-weight: bold;
        flex-basis: 5em;
        align-items: center;
        text-align: justify;
        word-break: break-all;
        overflow: auto;
        justify-content: left;
        margin: auto auto;
        border-top: 2px solid #555555;
        border-bottom: 2px solid #555555;
    }
    .menuImage {
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        margin: 0;
        border-radius: 0.5em 0.5em 0 0;
    }
    .menuPrice {
        display: flex;
        width: 90%;
        align-items: stretch;
        font-size: 1.2em;
        font-weight: bold;
        max-height: 3.0em;
        flex-basis: 3em;
        word-break: break-all;
        overflow: auto;
        justify-content: start;
        margin: auto auto;
    }
</style>