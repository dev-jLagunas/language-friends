<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

const { locale } = useI18n();
let intervalId: number;

const heroTitleFont = computed(() =>
  locale.value === "ja" ? "font-cherry" : "font-yomogi"
);

const active = ref<number | null>(null);

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
  <section class="mb-4 pb-50">
    <header class="relative md:mb-8">
      <h1
        :class="heroTitleFont"
        class="font-bold px-4 text-3xl mb-2 text-dark-primary dark:text-light-primary tracking-wider xs:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center"
      >
        {{ $t("hero.title") }}
      </h1>
      <h3
        class="font-yomogi tracking-tight text-xl leading-5 px-4 mb-4 text-center"
      >
        {{ $t("hero.description") }}
      </h3>
    </header>
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
        <span class="font-cherry text-2xl">{{ $t("characters.moko") }}</span>
        <!-- Hidden expandable content -->
        <div
          class="card-content absolute bg-light-primary/95 w-full py-2 flex flex-col justify-center items-center px-2 text-dark-primary font-yomogi text-lg font-bold shadow-2xl md:w-fit md:px-4"
        >
          <p class="text-sm md:text-3xl">
            {{ $t("characters.mokoGreet") }}
          </p>
          <button class="bg-green-signifier px-3 py-1 font-work text-sm mt-2">
            Learn More
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
        <span class="font-cherry text-2xl">{{ $t("characters.niko") }}</span>
        <div
          class="card-content absolute bg-light-primary/95 w-full py-2 flex flex-col justify-center items-center px-2 text-dark-primary font-yomogi text-lg font-bold shadow-2xl md:w-fit md:px-8"
        >
          <p class="text-sm md:text-3xl">{{ $t("characters.nikoGreet") }}</p>
          <button class="bg-green-signifier px-3 text-sm py-1 font-work mt-2">
            Learn More
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
        <span class="font-cherry text-2xl">{{ $t("characters.okja") }}</span>
        <div
          class="card-content absolute bg-light-primary/95 w-full py-2 flex flex-col justify-center items-center px-2 text-dark-primary font-yomogi text-lg font-bold shadow-2xl md:w-fit md:px-8"
        >
          <p class="text-sm md:text-3xl">{{ $t("characters.okjaGreet") }}</p>
          <button class="bg-green-signifier px-3 py-1 text-sm font-work mt-2">
            Learn More
          </button>
        </div>
      </article>
    </section>

    <!-- <div class="grid grid-cols-3 gap-2 px-4">
      <figure
        class="bg-moko-blue flex flex-col items-center justify-center py-8 max-h-75"
      >
        <img
          src="/images/moko/moko-hello-1.png"
          alt=""
          class="w-full max-w-50"
        />
        <figcaption
          class="font-cherry text-2xl text-light-primary tracking-widest"
        >
          {{ $t("characters.moko") }}
        </figcaption>
      </figure>
      <figure
        class="bg-niko-purple flex flex-col items-center justify-center max-h-75"
      >
        <img
          src="/images/niko/niko-hello-1.png"
          alt=""
          class="w-full max-w-50"
        />
        <figcaption
          class="font-cherry text-2xl text-light-primary tracking-widest"
        >
          {{ $t("characters.niko") }}
        </figcaption>
      </figure>
      <figure
        class="bg-okja-yellow flex flex-col items-center justify-center max-h-75"
      >
        <img
          src="/images/okja/okja-hello-1.png"
          alt=""
          class="w-full max-w-50"
        />
        <figcaption
          class="font-cherry text-2xl text-light-primary tracking-widest"
        >
          {{ $t("characters.okja") }}
        </figcaption>
      </figure>
    </div> -->

    <!--*************************************************** 
   *************** BOTTOM GRID************************* -->
    <div class="px-4 space-y-2 mt-4 grid grid-cols-3 gap-4">
      <figure
        class="border border-dark-primary/50 dark:border-light-primary/50 border-dashed flex flex-col items-center justify-center gap-2 p-2 md:flex-col md:py-4"
      >
        <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
          {{ $t("hero.prompt1") }}
        </figcaption>
        <img
          src="/images/mockups/book-mockup-2.png"
          alt=""
          class="w-full max-w-50 hover:scale-110 transition-all ease duration-300"
        />
      </figure>

      <figure
        class="border border-dark-primary/50 border-dashed dark:border-light-primary/50 flex flex-col items-center justify-center gap-2 p-2 md:flex-col md:py-4"
      >
        <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
          {{ $t("hero.prompt2") }}
        </figcaption>

        <img
          src="/images/mockups/book-mockup.png"
          alt=""
          class="w-full max-w-50 hover:scale-110 transition-all ease duration-300"
        />
      </figure>
      <figure
        class="border border-dark-primary/50 border-dashed dark:border-light-primary/50 flex flex-col items-center justify-center gap-2 p-2 md:flex-col md:py-4"
      >
        <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
          {{ $t("hero.prompt3") }}
        </figcaption>

        <img
          src="/images/mockups/book-mockup-2.png"
          alt=""
          class="w-full max-w-50 hover:scale-110 transition-all ease duration-300"
        />
      </figure>
      <form
        aria-label="メール登録CTA"
        class="border col-span-3 border-dark-primary/50 border-dashed px-2 py-2 dark:border-light-primary/50"
      >
        <label for="email" class="sr-only">
          {{ $t("hero.emailPlaceholder") }}
        </label>
        <!-- <img
          src="/images/everyone/cats-with-sign.png"
          alt=""
          class="w-32 mx-auto max-w-50"
        /> -->
        <h3
          class="font-yomogi tracking-tight text-center text-lg font-bold mt-2 leading-5 md:leading-7 md:text-2xl"
        >
          {{ $t("hero.note") }}
        </h3>
        <div class="mt-4 md:flex md:w-1/2 md:mx-auto">
          <input
            id="email"
            type="email"
            name="email"
            :placeholder="$t('hero.emailPlaceholder')"
            autocomplete="email"
            required
            class="w-full py-2 bg-dark-primary/10 dark:bg-light-primary mb-2 px-2 h-10 placeholder:text--primary dark:placeholder:text-dark-primary"
          />

          <button
            type="submit"
            class="bg-green-signifier px-3 w-full text-dark-primary font-bold h-10 font-work md:w-1/2"
          >
            {{ $t("hero.subscribeButton") }}
          </button>
        </div>
      </form>
    </div>
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
