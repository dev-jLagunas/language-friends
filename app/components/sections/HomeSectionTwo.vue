<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const container = ref<HTMLElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!container.value || !wrapper.value) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel", wrapper.value!);
    const totalWidth = panels.reduce((acc, p) => acc + p.offsetWidth, 0);

    gsap.to(wrapper.value!, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container.value!,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, container.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <section ref="container" class="relative overflow-hidden">
    <div ref="wrapper" class="wrapper">
      <section class="panel section bg-moko-blue/50 place-content-center">
        <h2 class="panel__number">A</h2>

        <div class="panel__content md:text-4xl">
          <h3>How The Language Friends Began</h3>
          <p>
            The Language Friends began with a simple question: how can young
            children learn English naturally, without pressure or memorization?
            We wanted to create something gentle, playful, and realistic for
            families raising children in Japan.
          </p>

          <img src="" alt="" />
        </div>
      </section>

      <section class="panel section bg-niko-purple/50 place-content-center">
        <h2 class="panel__number">B</h2>

        <div class="panel__content">
          <h3>Designed for Japanese Families</h3>
          <p>
            Our books are created specifically for children growing up in Japan.
            Short sentences, familiar situations, and a pace that feels
            comfortable for both parents and kids.
          </p>

          <img src="" alt="" />
        </div>
      </section>

      <section class="panel section bg-okja-yellow/50 place-content-center">
        <h2 class="panel__number">C</h2>

        <div class="panel__content">
          <h3>English Through Everyday Life</h3>
          <p>
            Children learn best when language feels useful and familiar. The
            Language Friends focuses on everyday actions like eating, playing,
            and going outside so English feels natural, not academic.
          </p>

          <img src="" alt="" />
        </div>
      </section>

      <section class="panel section place-content-center">
        <h2 class="panel__number">D</h2>

        <div class="panel__content">
          <h3>A Gentle First Step into English</h3>
          <p>
            The Language Friends is not about fast results. It’s about building
            confidence, curiosity, and positive feelings toward English that
            children can grow with over time.
          </p>

          <img src="" alt="" />
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}

.section {
  width: 100vw;
  flex-shrink: 0;
}

.section--large {
  width: 150vw;
}

.section--small {
  width: 46rem;
}

.panel__number {
  font-size: clamp(6rem, 15vw, 14rem);
  opacity: 0.1;
}
</style>
