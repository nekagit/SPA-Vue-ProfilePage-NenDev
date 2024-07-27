<template>
  <div class="timeline-container " ref="container">
    <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
      <div class="date">{{ item.date }}</div>
      <div class="timeline-content">
        <div class="circle" :style="{ backgroundColor: item.color }"></div>
        <div class="card">
          <h3 class="card-title">{{ item.title }}</h3>
          <h4 class="card-subtitle">{{ item.subtitle }}</h4>
          <p class="card-description">{{ item.description }}</p>
        </div>
      </div>
      <div v-if="index < timelineItems.length - 1" class="line">
        <div class="line-fill" :style="{ height: item.lineProgress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const container = ref(null);
const cards = ref([]);
const timelineItems = ref([
  {
    color: '#ffffff',
    lineProgress: 0,
    date: 'June 2024 - Present',
    title: 'bytes Coding GmbH',
    subtitle: 'Software Developer (Freelancer)',
    description: 'Working on various software development projects, utilizing skills in full-stack web development, React, TypeScript, and more.'
  },
  {
    color: '#ffffff',
    lineProgress: 0,
    date: 'Jan 2023 - May 2024',
    title: 'Another Company',
    subtitle: 'Frontend Developer',
    description: 'Developed responsive web applications using modern JavaScript frameworks.'
  },
  {
    color: '#ffffff',
    lineProgress: 0,
    date: 'Jan 2023 - May 2024',
    title: 'Another Company',
    subtitle: 'Frontend Developer',
    description: 'Developed responsive web applications using modern JavaScript frameworks.'
  },
  {
    color: '#ffffff',
    lineProgress: 0,
    date: 'Jan 2023 - May 2024',
    title: 'Another Company',
    subtitle: 'Frontend Developer',
    description: 'Developed responsive web applications using modern JavaScript frameworks.'
  },
  // Add more items as needed
]);

const updateTimeline = () => {
  if (!container.value) return;

  const containerRect = container.value.getBoundingClientRect();
  const containerHeight = containerRect.height;
  const scrollPosition = window.scrollY - containerRect.top + window.innerHeight / 2;

  timelineItems.value.forEach((item, index) => {
    const itemPosition = (index / (timelineItems.value.length - 1)) * containerHeight;
    const progress = (scrollPosition - itemPosition) / (containerHeight / (timelineItems.value.length - 1));
    
    if (progress >= 1) {
      item.color = '#4a0e4e';
    } else if (progress > 0) {
      const r = Math.round(255 - progress * (255 - 74));
      const g = Math.round(255 - progress * (255 - 14));
      const b = Math.round(255 - progress * (255 - 78));
      item.color = `rgb(${r}, ${g}, ${b})`;
    } else {
      item.color = '#ffffff';
    }

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
  min-height: 100vh;
  padding: 20px 20px;
  max-width: 1000px;
  margin: 0 auto;

}

.timeline-item {
  height: 300px;
  position: relative;
  display: flex;
  margin-bottom: 50px;
}

.date {
  width: 150px;
  text-align: right;
  padding-right: 30px;
  font-size: 14px;
  color: #666;
  flex-shrink: 0;
  padding-top: 3px;
}

.timeline-content {
  display: flex;
  flex-grow: 1;
  height: min-content;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #4a0e4e;
  background-color: #fff;
  transition: background-color 0.3s ease;
  margin-right: 20px;
  flex-shrink: 0;
  z-index: 2;
}

.card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  flex-grow: 1;
}

.card-title {
  margin: 0;
  font-size: 18px;
  color: #4a0e4e;
}

.card-subtitle {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
  font-weight: normal;
}

.card-description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #333;
}

.line {
  width: 2px;
  background-color: #e0e0e0;
  position: absolute;
  left: 159px;
  top: 20px;
  bottom: -30px;
  z-index: 1;
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