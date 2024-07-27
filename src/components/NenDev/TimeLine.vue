<template>
  <div class="timeline-container" ref="container">
    <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
      <div class="circle" :style="{ backgroundColor: item.color }"></div>
      <div v-if="index < timelineItems.length - 1" class="line">
        <div class="line-fill" :style="{ height: item.lineProgress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const container = ref(null);
const timelineItems = ref([
  { color: '#ffffff', lineProgress: 0 },
  { color: '#ffffff', lineProgress: 0 },
  { color: '#ffffff', lineProgress: 0 },
  { color: '#ffffff', lineProgress: 0 },
  { color: '#ffffff', lineProgress: 0 }
]);

const updateTimeline = () => {
  if (!container.value) return;

  const containerRect = container.value.getBoundingClientRect();
  const containerHeight = containerRect.height;
  const scrollPosition = window.scrollY - containerRect.top + window.innerHeight / 2;

  timelineItems.value.forEach((item, index) => {
    const itemPosition = (index / (timelineItems.value.length - 1)) * containerHeight;
    const progress = (scrollPosition - itemPosition) / (containerHeight / (timelineItems.value.length - 1));
    
    // Update circle color
    if (progress >= 1) {
      item.color = '#4a0e4e'; // Completed
    } else if (progress > 0) {
      const r = Math.round(255 - progress * (255 - 74));
      const g = Math.round(255 - progress * (255 - 14));
      const b = Math.round(255 - progress * (255 - 78));
      item.color = `rgb(${r}, ${g}, ${b})`;
    } else {
      item.color = '#ffffff'; // Inactive
    }

    // Update line progress
    if (index < timelineItems.value.length - 1) {
      item.lineProgress = Math.max(0, Math.min(100, progress * 100));
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', updateTimeline);
  updateTimeline();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateTimeline);
});
</script>

<style scoped>
.timeline-container {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.timeline-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #4a0e4e;
  transition: background-color 0.3s ease;
}

.line {
  width: 2px;
  height: calc(25vh - 30px);
  background-color: transparent;
  margin: 5px 0;
  position: relative;
  overflow: hidden;
}

.line-fill {
  width: 100%;
  background-color: #4a0e4e;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 0.3s ease;
}
</style>