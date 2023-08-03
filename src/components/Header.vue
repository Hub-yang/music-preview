<script setup lang="ts">
const playerStore = usePlayerStore()
const btnList = ref([
  {
    name: '我喜欢',
    active: false
  },
  {
    name: '全部',
    active: false
  }
])

function handlerBtnClick(idx: number, item: string) {
  playerStore.disabled = false

  btnList.value.forEach((item) => (item.active = false))
  btnList.value[idx].active = true
  setTimeout(() => {
    playerStore.disabled = true
    if (item === '我喜欢') {
      playerStore.playlist = playerStore.lovedList
      playerStore.curListMode = 'loved'
    }

    if (item === '全部') {
      playerStore.playlist = playerStore.allPlayList
      playerStore.curListMode = 'random'
    }
  }, 0)
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
    <div
      ml10
      hfull
      flex="~"
      items-center
      gap-3
    >
      <div
        :class="[btn.active ? 'active' : '']"
        v-for="(btn, idx) in btnList"
        :key="idx"
        @click="handlerBtnClick(idx, btn.name)"
        hover:color="#6477f4"
        hover:transition
        color-white:90
        flex="~"
        items-center
        gap1
      >
        <span
          text-3
          inline-block
          i-mdi-playlist-music
        ></span>
        <span text-3.5>
          {{ btn.name }}
        </span>
      </div>
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
