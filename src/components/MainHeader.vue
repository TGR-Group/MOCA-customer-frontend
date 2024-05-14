<script setup>
    import { ref } from 'vue';
import router from '../routes';
    const HamburgerIsActive = ref(false);
</script>

<template>
    <div class="Header">
      <div style="height: 3.3em">
        <router-link to="/" class="HeaderTitle">MOCA</router-link>
      </div>
      <div class="HamburgerBtn" @click='HamburgerIsActive=!HamburgerIsActive'>
          <span class="line line_01" v-bind:class="{'BtnLine01':HamburgerIsActive}"></span>
          <span class="line line_02" v-bind:class="{'BtnLine02':HamburgerIsActive}"></span>
          <span class="line line_03" v-bind:class="{'BtnLine03':HamburgerIsActive}"></span>
      </div>

      <transition name="menu">
          <div class="MenuBackground" v-show="HamburgerIsActive" @click='HamburgerIsActive=!HamburgerIsActive'>
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
height: fit-content; /* ヘッダーの高さを指定する */
background-color: #cee3e3; /* ヘッダーの背景色を指定する */
color: #ffffff; /* フォントの色を指定する */
font-size: 150%;
z-index: 100;
margin: 0 0 auto;
}

.HeaderTitle {
  padding: auto;
  margin: auto;
  font-size: 2em;
  vertical-align:  middle;
  text-align: center;;
  color: #ffffff;
}
.HeaderTitle:hover {
  font-size: 2.2em;
}

.MenuBackground{
  z-index: 110;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
/*ボタン*/
.HamburgerBtn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  left: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 150;
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
  padding: 1rem 1rem 0.5rem;
  border-bottom: solid;
}
.menu {
  background-color: rgba(197, 197, 197, 0.929);
  z-index: 130;
  padding: 2rem 1rem;
  position: fixed;
  width: 20rem;
  height: 80rem;
  top: 0;
  left: 0;
}
.menu a {
  display: block;
  color: rgb(55, 55, 55);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 0rem;
  width: 100%;
}
.menu ul{
  margin: 1rem;
  padding: 0;
}

</style>