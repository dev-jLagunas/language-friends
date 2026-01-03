<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const main = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
const total = ref(0);

let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    total.value = panels.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-wrapper",
        pin: true,
        start: "top top",
        end: () => "+=" + window.innerHeight * (panels.length - 1),
        scrub: 1,
      },
    });

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        onEnter: () => (activeIndex.value = i),
        onEnterBack: () => (activeIndex.value = i),
      });

      if (i === 0) return;

      gsap.set(panel, { yPercent: 100 });

      tl.to(panel, {
        yPercent: 0,
        ease: "none",
        duration: 1,
      });
    });
  }, main.value as Element);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div ref="main" class="font-yomogi">
    <div class="story-wrapper text-dark-primary">
      <section
        class="panel border-2 border-dark-primary/50 border-dashed p-4 dark:border-light-primary/50 theme-toggle-styles"
      >
        <div
          class="absolute top-8 right-4 flex flex-col items-center opacity-70"
        >
          <span>scroll</span>
          <Icon name="mdi:chevron-down" class="animate-bounce" />
        </div>

        <Icon name="mdi:paw" class="text-3xl mb-4 text-okja-yellow" />

        <span class="absolute top-0 left-4 section-big-numbers opacity-70">
          0.
        </span>

        <h2 class="section-card-title section-title-underline">
          {{ $t("about.aboutIntro.title") }}
        </h2>

        <p class="section-body-type">
          {{ $t("about.aboutIntro.text") }}
        </p>

        <ul class="mt-6 space-y-2">
          <li>2. {{ $t("about.aboutIntro.contents.one") }}</li>
          <li>3. {{ $t("about.aboutIntro.contents.two") }}</li>
          <li>4. {{ $t("about.aboutIntro.contents.three") }}</li>
          <li>5. {{ $t("about.aboutIntro.contents.four") }}</li>
          <li>6. {{ $t("about.aboutIntro.contents.five") }}</li>
        </ul>
      </section>

      <section class="panel bg-moko-blue-soft">
        <div
          class="absolute top-8 right-4 flex flex-col items-center opacity-70"
        >
          <span>scroll</span>
          <Icon name="mdi:chevron-down" class="animate-bounce" />
        </div>

        <Icon name="mdi:paw" class="text-3xl mb-4" />
        <span class="absolute top-0 left-4 section-big-numbers opacity-70">
          1.
        </span>
        <h2 class="section-card-title section-title-underline">
          {{ $t("about.title") }}
        </h2>
        <p class="section-body-type">
          {{ $t("about.intro") }}
        </p>
        <img
          src="/images/mockups/teacher-and-child.png"
          class="mt-8 w-full max-w-lg rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-niko-purple-soft">
        <div
          class="absolute top-8 right-4 flex flex-col items-center opacity-70"
        >
          <span>scroll</span>
          <Icon name="mdi:chevron-down" class="animate-bounce" />
        </div>
        <Icon name="mdi:cat" class="text-3xl mb-4" />
        <span class="absolute top-0 left-4 section-big-numbers opacity-70">
          2.
        </span>
        <h2 class="section-card-title section-title-underline">
          {{ $t("about.philosophy.title") }}
        </h2>
        <p class="section-body-type">
          {{ $t("about.philosophy.text") }}
        </p>
        <img
          src="/images/mockups/mom-and-son2.png"
          class="mt-8 w-full max-w-lg rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-okja-yellow-soft">
        <div
          class="absolute top-8 right-4 flex flex-col items-center opacity-70"
        >
          <span>scroll</span>
          <Icon name="mdi:chevron-down" class="animate-bounce" />
        </div>
        <Icon name="fa6-solid:cat" class="text-3xl mb-4" />
        <span class="absolute top-0 left-4 section-big-numbers opacity-70">
          3.
        </span>
        <h2 class="section-card-title section-title-underline">
          {{ $t("about.learning.title") }}
        </h2>
        <p class="section-body-type">{{ $t("about.learning.text") }}</p>
        <img
          src="/images/mockups/mom-and-son3.png"
          class="mt-8 w-full max-w-lg rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-moko-blue-soft">
        <div
          class="absolute top-8 right-4 flex flex-col items-center opacity-70"
        >
          <span>scroll</span>
          <Icon name="mdi:chevron-down" class="animate-bounce" />
        </div>
        <Icon name="tabler:cat" class="text-3xl mb-4" />
        <span class="absolute top-0 left-4 section-big-numbers opacity-70">
          4.
        </span>
        <h2 class="section-card-title section-title-underline">
          {{ $t("about.characters.title") }}
        </h2>
        <p class="section-body-type">
          {{ $t("about.characters.text") }}
        </p>
        <img
          src="/images/mockups/dad-and-son1.png"
          class="mt-8 w-full max-w-lg rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-niko-purple-soft">
        <div
          class="absolute top-8 right-4 flex flex-col items-center opacity-70"
        >
          <span>scroll</span>
          <Icon name="mdi:chevron-down" class="animate-bounce" />
        </div>
        <Icon name="mdi:paw" class="text-3xl mb-4" />
        <span class="absolute top-0 left-4 section-big-numbers opacity-70">
          5.
        </span>
        <h2 class="section-card-title section-title-underline">
          {{ $t("about.parents.title") }}
        </h2>
        <p class="section-body-type">{{ $t("about.parents.text") }}</p>
        <img
          src="/images/mockups/book-mockup-3.png"
          class="mt-8 w-full max-w-lg rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-okja-yellow-soft">
        <Icon name="mdi:cat" class="text-3xl mb-4" />
        <span class="absolute top-0 left-4 section-big-numbers opacity-70">
          6.
        </span>
        <h2 class="section-card-title section-title-underline">
          {{ $t("about.closing.title") }}
        </h2>
        <p class="section-body-type">{{ $t("about.closing.text") }}</p>
        <NuxtLink to="/books-display">
          <button class="green-cta-btn mt-8">See Books</button>
        </NuxtLink>

        <img
          src="/images/mockups/mom-and-son4.png"
          class="mt-8 w-full max-w-lg rounded-2xl object-cover"
        />
      </section>
    </div>
  </div>
</template>

<style scoped>
.story-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  z-index: 1;
  padding: 1rem;
  padding-top: 3rem;

  @media (min-width: 425px) {
    justify-content: center;
  }
}
</style>
