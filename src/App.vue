<script setup lang="ts">
import { usePlayerStore } from './store/player'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const playStore = usePlayerStore()
const locale = zhCn

const Player = ref()
nextTick(() => {
  playStore.Player = playStore.Player || Player.value
})

// 监听标签页激活事件，刷新页面
document.addEventListener('visibilitychange', function () {
  if (!document.hidden) {
    // window.location.reload()
  }
})
</script>

<template>
  <el-config-provider :locale="locale">
    <div
      bg="#18181d"
      id="app"
      max-wscreen
      max-hscreen
      overflow-hidden
      color-gray-300:50
      text-3.5
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
