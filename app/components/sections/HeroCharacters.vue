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
      class="card bg-moko-blue rounded-lg md:rounded-2xl"
      :class="{ active: active === 0 }"
      @click="toggle(0)"
    >
      <img
        src="/images/moko/moko-nametag.png"
        alt="Moko"
        class="w-full max-w-45"
      />
      <span class="text-sm font-bold text-dark-primary md:text-2xl">{{
        $t("characters.profiles.moko.name")
      }}</span>
      <!-- Hidden expandable content -->
      <div
        class="card-content flex-col-center-center absolute bg-light-primary w-full py-2 text-dark-primary md:w-fit md:px-4 md:rounded-r-xl"
      >
        <p class="text-xl md:text-2xl">
          {{ $t("characters.profiles.moko.greeting") }}
        </p>
        <NuxtLink
          :to="
            $localePath({ path: '/character-info', hash: '#character-moko' })
          "
          class="bg-moko-blue character-btns inline-block text-center"
        >
          {{ $t("ui.learnMore") }}
        </NuxtLink>
      </div>
    </article>

    <article
      class="card bg-niko-purple rounded-lg md:rounded-2xl"
      :class="{ active: active === 1 }"
      @click="toggle(1)"
    >
      <img
        src="/images/niko/niko-nametag.png"
        alt="Niko"
        class="w-full max-w-45"
      />
      <span class="text-sm font-bold text-dark-primary md:text-2xl">{{
        $t("characters.profiles.niko.name")
      }}</span>
      <div
        class="card-content flex-col-center-center absolute bg-light-primary w-full py-2 text-dark-primary md:w-fit md:px-4 md:rounded-r-xl"
      >
        <p class="text-xl md:text-2xl">
          {{ $t("characters.profiles.niko.greeting") }}
        </p>
        <NuxtLink
          :to="
            $localePath({ path: '/character-info', hash: '#character-niko' })
          "
          class="bg-niko-purple character-btns inline-block text-center"
        >
          {{ $t("ui.learnMore") }}
        </NuxtLink>
      </div>
    </article>

    <article
      class="card bg-okja-yellow rounded-lg md:rounded-2xl"
      :class="{ active: active === 2 }"
      @click="toggle(2)"
    >
      <img
        src="/images/okja/okja-nametag.png"
        alt="Okja"
        class="w-full max-w-45"
      />
      <span class="text-sm font-bold text-dark-primary md:text-2xl">{{
        $t("characters.profiles.okja.name")
      }}</span>
      <div
        class="card-content flex-col-center-center absolute bg-light-primary w-full py-2 text-dark-primary md:w-fit md:px-4 md:rounded-r-xl"
      >
        <p class="text-xl md:text-2xl">
          {{ $t("characters.profiles.okja.greeting") }}
        </p>
        <NuxtLink
          :to="
            $localePath({ path: '/character-info', hash: '#character-okja' })
          "
          class="bg-okja-yellow character-btns inline-block text-center"
        >
          {{ $t("ui.learnMore") }}
        </NuxtLink>
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
