<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  document.querySelectorAll(".panel").forEach((panel) => {
    const items = panel.querySelectorAll(".animate");

    gsap.from(items, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: panel,
        start: "top 75%",
        once: true,
      },
    });
  });
});
</script>

<template>
  <section class="relative py-24">
    <div class="max-w-5xl mx-auto px-4 space-y-32">
      <!-- PANEL 1 -->
      <section class="panel bg-moko-blue-soft">
        <p class="section-number animate">15.</p>
        <h3 class="animate text-2xl font-bold">
          {{ $t("homeSectionSix.connect.title") }}
        </h3>
        <p class="animate">
          {{ $t("homeSectionSix.connect.text") }}
        </p>
        <img
          class="animate w-full max-w-md"
          src="/images/everyone/cats-together-school.png"
        />
      </section>

      <!-- PANEL 2 -->
      <section class="panel bg-niko-purple-soft">
        <p class="section-number animate">16.</p>
        <h3 class="animate text-2xl font-bold">
          {{ $t("homeSectionSix.contact.title") }}
        </h3>
        <p class="animate">
          {{ $t("homeSectionSix.contact.text") }}
        </p>
        <img
          class="animate w-full max-w-md"
          src="/images/everyone/cats-together-bike.png"
        />
      </section>

      <!-- PANEL 3 -->
      <section class="panel bg-okja-yellow-soft">
        <p class="section-number animate">17.</p>
        <h3 class="animate text-2xl font-bold">
          {{ $t("homeSectionSix.final.title") }}
        </h3>
        <p class="animate">
          {{ $t("homeSectionSix.final.text") }}
        </p>
        <img
          class="animate w-full max-w-md"
          src="/images/everyone/cats-together-hug.png"
        />
      </section>
    </div>
  </section>
</template>

<style scoped>
.panel {
  padding: 3rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section-number {
  font-size: 3rem;
  font-weight: 700;
  opacity: 0.15;
}
</style>
