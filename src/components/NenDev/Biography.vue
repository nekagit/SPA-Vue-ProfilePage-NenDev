<template>
  <div class="jumbotron">
    <div class="content-wrapper flex-col md:flex-row">
      <div class="image-container">
        <img :src="imageSrc" alt="Developer portrait" class="portrait-image" />
      </div>
      <div class="text-content">
        <h1 class="title text-center pb-8">{{ title }}</h1>
        <p class="description">{{ description }}</p>
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
  }
})
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
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
}

.image-container {
  flex: 1;
  perspective: 1000px;
}

.portrait-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-in-out;
}

.portrait-image:hover {
  transform: rotateX(-10deg) translateZ(20px);
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
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.primary-button {
  background-color: #3498db;
  color: #fff;
  box-shadow: 0 4px 6px rgba(52, 152, 219, 0.2);
}

.primary-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(52, 152, 219, 0.3);
}

.secondary-button {
  background-color: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}

.secondary-button:hover {
  background-color: #3498db;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(52, 152, 219, 0.1);
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 2rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .portrait-image {
    max-width: 300px;
  }
}
</style>