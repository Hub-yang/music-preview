<script setup lang="ts">
// Element Plus 设置中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn
</script>

<template>
  <el-config-provider :locale="locale">
    <div id="app">
      <Header />
      <router-view></router-view>
      <!--播放器-->
      <audio ref="Player" />
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  color: $text_color;
  font-size: $font_size_medium;

  audio {
    position: fixed;
  }
}
</style>
