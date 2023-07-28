<script setup lang="ts">
import { nanoid } from 'nanoid'
const playlist = ref([
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image: 'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    duration: 250.653,
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
  },
])

const currentTime = ref('')

const picUrl = ref('')
const currentMusic = ref(playlist.value[0])

const lyricVisible = ref<boolean>(true)

function listScrollSelectItem(item: any, idx: any, $event: any) {
  console.log(item, idx, $event)
}

function format(text: any) {
  return text
}

function prev() {}
function play() {}
function next() {}
</script>

<template>
  <div class="music flex-col">
    <div class="music-content">
      <div class="music-left flex-col">
        <el-scrollbar height="100%">
          <!--正在播放-->
          <div class="playList">
            <!--歌曲列表-->
            <div class="music-list flex-col">
              <template v-if="playlist.length > 0">
                <div class="list-item list-header">
                  <span class="list-name">歌曲</span>
                  <span class="list-artist">歌手</span>
                  <span class="list-album">专辑</span>
                  <span class="list-time">时长</span>
                </div>
                <div class="list-content">
                  <!-- :class="{ on: playing && currentMusic.id === item.id }" -->
                  <div
                    v-for="(item, idx) in playlist"
                    :key="item.id"
                    class="list-item"
                    @dblclick="listScrollSelectItem(item, idx, $event)"
                  >
                    <span class="list-num">{{ idx + 1 }}</span>
                    <div class="list-name">
                      <span>{{ item.name }}</span>
                      <div class="list-menu">
                        <!-- <mm-icon
                          :type="getPlayIconType(item)"
                          :size="40"
                          class="hover"
                          @click.stop="listScrollSelectItem(item, idx)"
                        /> -->
                      </div>
                    </div>
                    <span class="list-artist">{{ item.singer }}</span>
                    <span class="list-time">
                      {{ item.duration ? format(item.duration % 3600) : '--' }}
                    </span>
                    <span class="list-album">{{ item.album }}</span>
                  </div>
                </div>
              </template>
              <mm-no-result v-else title="暂无歌曲哦，请联系管理员添加" />
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="music-right" :class="{ show: lyricVisible }">
        <!-- <lyric ref="lyric" :lyric="lyric" :nolyric="nolyric" :lyric-index="lyricIndex" /> -->
      </div>
    </div>

    <!--播放器-->
    <!-- :class="{ disable: !musicReady || !currentMusic.id }" -->
    <div class="music-bar">
      <div class="music-bar-btns">
        <mm-icon class="pointer" type="prev" :size="36" title="上一曲 Ctrl + Left" @click="prev" />
        <div class="control-play pointer" title="播放暂停 Ctrl + Space" @click="play">
          <!-- <mm-icon :type="playing ? 'pause' : 'play'" :size="24" /> -->
        </div>
        <mm-icon class="pointer" type="next" :size="36" title="下一曲 Ctrl + Right" @click="next" />
      </div>
      <div class="music-music">
        <div class="music-bar-info">
          <template v-if="currentMusic && currentMusic.id">
            {{ currentMusic.name }}
            <span>- {{ currentMusic.singer }}</span>
          </template>
          <template v-else>欢迎使用mmPlayer在线音乐播放器</template>
        </div>
        <div v-if="currentMusic.id" class="music-bar-time">
          {{ format(currentTime) }}/{{ format(currentMusic.duration % 3600) }}
        </div>
        <!-- <mm-progress
          class="music-progress"
          :percent="percentMusic"
          :percent-progress="currentProgress"
          @percentChange="progressMusic"
          @percentChangeEnd="progressMusicEnd"
        /> -->
      </div>

      <!-- 播放模式 -->
      <!-- <mm-icon
        class="icon-color pointer mode"
        :type="getModeIconType()"
        :title="getModeIconTitle()"
        :size="30"
        @click="modeChange"
      /> -->
      <!-- 音量控制 -->
      <div class="music-bar-volume" title="音量加减 [Ctrl + Up / Down]">
        <!-- <volume :volume="volume" @volumeChange="volumeChange" /> -->
      </div>
    </div>

    <!--遮罩-->
    <div class="mmPlayer-bg" :style="{ backgroundImage: picUrl }"></div>
    <div class="mmPlayer-mask"></div>
  </div>
</template>

<style lang="scss">
.router-view {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.music {
  padding: 75px 25px 25px 25px;
  width: 100%;
  max-width: 1750px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .music-content {
    display: flex;
    flex: 1;
    overflow: hidden;
    width: 100%;
    .music-left {
      flex: 1;
      width: 100%;
      overflow: hidden;
    }
    .music-right {
      position: relative;
      width: 310px;
      margin-left: 10px;
      .close-lyric {
        position: absolute;
        top: 0;
        z-index: 1;
        cursor: pointer;
      }
    }
  }

  /*底部mmPlayer-bar*/
  .music-bar {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    color: #fff;
    &.disable {
      pointer-events: none;
      opacity: 0.6;
    }
    .icon-color {
      color: #fff;
    }
    .music-bar-btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 180px;
      .control-play {
        @include flex-center(row);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.3);
      }
    }

    @include flex-center(row);
    .btn-prev {
      width: 19px;
      min-width: 19px;
      height: 20px;
      background-position: 0 -30px;
    }
    .btn-play {
      width: 21px;
      min-width: 21px;
      height: 29px;
      margin: 0 50px;
      background-position: 0 0;
      &.btn-play-pause {
        background-position: -30px 0;
      }
    }
    .btn-next {
      width: 19px;
      min-width: 19px;
      height: 20px;
      background-position: 0 -52px;
    }
    .music-music {
      position: relative;
      width: 100%;
      flex: 1;
      box-sizing: border-box;
      padding-left: 40px;
      font-size: $font_size_small;
      color: $text_color_active;
      .music-bar-info {
        height: 15px;
        padding-right: 80px;
        line-height: 15px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .music-bar-time {
        position: absolute;
        top: 0;
        right: 5px;
      }
    }
    .mode,
    .comment,
    .music-bar-volume {
      margin-left: 20px;
    }

    // 音量控制
    .volume-wrapper {
      margin-left: 20px;
      width: 150px;
    }
  }

  /*遮罩*/
  .mmPlayer-mask,
  .mmPlayer-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .mmPlayer-mask {
    z-index: -1;
    background-color: $mask_color;
  }

  .mmPlayer-bg {
    z-index: -2;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(12px);
    opacity: 0.7;
    transition: all 0.8s;
    transform: scale(1.1);
  }

  @media (min-width: 960px) {
    .close-lyric {
      display: none;
    }
  }

  //当屏幕小于960时
  @media (max-width: 960px) {
    .music-right {
      display: none;
      &.show {
        display: block;
        margin-left: 0;
        width: 100%;
      }
    }
  }
  //当屏幕小于768时
  @media (max-width: 768px) {
    padding: 75px 15px 5px 15px;

    .music-bar {
      padding-top: 10px;
      .music-bar-info span,
      .music-bar-volume .mmProgress {
        display: none;
      }
    }
  }
  //当屏幕小于520时
  @media (max-width: 520px) {
    .music-bar {
      position: relative;
      flex-direction: column;
      .music-bar-btns {
        width: 60%;
        margin-top: 10px;
        order: 2;
      }
      .music-music {
        padding-left: 0;
        order: 1;
      }
      .mode,
      .comment {
        position: absolute;
        bottom: 20px;
        margin: 0;
      }
      .mode {
        left: 5px;
      }
      .comment {
        right: 5px;
      }
      .music-bar-volume {
        display: none;
      }
    }
  }
}

// music-list
.music-list {
  height: 100%;
}

.list-header {
  border-bottom: 1px solid $list_head_line_color;
  color: $text_color_active;

  .list-name {
    padding-left: 40px;
    user-select: none;
  }
}

.list-content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.list-no {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: $text_color;
}

.list-item {
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid $list_item_line_color;
  line-height: 50px;
  overflow: hidden;

  &.list-item-no {
    justify-content: center;
    align-items: center;
  }

  &.on {
    color: #fff;

    .list-num {
      font-size: 0;
      background: url('~assets/img/wave.gif') no-repeat center center;
    }
  }

  &:hover {
    .list-name {
      padding-right: 80px;

      .list-menu {
        display: block;
      }
    }
  }

  &:not([class*='list-header']):hover {
    .list-name {
      padding-right: 80px;

      .list-menu {
        display: block;
      }
    }

    .list-time {
      font-size: 0;

      .list-menu-icon-del {
        display: block;
      }
    }
  }

  .list-num {
    display: block;
    width: 30px;
    margin-right: 10px;
    text-align: center;
  }

  .list-name {
    position: relative;
    flex: 1;
    box-sizing: border-box;

    & > span {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    small {
      margin-left: 5px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }

    /*hover菜单*/

    .list-menu {
      display: none;
      position: absolute;
      top: 50%;
      right: 10px;
      height: 40px;
      font-size: 0;
      transform: translateY(-50%);
    }
  }

  .list-artist,
  .list-album {
    display: block;
    width: 300px;
    @include no-wrap;
    @media (max-width: 1440px) {
      width: 200px;
    }
    @media (max-width: 1200px) {
      width: 150px;
    }
  }

  .list-time {
    display: block;
    width: 60px;
    position: relative;

    .list-menu-icon-del {
      display: none;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
}

.list-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  span {
    padding: 5px 20px;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: $text_color_active;
    }
  }
}

@media (max-width: 960px) {
  .list-item .list-name {
    padding-right: 70px;
  }
}

@media (max-width: 768px) {
  .list-item {
    .list-name .list-menu {
      display: block;
    }

    .list-artist,
    .list-album {
      width: 20%;
    }
  }
}

@media (max-width: 640px) {
  .list-item {
    .list-artist {
      width: 80px;
    }

    .list-album,
    .list-time {
      display: none;
    }
  }
}

.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
