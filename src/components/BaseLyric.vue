<script lang="ts">
export default {
  name: 'BaseLyric'
}
</script>
<script setup lang="ts">
interface Props {
  lyric: baseObj[]
  lyricIndex: number
  currentMusic: baseObj
}

const props = withDefaults(defineProps<Props>(), {
  lyric: () => [],
  lyricIndex: 0,
  currentMusic: () => ({})
})

const top = ref(0)
const musicLyric = ref()
const musicPicUrl = computed(() =>
  props.currentMusic.id
    ? props.currentMusic.image
    : new URL('../assets/img/player_cover.png', import.meta.url).href
)

const lyricTop = computed(() => {
  return `transform :translate3d(0, ${
    -34 * (props.lyricIndex - top.value)
  }px, 0)`
})

let resizeTimer
onMounted(() => {
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => clacTop(), 60)
  })
  nextTick(() => clacTop())
})

// 计算歌词居中的 top值
function clacTop() {
  const dom = musicLyric.value
  const { display = '' } = window.getComputedStyle(dom)
  if (display === 'none') {
    return
  }
  const height = dom.offsetHeight
  top.value = Math.floor(height / 34 / 2)
}
</script>
<template>
  <div
    hfull
    wfull
    relative
    flex="~"
    flex-col
    items-center
    justify-between
  >
    <!--封面-->
    <dl
      text-center
      flex-col-center
    >
      <dt
        relative
        w60
        h40
        my-3
        rounded-2
        overflow-hidden
      >
        <img
          wfull
          hfull
          object-center-center
          object-cover
          :src="musicPicUrl"
        />
      </dt>
      <div
        v-if="currentMusic.id"
        wfull
        flex="~"
        flex-col
        items-start
      >
        <dd
          text-5
          font-bold
          color-white:90
          mb2
        >
          " {{ currentMusic.name }} "
        </dd>
        <dd
          text-3.5
          color-white:90
          mb1
        >
          {{ currentMusic.singer }}
        </dd>
        <dd
          text-3.5
          color-gray
        >
          {{ currentMusic.album }}
        </dd>
      </div>
    </dl>
    <!--歌词-->
    <div
      ref="musicLyric"
      class="music-lyric"
      mb3
    >
      <div
        :style="lyricTop"
        class="music-lyric-items"
      >
        <p v-if="!currentMusic.id">还没有播放音乐哦！</p>
        <template v-else-if="lyric.length > 0">
          <p
            v-for="(item, index) in lyric"
            :key="index"
            :class="{ on: lyricIndex === index }"
          >
            {{ item.text }}
          </p>
        </template>
        <p v-else>歌词加载失败！</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*歌词部分*/
.music-lyric {
  position: absolute;
  top: 315px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  text-align: center;
  mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 0) 0,
    rgba(255, 255, 0.6) 15%,
    rgba(255, 255, 1) 25%,
    rgba(255, 255, 1) 75%,
    rgba(255, 255, 0.6) 85%,
    rgba(255, 255, 0) 100%
  );
  .music-lyric-items {
    text-align: center;
    line-height: 34px;
    font-size: 12px;
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s ease-out;
    user-select: none;
    @include no-wrap;
    .on {
      transition: all 0.6s ease;
      // color: #40ce8f;
      color: #5d72f6;
      font-size: 16px;
    }
  }
}
</style>
