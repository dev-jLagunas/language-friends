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
    const chars = gsap.utils.toArray<HTMLElement>(".character");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.value!,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
      .to(chars, {
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        ease: "power2.out",
      });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <section ref="sectionRef" class="thankyou-section">
    <h1 class="thankyou-text">Thank you</h1>

    <div class="characters">
      <div class="character moko">Moko</div>
      <div class="character niko">Niko</div>
      <div class="character okja">Okja</div>
    </div>
  </section>
</template>

<style scoped>
.thankyou-section {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.thankyou-text {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 700;
  z-index: 2;
}

/* Character container */
.characters {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* Individual characters (placeholder boxes for now) */
.character {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  opacity: 0;
  transform: scale(0.2);
}

/* Rough starting positions */
.moko {
  top: 20%;
  left: 30%;
}

.niko {
  top: 60%;
  left: 50%;
}

.okja {
  top: 35%;
  left: 70%;
}
</style>
