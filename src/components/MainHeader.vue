<script setup>
    import { ref } from 'vue';
    const HamburgerIsActive = ref(false);
</script>

<template>
    <div class="Header">
            <!--ハンバーガーメニューのボタン-->
        <div class="HamburgerBtn" @click='HamburgerIsActive=!HamburgerIsActive'>
            <span class="line line_01" v-bind:class="{'BtnLine01':HamburgerIsActive}"></span>
            <span class="line line_02" v-bind:class="{'BtnLine02':HamburgerIsActive}"></span>
            <span class="line line_03" v-bind:class="{'BtnLine03':HamburgerIsActive}"></span>
        </div>
        <!--サイドバー-->
        <transition name="menu">
            <div style="height: 100%; width: 100%; position: fixed;" v-show="HamburgerIsActive" @click='HamburgerIsActive=!HamburgerIsActive'>
                <div class="menu">
                    <ul>
                        <li><router-link to="/" @click.stop='HamburgerIsActive=!HamburgerIsActive'>ホーム</router-link></li>
                        <li><router-link to="/introduction" @click.stop='HamburgerIsActive=!HamburgerIsActive'>出し物紹介</router-link></li>
                        <li><router-link to="/map" @click.stop='HamburgerIsActive=!HamburgerIsActive'>校内マップ</router-link></li>
                        <li><router-link to="/TimeTable" @click.stop='HamburgerIsActive=!HamburgerIsActive'>タイムテーブル</router-link></li>
                        <li><router-link to="/access" @click.stop='HamburgerIsActive=!HamburgerIsActive'>学校へのアクセス</router-link></li>
                    </ul>
                </div>
            </div>
        </transition>
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
background-color: #cee3e3; /* ヘッダーの背景色を指定する */
color: #ffffff; /* フォントの色を指定する */
margin: auto;
font-size: 150%;
z-index: 100;
}

/*ボタン*/
.HamburgerBtn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  left: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}

.HamburgerBtn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #333333;
  text-align: center;
}

.HamburgerBtn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.HamburgerBtn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.HamburgerBtn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}


.BtnLine01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.BtnLine02 {
  transition: 0.4s ease;
  opacity: 0;
}
.BtnLine03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

/*サイドバー*/
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}
.menu {
  background-color: rgba(197, 197, 197, 0.929);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 20rem;
  height: 80rem;
  top: 0;
  left: 0;
}
.menu a {
  color: rgb(66, 66, 66);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 2rem;
}
.menu ul{
  margin: 1rem;
  padding: 0;
}

</style>