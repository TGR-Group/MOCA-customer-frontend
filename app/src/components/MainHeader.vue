<script setup>
    import { ref } from 'vue';
    const HamburgerIsActive = ref(false);
</script>

<template>
    <div class="Header">
      <router-link to="/" class="HeaderTitle"><span style="font-size: 0.5em;">MOCA for</span>染谷祭</router-link>
      <div class="HamburgerBtn" @click='HamburgerIsActive=!HamburgerIsActive'>
          <span class="line line_01" v-bind:class="{'BtnLine01':HamburgerIsActive}"></span>
          <span class="line line_02" v-bind:class="{'BtnLine02':HamburgerIsActive}"></span>
          <span class="line line_03" v-bind:class="{'BtnLine03':HamburgerIsActive}"></span>
      </div>

      <transition name="menu">
          <div class="MenuBackground" v-show="HamburgerIsActive" @click='HamburgerIsActive=!HamburgerIsActive'>
              <div class="menu">
                  <ul>
                      <li><router-link to="/#HOME" @click.stop='HamburgerIsActive=!HamburgerIsActive'>ホーム</router-link></li>
                      <li><router-link to="/introduction" @click.stop='HamburgerIsActive=!HamburgerIsActive'>出し物紹介</router-link></li>
                      <li><router-link to="/SchoolMap" @click.stop='HamburgerIsActive=!HamburgerIsActive'>校内マップ</router-link></li>
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
display: flex;
justify-content: center;
align-items: center;
position: fixed; /* ヘッダーを固定する */
top: 0; /* 上部から配置の基準位置を決める */
left: 0; /* 左から配置の基準位置を決める */
width: 100%; /* ヘッダーの横幅を指定する */
height: 5.0rem; /* ヘッダーの高さを指定する */
background-color: #3c1a09; /* ヘッダーの背景色を指定する */
color: #ffffff; /* フォントの色を指定する */
font-size: 150%;
z-index: 100;
margin: 0 0 auto;
}

.HeaderTitle {
  font-family: "Noto Serif CJK JP";
  font-weight:900;
  margin: auto;
  height: fit-content;
  font-size: 1.5em;
  vertical-align:  middle;
  text-align: center;;
  color: #ffffff;
}

.MenuBackground{
  z-index: 110;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.395);
  position: fixed;
  top: 0;
  left: 0;
}
/*ボタン*/
.HamburgerBtn {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap:0.7rem;
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  z-index: 150;
}

.HamburgerBtn .line {
  width: 55%;
  height: 2px;
  background: #cdcdcd;
  text-align: center;
}

.HamburgerBtn .line_01 {
  transition: 0.4s ease;
}
.HamburgerBtn .line_02 {
  transition: 0.4s ease;
}
.HamburgerBtn .line_03 {
  transition: 0.4s ease;
}


.BtnLine01 {
  transform: translateY(0.8rem) rotate(-45deg);
  transition: 0.4s ease;
}
.BtnLine02 {
  transition: 0.4s ease;
  opacity: 0;
}
.BtnLine03 {
  transform: translateY(-0.8rem) rotate(45deg);
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
  border-bottom: solid #c0c0c0;
}
.menu {
  background-color: #3c1a09f3;
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
  color: rgb(255, 255, 255);
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