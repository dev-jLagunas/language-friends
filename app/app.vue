<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Scroll
const showButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const onScroll = () => {
  showButton.value = window.scrollY > 300;
};

// Lifecycle Hooks
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div
    class="theme-toggle-styles min-h-screen md:px-4 lg:px-8 xl:px-16 2xl:px-32"
  >
    <header>
      <TheNavbar />
    </header>

    <main class="flex-1 mt-4 bg-light-primary">
      <NuxtPage />
    </main>

    <footer>
      <MobileFooter class="md:hidden" />
      <DesktopFooter class="hidden md:flex" />
    </footer>
    <button
      v-if="showButton"
      aria-label="Back to top"
      @click="scrollToTop"
      class="back-to-top"
    >
      <Icon name="heroicons:arrow-up" />
    </button>
  </div>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 6rem;
  right: 1.5rem;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;

  background: transparent;
  border: 2px dashed currentColor;
  border-radius: 999px;

  opacity: 0.5;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.back-to-top:hover {
  opacity: 1;
  transform: translateY(-2px);
  cursor: pointer;
}
</style>
