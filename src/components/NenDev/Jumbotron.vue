<template>
  <div class="jumbotron">
    <div class="content-wrapper flex flex-col md:flex-row max-w-[90%]">
         <div class="image-container">
        <img :src="imageSrc" alt="Developer portrait" class="portrait-image" />
      </div>
      <div class="text-content">
        <div class="title text-center ">
          <TypeWriter class="hidden xl:flex" :texts="[title, 'I am a developer', 'Jesus is King!']" />
          <div class="flex xl:hidden pb-8">
            <h3>{{ title }}</h3>
          </div>
        </div>
        <p class="description">{{ description }}</p>
        <div class="button-group">
          <!-- <button class="primary-button" @click="onPrimaryAction">
            {{ primaryButtonText }}
          </button> -->
          <button class="secondary-button" @click="onSecondaryAction">
            {{ secondaryButtonText }}
          </button>
        </div>
      </div>
   
    </div>
  </div>
</template>

<script setup>
import TypeWriter from '@/components/NenDev/TypeWriter.vue';
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
  gap: 4rem;
}

.image-container {
  flex: 1;
}

.portrait-image {
  width: 80%;
  height: auto;
  margin:auto;
  margin-top:3rem;
  object-fit: cover;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
}

.portrait-image:hover {
  animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.description:hover {
  box-shadow: none;
  transform: translateY(5px);
}

.description::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.description:hover::after {
  opacity: 1;
}
.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.primary-button,
.secondary-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.primary-button,
.secondary-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.primary-button {
  background-color: rgb(26, 32, 44);;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.primary-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: all 0.5s;
}

.primary-button:hover::before {
  left: 100%;
}

.primary-button:hover {
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background-color: transparent;
  color: #000;
  text-decoration: none;
  border: 2px solid #000;
  transition: all 0.3s ease;
}

.secondary-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(26, 32, 44);;
  transform: scaleY(0);
  transform-origin: bottom center;
  transition: transform 0.3s ease;
  z-index: -1;
}

.secondary-button:hover {
  color: #fff;
}

.secondary-button:hover::after {
  transform: scaleY(1);
}
</style>
