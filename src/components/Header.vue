<script setup lang="ts">
import _ from 'lodash'
import { useAnimate } from '@/utils'
const playerStore = usePlayerStore()
const btnList = ref([
  {
    name: '我喜欢',
    active: false
  },
  {
    name: '全部',
    active: true
  }
])

function handlerBtnClick(idx: number, item: string) {
  const beforeCall = () => {
    btnList.value.forEach((item) => (item.active = false))
    btnList.value[idx].active = true
  }

  const afterCall = () => {
    if (item === '我喜欢') {
      playerStore.playlist = playerStore.lovedList
      playerStore.curListMode = 'loved'
    }

    if (item === '全部') {
      playerStore.playlist = playerStore.allPlayList
      playerStore.curListMode = 'random'
    }
  }

  useAnimate(beforeCall, afterCall)
}

const handlerBtnClickDebounce = _.debounce(handlerBtnClick, 500, {
  leading: true,
  trailing: false
})
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
        @click="handlerBtnClickDebounce(idx, btn.name)"
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

    <!-- 搜索 -->
    <!-- <div
      ml10
      h="55%"
      relative
      text-4.5
    >
      <input
        placeholder="Type here to search"
        pl8
        hfull
        type="text"
        outline-none
        bg="#1d1d1d"
        rounded
        border-2
        border-white
        border="#b6b9bc"
        @input="handlerInput"
      />
      <span
        color-gray
        i-material-symbols:manage-search-rounded
        absolute
        top-1.2
        left-1.5
        z-1
      />
    </div> -->
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
