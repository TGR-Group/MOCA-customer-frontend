<script setup>
    import { useRoute } from "vue-router";

    const route = useRoute();
</script>

<template>
    <div>
        <h1>{{ route.params.StoreID}}詳細</h1>
    </div>
</template>