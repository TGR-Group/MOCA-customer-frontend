<template>
    <a class="pagetop" href="#"><div class="pagetop__arrow"></div></a>
</template>

<style scoped>
    .pagetop {
        height: 3.8rem;
        width: 3.8rem;
        position: fixed;
        right: 30px;
        bottom: 3.5rem;
        background: #a0a0a055;
        border: solid 2px #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }

    .pagetop:hover {
        background: #a0a0a07d;
    }

    .pagetop__arrow {
        height: 10px;
        width: 10px;
        border-top: 3px solid #000;
        border-right: 3px solid #000;
        transform: translateY(20%) rotate(-45deg);
    }
</style>