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
