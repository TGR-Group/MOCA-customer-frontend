<script setup>

    const props = defineProps({
        menuData: {
            type: Object,
            required: true,
        }
    });
</script>

<template>
    <div class="menuBox">
        <ul style="margin: 0; padding: 0;">
            <li v-for="item in props.menuData" :key="item.name" class="menuList">
                <div class="menuName">{{ item.name }}</div>
                <div class="menuPrice">￥{{ item.price }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.menuBox {
    margin: 0;
    width: 100%;
    height: fit-content;
}

.menuList {
    display: flex;
    width: 100%;
    height: fit-content;
    list-style: none;
    flex-flow: row;
    justify-content: space-between;
    border-bottom: 1px solid #000000;
}

.menuName {
    font-size: 1.2em;
    margin-left: 10%;
    text-align: left;
}

.menuPrice {
    font-size: 1.0em;
    margin: auto 10% auto auto;
    height: fit-content;
}

</style>