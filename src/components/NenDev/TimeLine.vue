<template>
  <div class="timeline-container" ref="container">
    <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
      <div class="date">{{ item.date }}</div>
      <div class="timeline-content" :class="{ 'fade-in': item.visible }">
        <div class="circle" :style="{ backgroundColor: item.color }"></div>
        <div class="card xl:max-w-[75%] mx-auto">
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
import { onMounted, onUnmounted, ref } from 'vue';

const container = ref(null);
const timelineItems = ref([
  {
    color: '#ffffff',
    lineProgress: 0,
    visible: false,
    date: 'June 2024 - Present',
    title: 'bytes Coding GmbH',
    subtitle: 'Software Developer (Freelancer)',
    description: 'Working on various software development projects, utilizing skills in full-stack web development, React, TypeScript, and more.'
  },
  {
    color: '#ffffff',
    lineProgress: 0,
    visible: false,
    date: 'January 2023 – March 2024',
    title: 'qmBase-Dortmund',
    subtitle: 'Software Developer',
    description: 'Developed full-stack web applications using React, TypeScript, ASP.Net, and Azure DevOps. Contributed to the development and maintenance of complex web solutions.'
  },
  {
    color: '#ffffff',
    lineProgress: 0,
    visible: false,
    date: 'January 2021 – December 2022',
    title: 'OrgaTech Solution Engineering Consulting GmbH-Lünen',
    subtitle: 'Software Developer',
    description: 'Worked on Java backend development integrated with HTML, CSS, and JavaScript for frontend solutions. Also involved in Flutter mobile development.'
  },
  {
    color: '#ffffff',
    lineProgress: 0,
    visible: false,
    date: '2020 – 2021',
    title: 'Decathlon-Dortmund',
    subtitle: 'Order Picker',
    description: 'Responsible for efficiently picking and packing orders, ensuring timely and accurate delivery of products.'
  },
  {
    color: '#ffffff',
    lineProgress: 0,
    visible: false,
    date: '2017 – 2020',
    title: 'Service am Gast GmbH-Dortmund',
    subtitle: 'Waiter/Bartender',
    description: 'Provided excellent customer service in a fast-paced environment, managing orders and ensuring a high-quality dining experience.'
  },
  {
    color: '#ffffff',
    lineProgress: 0,
    visible: false,
    date: '2015 – 2017',
    title: 'Kaufland-Dortmund',
    subtitle: 'Newspaper Delivery',
    description: 'Delivered newspapers to customers on time, maintaining a reliable and efficient delivery route.'
  },
]);

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = parseInt(entry.target.dataset.index);
      timelineItems.value[index].visible = true;
      observer.unobserve(entry.target);
    }
  });
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, observerOptions);
  
  const timelineElements = container.value.querySelectorAll('.timeline-item');
  timelineElements.forEach((el, index) => {
    el.dataset.index = index;
    observer.observe(el);
  });

  const updateColors = () => {
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

  window.addEventListener('scroll', updateColors);
  updateColors();
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.timeline-container {
  display: grid;
  place-content: center;
  min-height: 100vh;
  padding: 20px 20px;
  max-width: 1000px;
  width: 90%;
  margin: 2rem auto;
}

.timeline-item {
  height: 250px;
  position: relative;
  display: flex;
  margin-bottom: 50px;
}
.timeline-item:nth-last-child() {
  margin-bottom: 0px;
}
.date {
  width: 100px;
  text-align: right;
  padding-right: 30px;
  font-size: 21px;
  color: #666;
  flex-shrink: 0;
  padding-top: 3px;
}

.timeline-content {
  display: flex;
  flex-grow: 1;
  height: min-content;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s, transform 0.5s;

}

.timeline-content.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgb(217 119 6 / var(--tw-text-opacity));
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
}

.card-title {
  margin: 0;
  font-size: 25px;
  color: rgb(217 119 6 / var(--tw-text-opacity));
}

.card-subtitle {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
  font-weight: normal;
}

.card-description {
  margin: 10px 0 0;
  font-size: 18px;
  color: #333;
}

.line {
  width: 2px;
  background-color: #e0e0e0;
  position: absolute;
  left: 109px;
  top: 25px;
  bottom: -20px;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .timeline-container {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .card {
    max-width: 300px;
    max-height: 200px;
    overflow: auto;
  }
  .timeline-container {
    padding: 5px;
  }
  
  .timeline-item {
    margin-bottom: 30px;
  }


}
</style>