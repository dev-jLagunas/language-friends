<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const cards = gsap.utils.toArray<HTMLElement>(".card");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});
</script>

<template>
  <section id="s3" class="wrapper theme-toggle-styles font-yomogi">
    <!-- Intro Card -->
    <div
      class="relative card p-4 border border-dashed rounded-lg border-dark-primary/30 dark:border-light-primary/30 shadow-sm"
    >
      <p
        class="section-big-numbers dark:text-light-primary absolute -top-14 left-0"
      >
        7.
      </p>
      <img
        src="/images/everyone/cats-wall-sitting.png"
        alt=""
        class="mx-auto"
      />
      <h2 class="font-bold leading-5 mb-2 text-lg xs:text-2xl xs:leading-7">
        {{ $t("homeSectionThree.title") }}
      </h2>
      <p class="leading-5 xs:text-xl xs:leading-6">
        {{ $t("homeSectionThree.intro") }}
      </p>
    </div>

    <!-- Moko -->
    <div class="relative card bg-moko-blue-soft p-4 rounded-lg shadow-sm">
      <p
        class="section-big-numbers dark:text-light-primary absolute -top-14 left-0"
      >
        8.
      </p>
      <img src="/images/moko/moko-hello-1.png" alt="" class="w-1/2 mx-auto" />
      <h2 class="font-bold leading-5 mb-2 text-lg xs:text-2xl xs:leading-7">
        {{ $t("homeSectionThree.moko.name") }}
      </h2>
      <p class="leading-5 xs:text-xl xs:leading-6">
        {{ $t("homeSectionThree.moko.text") }}
      </p>
    </div>

    <!-- Niko -->
    <div class="relative card bg-niko-purple-soft p-4 rounded-lg shadow-sm">
      <p
        class="section-big-numbers dark:text-light-primary absolute -top-14 left-0"
      >
        9.
      </p>
      <img src="/images/niko/niko-hello-1.png" alt="" class="w-1/2 mx-auto" />
      <h2 class="font-bold leading-5 mb-2 text-lg xs:text-2xl xs:leading-7">
        {{ $t("homeSectionThree.niko.name") }}
      </h2>
      <p class="leading-5 xs:text-xl xs:leading-6">
        {{ $t("homeSectionThree.niko.text") }}
      </p>
    </div>

    <!-- Okja -->
    <div class="relative card bg-okja-yellow-soft p-4 rounded-lg shadow-sm">
      <p
        class="section-big-numbers dark:text-light-primary absolute -top-14 left-0"
      >
        10.
      </p>
      <img src="/images/okja/okja-hello-1.png" alt="" class="w-1/2 mx-auto" />
      <h2 class="font-bold leading-5 mb-2 text-lg xs:text-2xl xs:leading-7">
        {{ $t("homeSectionThree.okja.name") }}
      </h2>
      <p class="leading-5 xs:text-xl xs:leading-6">
        {{ $t("homeSectionThree.okja.text") }}
      </p>
    </div>

    <!-- Outro -->
    <div
      class="card relative card p-4 border border-dashed rounded-lg border-dark-primary/30 dark:border-light-primary/30 shadow-sm"
    >
      <p
        class="section-big-numbers dark:text-light-primary absolute -top-14 left-0"
      >
        11.
      </p>
      <img src="/images/everyone/cats-peace-sign.png" alt="" class="mx-auto" />
      <h2 class="font-bold leading-5 mb-2 text-lg">
        {{ $t("homeSectionThree.books") }}
      </h2>
      <p class="leading-5 xs:text-xl xs:leading-6">
        Discover stories designed to grow curiosity, kindness, and confidence.
      </p>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>
