<script setup lang="ts">
const btnList = ref([
  {
    name: '我喜欢',
    active: false
  },
  {
    name: '随机列表',
    active: false
  }
])

function handlerBtnClick(idx: number) {
  btnList.value.forEach((item) => (item.active = false))
  btnList.value[idx].active = true
}
</script>

<template>
  <!--头部-->
  <header
    wfull
    h13
    flex="~"
    items-center
  >
    <!-- logo -->
    <div
      ml-10
      color-white
      font-1000
      text-4
      class="cusfont"
      flex="~"
      items-center
    >
      <span
        inline-block
        i-ph-waveform-bold
        mr2
      />
      <span>Oh My Music !</span>
    </div>
    <!-- 按钮 -->
    <div>
      <span
        :class="[btn.active ? 'active' : '']"
        v-for="(btn, idx) in btnList"
        :key="idx"
        @click="handlerBtnClick(idx)"
        hover:color="#6477f4"
        hover:transition
        color-white:90
        >{{ btn.name }}</span
      >
    </div>
  </header>
</template>

<style scoped lang="scss">
.cusfont {
  font-family: 'Quicksand', sans-serif;
}

.active {
  transition: all ease 0.5s;
  color: #6477f4;
  font-weight: bold;
}
</style>
