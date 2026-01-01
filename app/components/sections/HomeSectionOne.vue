<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const cards = document.querySelectorAll(".story-card");

  cards.forEach((card) => {
    const items = card.querySelectorAll("h3, p, img");

    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
        },
      }
    );
  });
});
</script>

<template>
  <section id="s1" class="relative py-20 font-yomogi theme-toggle-styles px-4">
    <div class="flex-col-center-center gap-4 md:gap-12">
      <!-- Header -->
      <div class="text-center">
        <h2 class="section-title-type">
          {{ $t("firstTime.title") }}
        </h2>
        <p class="mt-2 mb-4 section-body-type">
          {{ $t("tour.intro") }}
        </p>
      </div>
      <!-- Card 1 -->
      <section
        class="story-card relative bg-moko-blue-soft rounded-2xl p-4 text-dark-primary md:grid md:grid-cols-2 md:place-items-center max-w-6xl"
      >
        <p class="section-big-numbers md:hidden">1.</p>
        <figure class="my-2">
          <img
            src="/images/mockups/mon-and-son1.png"
            class="rounded-2xl w-full object-cover max-h-100"
            alt=""
          />
        </figure>
        <div class="my-4 md:px-4">
          <p class="section-big-numbers hidden md:block">1.</p>
          <h3 class="font-black mb-2 text-3xl xs:text-4xl">
            {{ $t("firstTime.what.title") }}
          </h3>
          <p class="section-body-type">{{ $t("firstTime.what.text") }}</p>
          <p class="section-body-type mt-2">{{ $t("firstTime.what.extra") }}</p>
        </div>
      </section>
      <!-- Card 2 -->
      <section
        class="story-card relative bg-niko-purple-soft rounded-2xl p-4 text-dark-primary md:grid md:grid-cols-2 md:place-items-center max-w-6xl"
      >
        <p class="section-big-numbers md:absolute md:-top-16 md:left-0">2.</p>

        <figure class="my-2">
          <img
            src="/images/mockups/mom-and-son2.png"
            class="rounded-2xl w-full object-cover max-h-100"
            alt=""
          />
        </figure>
        <div class="my-4 md:px-4">
          <h3 class="font-black mb-2 text-3xl xs:text-4xl">
            {{ $t("firstTime.who.title") }}
          </h3>
          <p class="section-body-type">{{ $t("firstTime.who.text") }}</p>
          <p class="section-body-type mt-2">{{ $t("firstTime.who.extra") }}</p>
        </div>
      </section>
      <!-- Card 3 -->
      <section
        class="relative story-card bg-okja-yellow-soft rounded-2xl p-4 text-dark-primary md:grid md:grid-cols-2 md:place-items-center max-w-6xl"
      >
        <p class="section-big-numbers md:absolute md:-top-16 md:left-0">3.</p>

        <figure class="my-2">
          <img
            src="/images/mockups/mom-and-son3.png"
            class="rounded-2xl w-full object-cover max-h-100"
            alt=""
          />
        </figure>
        <div class="my-4 md:px-4">
          <h3 class="font-black mb-2 text-3xl xs:text-4xl">
            {{ $t("firstTime.why.title") }}
          </h3>
          <p class="section-body-type">{{ $t("firstTime.why.text") }}</p>
          <p class="section-body-type mt-2">{{ $t("firstTime.why.extra") }}</p>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped></style>
