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
        <ul>
            <li v-for="item in props.menuData" :key="item.name" class="menuList">
                <div class="menuName">{{ item.name }}</div>
                <div class="menuPrice">\{{ item.price }}</div>
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
    flex-flow: row;
    justify-content: space-between;
    border-bottom: 2px solid #000000;
}

.menuName {
    font-size: 1.5em;
    margin-left: 10%;
}

.menuPrice {
    font-size: 1.0em;
    margin-right: 10%;
}

</style>