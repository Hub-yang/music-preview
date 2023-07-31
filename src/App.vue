<script setup lang="ts">
// Element Plus 设置中文
import { usePlayerStore } from './store/player'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const playStore = usePlayerStore()
const locale = zhCn

const Player = ref()
nextTick(() => {
  playStore.Player = Player.value
})

onMounted(() => {
  setTimeout(() => {
    // 移除加载动画
    let loadDOM = document.querySelector('#appLoading')
    if (loadDOM) {
      const animationendFunc = function () {
        loadDOM!.removeEventListener('animationend', animationendFunc)
        loadDOM!.removeEventListener('webkitAnimationEnd', animationendFunc)
        document.body.removeChild(loadDOM!)
        loadDOM = null
      }.bind(this)
      loadDOM.addEventListener('animationend', animationendFunc)
      loadDOM.addEventListener('webkitAnimationEnd', animationendFunc)
      loadDOM.classList.add('removeAnimate')
    }
  }, 1000)
})
</script>

<template>
  <el-config-provider :locale="locale">
    <div
      id="app"
      max-wscreen
      max-hscreen
      overflow-hidden
      color-gray-300:50
      text-3.5
      bg="#18181d"
      flex="~"
      flex-col
      pb3
      box-border
    >
      <Header />
      <router-view />
      <BasePlayBar mx10 />
      <audio ref="Player" />
    </div>
  </el-config-provider>
</template>
