<template>
    <div class="Header">
        <router-link to="/" class="col-6">Dashboard</router-link> |
        <router-link to="/intoduction" class="col-6">出し物紹介</router-link>
    </div>
</template>

<style scoped>
.Header {
position: fixed; /* ヘッダーを固定する */
top: 0; /* 上部から配置の基準位置を決める */
left: 0; /* 左から配置の基準位置を決める */
width: 100%; /* ヘッダーの横幅を指定する */
height: 35px; /* ヘッダーの高さを指定する */
padding: 10px; /* ヘッダーの余白を指定する(上下左右) */
background-color: #0b1c26; /* ヘッダーの背景色を指定する */
color: #000000; /* フォントの色を指定する */
}
</style>