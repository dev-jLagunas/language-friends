<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{ total: number }>();
const activeIndex = ref(1);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const sections = document.querySelectorAll<HTMLElement>("[data-step]");

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Number(entry.target.getAttribute("data-step"));
        if (!isNaN(index)) activeIndex.value = index;
      });
    },
    {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((el) => observer!.observe(el));
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>

<template>
  <div
    class="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4"
  >
    <div
      v-for="n in total"
      :key="n"
      class="w-2 h-2 rounded-full transition-all duration-300"
      :class="n === activeIndex ? 'bg-dark-primary scale-125' : 'bg-gray-200'"
    />
    <div class="mt-2 text-xs text-gray-500 font-medium">
      {{ activeIndex }} / {{ total }}
    </div>
  </div>
</template>
