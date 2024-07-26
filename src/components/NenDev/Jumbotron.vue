<template>
  <div class="jumbotron">
    <div class="content-wrapper">
      <div class="image-container">
        <img :src="imageSrc" alt="Developer portrait" class="portrait-image">
      </div>
      <div class="text-content">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ description }}</p>
        <div class="button-group">
          <button class="primary-button" @click="onPrimaryAction">
            {{ primaryButtonText }}
          </button>
          <button class="secondary-button" @click="onSecondaryAction">
            {{ secondaryButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  },
  primaryButtonText: {
    type: String,
    default: 'Resume'
  },
  secondaryButtonText: {
    type: String,
    default: 'Contact'
  }
})

const emit = defineEmits(['primaryAction', 'secondaryAction'])

const onPrimaryAction = () => emit('primaryAction')
const onSecondaryAction = () => emit('secondaryAction')
</script>

<style scoped>
.jumbotron {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content-wrapper {
  display: flex;
  max-width: 1200px;
  gap: 2rem;
}

.image-container {
  flex: 1;
}

.portrait-image {
  width: 80%;
  height: auto;
  object-fit: cover;
}

.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.button-group {
  display: flex;
  gap: 1rem;
}

.primary-button, .secondary-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.primary-button {
  background-color: #000;
  color: #fff;
}

.secondary-button {
  background-color: transparent;
  color: #000;
  text-decoration: underline;
}
</style>