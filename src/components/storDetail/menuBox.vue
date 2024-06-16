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
    <div class="menuBox" @click="menuBoxClick">

        <img class="menuImage" :src="props.menuData.menuImage" alt="menuImage" />

        <div class="menuName">{{ props.menuData.name }}</div>

        <div class="menuDiscription">{{ props.menuData.discription }}</div>

    </div>
</template>

<style scoped>
    .menuBox {
        margin: 0;
        display: flex;
        width: 100%;
        height: fit-content;
        background-color: #ffffff;
        border-radius: 0.5em;
        box-shadow: 0 0em 0.7em 0.2em rgba(0, 0, 0, 0.2);
        font-weight: bold;
        text-decoration: none;
        gap: 0.0em;
        flex-flow: column;
        justify-content: center;
        align-content: center;
    }
    .menuName {
        display: flex;
        width: 75%;
        justify-content: start;
        align-items: stretch;
        margin: auto auto;
        font-size: 1.9em;
        font-weight: bold;
        overflow-wrap: normal;
        word-break: keep-all;
        line-height: 1em;
        height: fit-content;
        padding: 0.5em 0 0 0;
    }
    .menuDiscription {
        display: flex;
        width: 75%;
        align-items: stretch;
        font-size: 0.8em;
        font-weight: bold;
        max-height: 3.0em;
        flex-basis: 3em;
        word-break: break-all;
        overflow: auto;
        justify-content: start;
        margin: auto auto;
        border-top: 1px solid #555555;
        border-bottom: 1px solid #555555;
    }
    .menuImage {
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        margin: 0;
        border-radius: 0.5em 0.5em 0 0;
    }
</style>