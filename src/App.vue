<script setup lang="ts">
// Element Plus 设置中文
import { usePlayerStore } from './store/player'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const playStore = usePlayerStore()
const locale = zhCn

const Player = ref()
onMounted(() => {
  // 初始化radio
  nextTick(() => {
    playStore.Player = Player.value
  })
})
</script>

<template>
  <el-config-provider :locale="locale">
    <div
      id="app"
      relative
      wscreen
      hscreen
      color-gray-300:50
      text-3.5
      bg="#18181d"
    >
      <Header />
      <router-view></router-view>
      <!--播放器-->
      <audio
        ref="Player"
        fixed
      />
    </div>
  </el-config-provider>
</template>
