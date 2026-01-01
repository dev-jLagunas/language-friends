<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sections = document.querySelectorAll(".story-panel");

  sections.forEach((section) => {
    const items = section.querySelectorAll(".animate");

    gsap.from(items, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  });
});
</script>

<template>
  <section class="relative py-24">
    <div class="max-w-5xl mx-auto px-4 space-y-28">
      <!-- Section 1 -->
      <section class="story-panel bg-moko-blue-soft">
        <p class="section-number animate">4.</p>
        <h3 class="animate text-2xl font-bold">
          {{ $t("homeSectionTwo.sectionA.title") }}
        </h3>
        <figure class="animate w-full h-60">
          <img
            src="/images/everyone/cats-together-school.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </figure>
        <p class="animate">
          {{ $t("homeSectionTwo.sectionA.text") }}
        </p>
      </section>

      <!-- Section 2 -->
      <section class="story-panel bg-niko-purple-soft">
        <p class="section-number animate">5.</p>
        <h3 class="animate text-2xl font-bold">
          {{ $t("homeSectionTwo.sectionB.title") }}
        </h3>
        <figure class="animate w-full h-60">
          <img
            src="/images/everyone/cats-together-bike.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </figure>
        <p class="animate">
          {{ $t("homeSectionTwo.sectionB.text") }}
        </p>
      </section>

      <!-- Section 3 -->
      <section class="story-panel bg-okja-yellow-soft">
        <p class="section-number animate">6.</p>
        <h3 class="animate text-2xl font-bold">
          {{ $t("homeSectionTwo.sectionC.title") }}
        </h3>
        <figure class="animate w-full h-60">
          <img
            src="/images/everyone/cats-together-hug.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </figure>
        <p class="animate">
          {{ $t("homeSectionTwo.sectionC.text") }}
        </p>
      </section>
    </div>
  </section>
</template>

<style scoped>
.story-panel {
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-number {
  font-size: 3rem;
  font-weight: 700;
  opacity: 0.15;
}
</style>
