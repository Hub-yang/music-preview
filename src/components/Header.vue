<script setup lang="ts"></script>

<template>
  <!--头部-->
  <header class="mm-header">
    <h1 class="header">
      <a href="https://github.com/Mochenghualei" target="_blank"> Vue3 在线音乐播放器 </a>
    </h1>
  </header>
</template>

<style lang="scss" scoped>
.mm-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: $header_bg_color;
  @media (max-width: 768px) {
    background: $header_bg_color;
  }
  .header {
    @include flex-center(row);
    line-height: 60px;
    color: $text_color_active;
    font-size: $font_size_large;
    @media (max-width: 768px) {
      padding-left: 15px;
      justify-content: flex-start;
    }
    @media (max-width: 414px) {
      font-size: $font_size_medium;
    }
  }
}
</style>
