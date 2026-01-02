<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{ total: number }>();
const activeIndex = ref(1);

let observer: IntersectionObserver | null = null;

function scrollToSection(index: number) {
  const target = document.querySelector(
    `[data-step="${index}"]`
  ) as HTMLElement | null;

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

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
    class="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 xl:right-16 2xl:right-32"
  >
    <div
      v-for="n in total"
      :key="n"
      @click="scrollToSection(n)"
      class="w-2 h-2 rounded-full cursor-pointer transition-all duration-300"
      :class="[
        n === activeIndex
          ? 'bg-dark-primary scale-125'
          : 'bg-gray-300/50 hover:bg-gray-400',
      ]"
    />

    <div
      class="mt-2 text-xs font-yomogi text-dark-primary dark:text-light-primary"
    >
      {{ activeIndex }} / {{ total }}
    </div>
  </div>
</template>
