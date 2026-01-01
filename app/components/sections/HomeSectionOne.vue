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
  <section id="s1" class="relative py-24">
    <!-- Background visuals -->
    <img
      src="/images/bg-icons/abc-bg.png"
      class="absolute opacity-10 -left-10 top-0 w-1/2 pointer-events-none"
      alt=""
    />
    <img
      src="/images/bg-icons/whiteboard-bg.png"
      class="absolute opacity-10 bottom-0 right-0 w-1/2 pointer-events-none"
      alt=""
    />
    <div class="max-w-5xl mx-auto px-4 space-y-20">
      <!-- Header -->
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2">{{ $t("firstTime.title") }}</h2>
        <p class="max-w-xl mx-auto text-base">{{ $t("tour.intro") }}</p>
      </div>
      <!-- Card 1 -->
      <section class="story-card bg-moko-blue-soft">
        <p class="section-number">1.</p>
        <h3 class="text-2xl font-bold">{{ $t("firstTime.what.title") }}</h3>
        <figure class="w-full h-60">
          <img
            src="/images/mockups/mon-and-son1.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </figure>
        <p>{{ $t("firstTime.what.text") }}</p>
      </section>
      <!-- Card 2 -->
      <section class="story-card bg-niko-purple-soft">
        <p class="section-number">2.</p>
        <h3 class="text-2xl font-bold">{{ $t("firstTime.who.title") }}</h3>
        <figure class="w-full h-60">
          <img
            src="/images/mockups/mom-and-son2.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </figure>
        <p>{{ $t("firstTime.who.text") }}</p>
      </section>
      <!-- Card 3 -->
      <section class="story-card bg-okja-yellow-soft">
        <p class="section-number">3.</p>
        <h3 class="text-2xl font-bold">{{ $t("firstTime.why.title") }}</h3>
        <figure class="w-full h-60">
          <img
            src="/images/mockups/mom-and-son3.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </figure>
        <p>{{ $t("firstTime.why.text") }}</p>
      </section>
      <div class="text-center pt-8">
        <button class="dashed-btn">Learn More</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.story-card {
  position: relative;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  will-change: transform, opacity;
}
.section-number {
  position: absolute;
  top: -1.5rem;
  left: -0.5rem;
  font-size: 3rem;
  font-weight: 700;
  opacity: 0.15;
}
</style>
