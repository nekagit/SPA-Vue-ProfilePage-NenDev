<template>
  <div v-if="showOverlay" class="video-overlay">
    <video
      ref="videoRef"
      :src="videoSrc"
      autoplay
      muted
      @ended="onVideoEnded"
      @canplay="onCanPlay"
      class="fullscreen-video"
    ></video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  videoSrc: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['video-ended']);

const showOverlay = ref(true);
const videoRef = ref<HTMLVideoElement | null>(null);
let playPromise: Promise<void> | null = null;

const onVideoEnded = () => {
  console.log("Video ended");
  showOverlay.value = false;
  emit('video-ended');
};

const onCanPlay = () => {
  console.log("Video can play");
  if (videoRef.value) {
    playPromise = videoRef.value.play();
  }
};

onMounted(() => {
  console.log("VideoOverlay mounted");
  if (videoRef.value) {
    videoRef.value.load();
  }
});

onUnmounted(() => {
  if (playPromise) {
    playPromise.then(() => {
      if (videoRef.value) {
        videoRef.value.pause();
      }
    }).catch(() => {
      // Ignore any play() errors
    });
  }
});
</script>

<style scoped>
.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.fullscreen-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>