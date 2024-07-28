<template>
<div class="typewriter-container">
    <h3 class="typewriter-text">{{ displayText }}<span class="cursor">|</span></h3>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  texts: {
    type: Array,
    required: true
  },
  typingSpeed: {
    type: Number,
    default: 100
  },
  erasingSpeed: {
    type: Number,
    default: 50
  },
  delayBetweenTexts: {
    type: Number,
    default: 2000
  }
})
const displayText = ref('')
let currentIndex = 0
let isTyping = true
let timeoutId = null

const typeText = () => {
  const currentText = props.texts[currentIndex]
  if (isTyping && displayText.value.length < currentText.length) {
    displayText.value += currentText[displayText.value.length]
    timeoutId = setTimeout(typeText, props.typingSpeed)
  } else if (isTyping && displayText.value.length === currentText.length) {
    isTyping = false
    timeoutId = setTimeout(eraseText, props.delayBetweenTexts)
  } else if (!isTyping && displayText.value.length > 0) {
    displayText.value = displayText.value.slice(0, -1)
    timeoutId = setTimeout(eraseText, props.erasingSpeed)
  } else {
    isTyping = true
    currentIndex = (currentIndex + 1) % props.texts.length
    timeoutId = setTimeout(typeText, props.typingSpeed)
  }
}

const eraseText = () => {
  if (displayText.value.length > 0) {
    displayText.value = displayText.value.slice(0, -1)
    timeoutId = setTimeout(eraseText, props.erasingSpeed)
  } else {
    isTyping = true
    currentIndex = (currentIndex + 1) % props.texts.length
    timeoutId = setTimeout(typeText, props.typingSpeed)
  }
}

onMounted(() => {
  typeText()
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>
<style scoped>
.typewriter-container {
  width: 100%; /* Adjust as needed */
  height: 2.8em; /* Adjust based on your needs */
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