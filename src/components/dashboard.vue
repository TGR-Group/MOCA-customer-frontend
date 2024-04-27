<script setup>
    import StoreState from './StoreState.vue';

    const VisitorID = "MC00001";

</script>

<template>
    <div class="IdBox">
        ID:{{ VisitorID }}
    </div>

    <div class="StoreBox">
        <StoreState :StoreID=10001 />
    </div>
    <div class="StoreBox">
        <StoreState :StoreID=20001 />
    </div>

    <div class="StoreBox">
        <StoreState :StoreID=30001 />
    </div>

    <div class="StoreBox">
        <StoreState :StoreID=40001 />
    </div>

    <div class="StoreBox">
        <StoreState :StoreID=50001 />
    </div>


</template>

<style>
.StoreBox {
    margin: 1.0em 0;
    height: fit-content;
}
.IdBox {
    margin: auto auto;
    height: fit-content;
    width: fit-content;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    color: #000000;
    background-color: #ffffff;
    padding: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em #000000;
}
</style>