<template>
  <div class="index">
    <div class="video-box">
      <video ref="video" class="video" loop autoplay muted>
        <source :src="VideoMp4" type="video/mp4">
      </video>
    </div>
    <div class="body">
      <Start />
      <Menu />
    </div>
  </div>
</template>

<script>
import VideoMp4 from '@/assets/standby.mp4'
import Start from './start.vue'
import Menu from './menu.vue'
export default {
  components: {
    Start,
    Menu
  },
  data() {
    return {
      VideoMp4
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  position: relative;
  height: 100%;

  .video-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .video {
      width: 100%;
      height: 100%;
    }
  }

  .body {
    position: relative;
    height: 100%;
    z-index: 9;
  }
}
</style>