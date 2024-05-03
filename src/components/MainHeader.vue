<template>
    <div class="Header">
        <router-link to="/" class="col-6">HOMEへ</router-link> |
        <router-link to="/introduction" class="col-6">出し物紹介</router-link>
    </div>
</template>

<style scoped>
.Header {
position: fixed; /* ヘッダーを固定する */
top: 0; /* 上部から配置の基準位置を決める */
left: 0; /* 左から配置の基準位置を決める */
width: 100%; /* ヘッダーの横幅を指定する */
height: 2.5em; /* ヘッダーの高さを指定する */
padding: 10px; /* ヘッダーの余白を指定する(上下左右) */
background-color: #232525; /* ヘッダーの背景色を指定する */
color: #ffffff; /* フォントの色を指定する */
margin: auto;
font-size: 180%;
z-index: 100;
}
</style>