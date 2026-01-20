<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const showProgress = ref(false);
const landingWrapper = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;
onMounted(async () => {
  await nextTick();

  if (!landingWrapper.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;

      showProgress.value = entry.isIntersecting;
    },
    {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.01,
    },
  );

  observer.observe(landingWrapper.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <main class="dark:bg-dark-secondary dark:text-light-primary">
    <TheHero />
    <div ref="landingWrapper" id="landingStory">
      <ProgressIndicator v-if="showProgress" :total="15" />
      <TheLandingStory />
    </div>
  </main>
</template>
