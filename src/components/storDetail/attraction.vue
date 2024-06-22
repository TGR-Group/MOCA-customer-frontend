
<script setup>

const props = defineProps({
    storeData: {
        type: Object,
        required: true,
    },
});

</script>

<template>

    <p>所要時間：{{ props.storeData.requiredTime }}</p>
    <p>人数：{{ props.storeData.numberOfPeople }}</p>

</template>

<style scoped>

</style>