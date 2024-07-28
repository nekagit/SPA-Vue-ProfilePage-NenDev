<template>
  <div class="jumbotron">
    <div class="content-wrapper flex-col md:flex-row">
      <div class="image-container">
        <img :src="imageSrc" alt="Developer portrait" class="portrait-image" />
        <h1 class="flex">Lanugages</h1>
        <div class="languages flex flex-row">
          <Icon
            icon="twemoji:flag-for-flag-germany"
            class="flag"
            @mouseover="showModal('German')"
            @mouseleave="hideModal"
          />
          <Icon
            icon="twemoji:flag-for-flag-serbia"
            class="flag"
            @mouseover="showModal('Serbish')"
            @mouseleave="hideModal"
          />
          <Icon
            icon="twemoji:flag-for-flag-united-kingdom"
            class="flag"
            @mouseover="showModal('English')"
            @mouseleave="hideModal"
          />
          <Icon
            icon="twemoji:flag-for-flag-spain"
            class="flag"
            @mouseover="showModal('Spanish')"
            @mouseleave="hideModal"
          />
          <Icon
            icon="twemoji:flag-for-flag-turkey"
            class="flag"
            @mouseover="showModal('Turkish')"
            @mouseleave="hideModal"
          />
          <div v-if="isModalVisible" class="modal">
            <div class="modal-content">
              <h3 class="modal-title">{{ currentLanguage }}</h3>
              <p class="language-level">{{ getLanguageLevel(currentLanguage) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-content">
        <h1 class="title text-center pb-8">{{ title }}</h1>
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const isModalVisible = ref(false)
const currentLanguage = ref('')

const languageLevels = {
  German: 'C2',
  Serbish: 'C2',
  English: 'C2',
  Spanish: 'B2',
  Turkish: 'A1'
}

const showModal = (language) => {
  currentLanguage.value = language
  isModalVisible.value = true
}

const hideModal = () => {
  isModalVisible.value = false
}

const getLanguageLevel = (language) => {
  return languageLevels[language]
}
</script>
<style scoped>
.jumbotron {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  margin-bottom: 4rem;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
}

.image-container {
  flex: 1;
  text-align: center;
  position: relative;
}

.portrait-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-in-out;
}

.portrait-image:hover {
  transform: rotateX(-10deg) translateZ(20px);
}

.languages {
  margin-top: 1rem;
  position: relative;
}

.flag {
  width: 40px;
  height: auto;
  margin: 0 5px;
}

.modal {
  position: absolute;
  top: 0px;
  right: 200px;
  width: 100px;
  height: 100px;
  padding: 1rem;
  background-color: #363636;
  color: white;
  border: 1px solid #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

@media (max-width: 720px) {
  .modal {
    top: -100px;
    right: 0px;
  }
}
@media (min-width: 720px) {
  .modal {
    top: 0px;
    right: 0px;
  }
}

.modal-content {
  text-align: center;
  color: white;
}

.modal-title {
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.language-level {
  color: white;
  font-size: 1rem;
}

.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.description:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.button-group {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;
}

.primary-button,
.secondary-button {
  padding: 0.8rem 1.5rem;
}
</style>
