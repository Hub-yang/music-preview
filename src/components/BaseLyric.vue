<script lang="ts">
export default {
  name: 'BaseLyric'
}
</script>
<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js'
const playerStore = usePlayerStore()

watch(
  () => playerStore.playing,
  (val) => {
    if (val) {
      anime({
        targets: '.cover-anime',
        width: '15rem',
        right: '0',
        scale: 1,
        easing: 'spring(1, 80, 10, 0)'
      })
      anime({
        targets: '.musicInfo-anime',
        easing: 'easeInOutSine',
        translateX: '1rem',
        duration: 500
      })
    } else {
      anime({
        targets: '.cover-anime',
        width: '10rem',
        right: '4rem',
        scale: 0.95,
        easing: 'easeInOutSine',
        duration: 500
      })
      anime({
        targets: '.musicInfo-anime',
        easing: 'easeInOutSine',
        translateX: 0,
        duration: 500
      })
    }
  }
)
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

// 监听动态添加动画
const addAnimation1 = ref(false)
const addAnimation2 = ref(false)
watch(
  () => props.currentMusic.name,
  () => {
    addAnimation1.value = true
    setTimeout(() => {
      addAnimation1.value = false
    }, 1000)
  }
)

watch(musicPicUrl, () => {
  addAnimation2.value = true
  setTimeout(() => {
    addAnimation2.value = false
  }, 1000)
})
</script>
<template>
  <div
    hfull
    wfull
    relative
    flex="~"
    flex-col
    items-center
    gap-5
    box-border
  >
    <!-- 顶部 -->
    <dl
      wfull
      px-6
      box-border
      text-center
      flex-col-center
    >
      <!--封面-->
      <dt
        class="cover-anime"
        relative
        w60
        h40
        my-3
        rounded-2
        overflow-hidden
      >
        <img
          :class="[addAnimation2 ? 'tilt-in-fwd-tr' : '']"
          wfull
          hfull
          object-center-center
          object-cover
          :src="musicPicUrl"
        />
      </dt>
      <!-- 信息 -->
      <div
        v-if="currentMusic.id"
        class="musicInfo-anime"
        :class="[addAnimation1 ? 'puff-in-center ' : '']"
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
      flex-1
      overflow-hidden
      text-center
      wfull
    >
      <div
        class="music-lyric-items"
        :style="lyricTop"
        text-center
        select-none
        box-border
        transition
      >
        <template v-if="lyric.length > 0">
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
    line-height: 34px;
    font-size: 12px;
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s ease-out;
    .on {
      white-space: normal;
      word-wrap: break-word;
      line-height: 44px;
      transition: all 0.6s ease;
      color: #5d72f6;
      font-size: 16px;
    }
  }
}

.puff-in-center {
  -webkit-animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

.tilt-in-fwd-tr {
  -webkit-animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2023-8-20 16:2:30
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tilt-in-fwd-tr
 * ----------------------------------------
 */
@-webkit-keyframes tilt-in-fwd-tr {
  0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-fwd-tr {
  0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
</style>
