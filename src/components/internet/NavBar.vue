<template>
  <nav
    @mouseleave="setActive(null)"
    class="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
  >
    <slot></slot>
  </nav>
</template>

<script setup>
import { ref, provide } from 'vue';
import { useMotion } from '@vueuse/motion';

const active = ref(null);
const setActive = (item) => {
  active.value = item;
};

provide('active', active);
provide('setActive', setActive);

// MenuItem component
const MenuItem = {
  props: ['item'],
  setup(props, { slots }) {
    const { active, setActive } = inject(['active', 'setActive']);
    const isActive = computed(() => active.value === props.item);

    const { motion } = useMotion({
      initial: { opacity: 0, scale: 0.85, y: 10 },
      enter: { opacity: 1, scale: 1, y: 0 },
      transition: {
        type: 'spring',
        mass: 0.5,
        damping: 11.5,
        stiffness: 100,
        restDelta: 0.001,
        restSpeed: 0.001,
      },
    });

    return () => (
      <div @mouseenter={() => setActive(props.item)} class="relative">
        <p
          class="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          style="transition: 0.3s"
        >
          {{ props.item }}
        </p>
        {active.value !== null && (
          <motion.div>
            {isActive.value && (
              <div class="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                <motion.div
                  layout-id="active"
                  class="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                >
                  <motion.div layout class="w-max h-full p-4">
                    {slots.default?.()}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    );
  },
};

// ProductItem component
const ProductItem = {
  props: ['title', 'description', 'href', 'src'],
  setup(props) {
    return () => (
      <a :href="props.href" class="flex space-x-2">
        <img
          :src="props.src"
          :alt="props.title"
          class="flex-shrink-0 rounded-md shadow-2xl"
          width="140"
          height="70"
        />
        <div>
          <h4 class="text-xl font-bold mb-1 text-black dark:text-white">
            {{ props.title }}
          </h4>
          <p class="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
            {{ props.description }}
          </p>
        </div>
      </a>
    );
  },
};

// HoveredLink component
const HoveredLink = {
  setup(_, { slots, attrs }) {
    return () => (
      <a
        {...attrs}
        class="text-neutral-700 dark:text-neutral-200 hover:text-black"
      >
        {slots.default?.()}
      </a>
    );
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>