<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sectionRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!sectionRef.value) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const title = sectionRef.value!.querySelector("h1");
    const chars = gsap.utils.toArray<HTMLElement>(".character");

    // Initial state
    gsap.set(title, { opacity: 0, y: 40 });
    gsap.set(chars, { opacity: 0, y: 30, scale: 0.9 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value!,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Thank you
    tl.to(title, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      duration: 0.6,
    });

    // Characters left → right
    tl.to(
      chars,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.25,
        ease: "power2.out",
        duration: 0.6,
      },
      "-=0.2"
    );
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <section id="s6" ref="sectionRef" class="h-screen place-content-center">
    <h1 class="font-cherry text-center text-6xl md:text-9xl">
      {{ $t("homeSectionFinal.thanks") }}
    </h1>
    <article class="characters grid grid-cols-3 px-4 mt-4 lg:w-1/2 mx-auto">
      <figure class="character moko">
        <img src="/images/moko/moko-hello-1.png" alt="" />
      </figure>
      <figure class="character niko">
        <img src="/images/niko/niko-hello-1.png" alt="" />
      </figure>
      <figure class="character okja">
        <img src="/images/okja/okja-hello-1.png" alt="" />
      </figure>
    </article>
  </section>
</template>

<style scoped></style>
