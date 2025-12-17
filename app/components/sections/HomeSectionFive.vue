<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sectionRef = ref<HTMLElement | null>(null);
const wrapperRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!sectionRef.value || !wrapperRef.value) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value!,
        start: "top top",
        end: "+=200%", // scroll distance (2 transitions)
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Panel 1 → Panel 2
    tl.to(wrapperRef.value!, {
      x: "-100vw",
      ease: "none",
    });

    // Panel 2 → Panel 3
    tl.to(wrapperRef.value!, {
      x: "-200vw",
      ease: "none",
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <section ref="sectionRef" class="kids-section">
    <div ref="wrapperRef" class="kids-wrapper">
      <!-- Panel 1 -->
      <section class="kids-panel intro bg-moko-blue">
        <h1>Kids Corner</h1>
        <p>
          A playful space made just for kids. Explore stories, characters, and
          simple English through fun activities.
        </p>
      </section>

      <!-- Panel 2 (horizontal focus panel) -->
      <section class="kids-panel showcase bg-niko-purple">
        <img
          src="/images/everyone/cats-together-hug.png"
          alt="Kids corner preview"
        />
      </section>

      <!-- Panel 3 -->
      <section class="kids-panel cta bg-okja-yellow">
        <h2>Let’s Go!</h2>
        <p>Enter the Kids Corner and start exploring.</p>
        <button>Enter Kids Corner</button>
      </section>
    </div>
  </section>
</template>
<style scoped>
/* Main kids section */
.kids-section {
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Horizontal wrapper */
.kids-wrapper {
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}

/* Individual panels */
.kids-panel {
  position: relative;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Panel-specific tweaks (optional, safe defaults) */
.kids-panel.intro {
  flex-direction: column;
}

.kids-panel.showcase img {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.kids-panel.cta {
  flex-direction: column;
  gap: 1rem;
}
</style>
