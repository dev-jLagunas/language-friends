<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const main = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-wrapper", // This now exists in the template again
        pin: true,
        start: "top top",
        end: () => "+=" + window.innerHeight * (panels.length - 1),
        scrub: 1,
      },
    });

    panels.forEach((panel, i) => {
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
    <div class="story-wrapper">
      <section class="panel bg-moko-blue-soft">
        <h2 class="text-3xl font-bold mb-4">{{ $t("about.title") }}</h2>
        <p class="text-base leading-relaxed">{{ $t("about.intro") }}</p>
        <img
          src="/images/mockups/teacher-and-child.png"
          class="mt-8 w-full max-w-xl rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-niko-purple-soft">
        <h2 class="text-3xl font-bold mb-4">
          {{ $t("about.philosophy.title") }}
        </h2>
        <p class="text-base leading-relaxed">
          {{ $t("about.philosophy.text") }}
        </p>
        <img
          src="/images/mockups/teacher-and-child.png"
          class="mt-8 w-full max-w-xl rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-okja-yellow-soft">
        <h2 class="text-3xl font-bold mb-4">
          {{ $t("about.learning.title") }}
        </h2>
        <p class="text-base leading-relaxed">{{ $t("about.learning.text") }}</p>
        <img
          src="/images/mockups/teacher-and-child.png"
          class="mt-8 w-full max-w-xl rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-moko-blue-soft">
        <h2 class="text-3xl font-bold mb-4">
          {{ $t("about.characters.title") }}
        </h2>
        <p class="text-base leading-relaxed">
          {{ $t("about.characters.text") }}
        </p>
        <img
          src="/images/mockups/teacher-and-child.png"
          class="mt-8 w-full max-w-xl rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-niko-purple-soft">
        <h2 class="text-3xl font-bold mb-4">{{ $t("about.parents.title") }}</h2>
        <p class="text-base leading-relaxed">{{ $t("about.parents.text") }}</p>
        <img
          src="/images/mockups/teacher-and-child.png"
          class="mt-8 w-full max-w-xl rounded-2xl object-cover"
        />
      </section>

      <section class="panel bg-okja-yellow-soft">
        <h2 class="text-3xl font-bold mb-4">{{ $t("about.closing.title") }}</h2>
        <p class="text-base leading-relaxed">{{ $t("about.closing.text") }}</p>
        <img
          src="/images/mockups/teacher-and-child.png"
          class="mt-8 w-full max-w-xl rounded-2xl object-cover"
        />
      </section>
    </div>
  </div>
</template>

<style scoped>
/* The container must be 100vh and relative so 
  the absolute children position correctly inside it.
*/
.story-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Hides the slides waiting at yPercent: 100 */
}

/* I consolidated your Tailwind classes here for clarity,
  but added specific positioning rules needed for the stack effect.
*/
.panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Flexbox centering from your Tailwind classes */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem; /* px-6 */
  padding-right: 1.5rem;

  /* Ensure background covers the slide below it */
  z-index: 1;
}
</style>
