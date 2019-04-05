<template>
  <div>
    <div>
      <video ref="video" id="video" width="640" height="480" autoplay></video>
    </div>
    <div>
      <button id="snap" v-on:click="capture()">スクショ</button>
    </div>
    <div>
      <button id="snap" v-on:click="stopCamera()">停止する</button>
    </div>
    <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
    <ul>
      <li v-for="c in captures" :key="c.id">
          <img v-bind:src="c" height="50" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: {},
      canvas: {},
      captures: []
    };
  },
  mounted() {
    this.video = this.$refs.video;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = {
        video: true,
        audio: false
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.video.srcObject = stream;
          this.video.play();
        })
        .catch(err => {
          console.log("err:", err);
        });
    }
  },
  methods: {
    capture() {
      this.canvas = this.$refs.canvas;
      const context = this.canvas
        .getContext("2d")
        .drawImage(this.video, 0, 0, 640, 480);
      this.captures.push(canvas.toDataURL("image/png"));
    },
    stopCamera() {
      this.video = this.$refs.video;
      const constraints = {
        video: true
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.video.srcObject = stream;
          stream.getVideoTracks()[0].stop();
          this.video.srcObject = null;
        })
        .catch(err => {
          console.log("err:", err);
        });
    }
  }
};
</script>

<style>
body: {
  background-color: #f0f0f0;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#video {
  background-color: #000000;
}
#canvas {
  display: none;
}
li {
  display: inline;
  padding: 5px;
}
</style>
