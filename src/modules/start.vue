<template>
  <div class="start">
    <!-- <div class="video-box">
      <video ref="video" class="video" loop autoplay muted>
        <source :src="VideoMp4" type="video/mp4">
      </video>
    </div> -->
    <div class="btn1 button"></div>
  </div>
</template>

<script>
// import VideoMp4 from '@/assets/standby.mp4'
export default {
  data() {
    return {
      // VideoMp4
    }
  }
}
</script>

<style lang="scss" scoped>
.start {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // .video-box {
  //   height: 100%;
  //   overflow: hidden;

  //   .video {
  //     height: 100%;
  //   }
  // }

  // @import "https://rsms.me/inter/inter.css";
  .button {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 60px;
    position: relative;
    border-radius: 30px;
    transform: translate(-50%, -50%);

    color: #fff;
    cursor: pointer;

    &::after {
      content: "查询";
      display: block;
      position: absolute;
      background: #111;
      text-align: center;
      line-height: 52px;
      inset: 4px;
      font-size: 18px;
      border-radius: 26px;
      z-index: 1;
      transition: opacity .3s ease;
    }
  }


}
</style>