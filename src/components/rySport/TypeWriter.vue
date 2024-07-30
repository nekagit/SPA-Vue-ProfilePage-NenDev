<template>
  <div class="typewriter-container">
    <h3 class="typewriter-text">{{ displayText }}<span class="cursor">|</span></h3>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  texts: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenTexts?: number;
}

const props = withDefaults(defineProps<Props>(), {
  typingSpeed: 100,
  erasingSpeed: 50,
  delayBetweenTexts: 2000
})

const displayText = ref('')
let currentIndex = 0
let isTyping = true
let timeoutId: number | undefined = undefined

const typeText = () => {
  const currentText = props.texts[currentIndex]
  if (currentText === undefined) return

  if (isTyping && displayText.value.length < currentText.length) {
    displayText.value += currentText[displayText.value.length]
    timeoutId = window.setTimeout(typeText, props.typingSpeed)
  } else if (isTyping && displayText.value.length === currentText.length) {
    isTyping = false
    timeoutId = window.setTimeout(eraseText, props.delayBetweenTexts)
  } else if (!isTyping && displayText.value.length > 0) {
    displayText.value = displayText.value.slice(0, -1)
    timeoutId = window.setTimeout(eraseText, props.erasingSpeed)
  } else {
    isTyping = true
    currentIndex = (currentIndex + 1) % props.texts.length
    timeoutId = window.setTimeout(typeText, props.typingSpeed)
  }
}

const eraseText = () => {
  if (displayText.value.length > 0) {
    displayText.value = displayText.value.slice(0, -1)
    timeoutId = window.setTimeout(eraseText, props.erasingSpeed)
  } else {
    isTyping = true
    currentIndex = (currentIndex + 1) % props.texts.length
    timeoutId = window.setTimeout(typeText, props.typingSpeed)
  }
}

onMounted(() => {
  typeText()
})

onUnmounted(() => {
  if (timeoutId !== undefined) window.clearTimeout(timeoutId)
})
</script>

<style scoped>
.typewriter-container {
  width: 100%; /* Adjust as needed */
  height: auto; /* Adjust based on your needs */
  overflow: hidden;
}

.typewriter-text {
  display: inline-block;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 100%;
  line-height: 1.5em;
  min-height: 3em; /* Match the container height */
}

.cursor {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>