<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const path = ref(null);
const svg = ref(null);

onMounted(() => {
  const length = path.value.getTotalLength();

  gsap.set(path.value, {
    strokeDasharray: length,
    strokeDashoffset: length,
    autoAlpha: 0,
  });

  gsap.to(path.value, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: svg.value.parentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        gsap.set(path.value, {
          autoAlpha: self.progress > 0 && self.progress < 1 ? 1 : 0,
        });
      },
    },
  });
});
</script>

<template>
  <svg
    ref="svg"
    class="absolute top-0 left-0 w-full h-full pointer-events-none"
    viewBox="0 0 1000 6000"
    preserveAspectRatio="none"
  >
    <path
      ref="path"
      d="
    M 500 0
    C 600 400, 400 800, 520 1200
    C 650 1600, 350 2000, 500 2400
    C 650 2800, 400 3200, 550 3600
    C 700 4000, 450 4400, 600 4800
    C 750 5200, 500 5600, 650 6000
  "
      fill="none"
      stroke="#000"
      stroke-opacity="1"
      stroke-width="5"
      stroke-dasharray="6 10"
      stroke-linecap="round"
    />
  </svg>
</template>
