<template>
  <div>
    <NavBar v-if="!isLoading" />
    <AInternetLoadingScreen class="loading" v-if="isLoading" />
    <router-view v-if="!isLoading" class="router h-screen" />
    <NenFooter v-if="!isLoading" />
    <SpinningButton />
  </div>
</template>

<script setup lang="ts">
import SpinningButton from "@/components/NenDev/SpinningButton.vue"
import AInternetLoadingScreen from '@/components/atoms/sections/internet/AInternetLoadingScreen.vue'
import router from '@/router/index'
import { ref } from 'vue'
import NavBar from './components/NenDev/NavBar.vue'
import NenFooter from './components/NenDev/NenFooter.vue'

const isLoading = ref(false)

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

