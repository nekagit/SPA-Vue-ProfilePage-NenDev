<template>
  <div>
    <NavBar />
    <router-view class="router bg-white dark:bg-gray-900 text-black dark:text-white" />
    <NenFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import NavBar from './components/NenDev/NavBar.vue';
import NenFooter from './components/NenDev/NenFooter.vue';

// const isLoading = ref(false);
// const showVideo = ref(false);

// const onVideoEnded = () => {
//   showVideo.value = false;
// };

// router.beforeEach((to, from, next) => {
//   isLoading.value = true;
//   next();
// });

// router.afterEach(() => {
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 3000);
// });

onMounted(() => {
  // console.log("Video source:", video);localStorage.removeItem('videoPlayed');
  // // Check if the video has been played before
  // if (!localStorage.getItem('videoPlayed')) {
  //   console.log("Video should play");
  //   showVideo.value = true;
  //   localStorage.setItem('videoPlayed', 'true');
  // } else {
  //   console.log("Video has been played before");
  // }
});
</script>