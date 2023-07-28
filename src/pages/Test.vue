<div
hover:bg-green-900:40
transition-all
:class="[
  'list-item',
  playing && currentMusic.id === item.id ? 'on' : ''
]"
v-for="(item, idx) in playlist"
:key="item.id"
@dblclick="handlerItemClick(item, idx)"
>
<!-- 编号 -->
<span class="list-num">{{ idx + 1 }}</span>
<!-- 图片 -->
<div flex-row>
  <img
    rounded-2
    w12
    h12
    mr2
    :src="item.image"
    :alt="item.name"
  />
</div>
<!-- 歌曲名+标识 -->
<div
  flex-col
  items-start
  gap-1.5
  line-height-none
  min-w60
>
  <span font-bold>{{ item.name }}</span>
  <!-- <span text-1>{{ item.singer }}</span> -->
  <span
    rounded
    bg="#dec998"
    color="#050506"
    text-.1
    font-bold
    px1
    py.3
    >flac</span
  >
</div>
<!-- 歌手 -->
<span
  w50
  font-bold
  >{{ item.singer }}</span
>
<!-- 专辑 -->
<span
  w50
  font-bold
  >{{ item.album }}</span
>
<!-- 时长 -->
<span
  w20
  font-bold
>
  {{ item.duration || '--' }}
</span>
<div flex-row>
  <div
    class="hover"
    h7
    w7
    border="1.5px solid"
    border-gray-200:50
    bg-white:10
    rounded
    flex-row
    @click.stop="handlerItemClick(item, idx)"
  >
    <div
      v-if="playing && currentMusic.id === item.id"
      i-mdi-pause
      color="#5d72f6"
    />
    <div
      v-else
      i-mdi-play
      color="#5d72f6"
    />
  </div>
  <div
    ml-6
    class="hover"
    h7
    w7
    flex-row
    @click.stop="handlerDownLoadItem(item, idx)"
  >
    <div i-mdi-download />
  </div>
</div>
</div>