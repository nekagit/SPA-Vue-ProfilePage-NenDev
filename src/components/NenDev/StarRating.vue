<!-- StarRating.vue -->
<template>
  <div class="star-rating">
    <span
      v-for="n in 5"
      :key="n"
      :class="{ filled: n <= rating }"
      @click="setRating(n)"
      @mouseover="hoverRating(n)"
      @mouseleave="leaveRating"
    >
      ★
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const rating = ref(0);
const tempRating = ref(0);

const setRating = (value) => {
  rating.value = value;
};

const hoverRating = (value) => {
  tempRating.value = value;
};

const leaveRating = () => {
  tempRating.value = 0;
};
</script>

<style scoped>
.star-rating span {
  font-size: 20px;
  cursor: pointer;
  color: gray;
}

.star-rating span.filled {
  color: gold;
}
</style>
