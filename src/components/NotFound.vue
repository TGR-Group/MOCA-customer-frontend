<script setup>
    import ToIntroductionButton from './ToIntroductionButton.vue';
    import ToDashboardButton from './ToDashboardButton.vue';
</script>

<template>
    <h1>Not Found</h1>
    <p>お探しのページは見つかりませんでした。</p>
    <div class="ToIntroductionButton">
        <ToIntroductionButton />
    </div>
    <div class="ToDashboardButton">
        <ToDashboardButton />
    </div>
</template>

<style scoped>
    h1 {
        font-size: 3em;
        margin: 3.5em auto;
    }
    .ToIntroductionButton {
        margin: 5em auto 1em;
        align-items: center;
    }
    .ToDashboardButton {
        margin: 2em auto 5em;
        align-items: center;
    }
</style>