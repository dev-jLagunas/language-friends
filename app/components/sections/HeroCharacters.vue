<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

const active = ref<number | null>(null);
let intervalId: number;

const toggle = (index: number) => {
  active.value = index;
};

onMounted(() => {
  intervalId = window.setInterval(() => {
    active.value = active.value === null ? 0 : (active.value + 1) % 3;
  }, 7000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section class="characters gap-2 px-4">
    <article
      class="card bg-moko-blue"
      :class="{ active: active === 0 }"
      @click="toggle(0)"
    >
      <img
        src="/images/moko/moko-hello-1.png"
        alt="Moko"
        class="w-full max-w-45"
      />
      <span class="text-sm font-bold text-dark-primary xs:text-lg">{{
        $t("characters.moko")
      }}</span>
      <!-- Hidden expandable content -->
      <div
        class="card-content flex-col-center-center absolute bg-light-primary w-full py-2 text-dark-primary md:w-fit md:px-4"
      >
        <p class="md:text-2xl">
          {{ $t("characters.mokoGreet") }}
        </p>
        <button class="bg-moko-blue font-bold px-3 py-1 font-work text-sm mt-2">
          {{ $t("ui.cta") }}
        </button>
      </div>
    </article>

    <article
      class="card bg-niko-purple"
      :class="{ active: active === 1 }"
      @click="toggle(1)"
    >
      <img
        src="/images/niko/niko-hello-1.png"
        alt="Niko"
        class="w-full max-w-45"
      />
      <span class="text-sm font-bold text-dark-primary xs:text-lg">{{
        $t("characters.niko")
      }}</span>
      <div
        class="card-content flex-col-center-center absolute bg-light-primary w-full py-2 text-dark-primary md:w-fit md:px-4"
      >
        <p class="md:text-2xl">{{ $t("characters.nikoGreet") }}</p>
        <button
          class="bg-niko-purple font-bold px-3 text-sm py-1 font-work mt-2"
        >
          {{ $t("ui.cta") }}
        </button>
      </div>
    </article>

    <article
      class="card bg-okja-yellow"
      :class="{ active: active === 2 }"
      @click="toggle(2)"
    >
      <img
        src="/images/okja/okja-hello-1.png"
        alt="Okja"
        class="w-full max-w-45"
      />
      <span class="text-sm font-bold text-dark-primary xs:text-lg">{{
        $t("characters.okja")
      }}</span>
      <div
        class="card-content flex-col-center-center absolute bg-light-primary w-full py-2 text-dark-primary md:w-fit md:px-4"
      >
        <p class="md:text-2xl">{{ $t("characters.okjaGreet") }}</p>
        <button
          class="bg-okja-yellow font-bold px-3 py-1 text-sm font-work mt-2"
        >
          {{ $t("ui.cta") }}
        </button>
      </div>
    </article>
  </section>
</template>

<style scoped>
.characters {
  display: flex;
  width: 100%;
  height: 30vh;
}

.card {
  flex: 1;
  overflow: hidden;
  transition: flex 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

.card img {
  width: 90%;
  transition: 1s ease;
}

.card-content {
  transform: translateX(-110%);
  max-height: 0;
  left: 0;
  overflow: hidden;
  transition: all 1s ease;
}

/* Active state = expansion */
.card.active {
  flex: 3;
}
/* Reveal only when active */
.card.active .card-content {
  opacity: 1;
  transform: translateX(0%);
  max-height: 300px; /* large enough for content */
}

.card.active img {
  width: 100%;
}
</style>
