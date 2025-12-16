<script setup lang="ts">
const { locale } = useI18n();
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
let intervalId: number;

const heroTitleFont = computed(() =>
  locale.value === "ja" ? "font-cherry" : "font-yomogi"
);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const slides = gsap.utils.toArray<HTMLElement>(".slide");
  const delay = 0.5;

  const depth = window.matchMedia("(width >= 768px)").matches ? -300 : -150;

  const transformOrigin = `center center ${depth}px`;

  const tl = gsap.timeline({
    defaults: {
      ease: "power1.inOut",
      transformOrigin,
    },
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=" + (slides.length - 1) * 50 + "%",
      pin: true,
      scrub: true,
    },
  });

  gsap.set(slides, {
    rotationX: (i) => (i ? -90 : 0),
    transformOrigin,
  });

  slides.forEach((slide, i) => {
    const nextSlide = slides[i + 1];
    if (!nextSlide) return;

    tl.to(
      slide,
      {
        rotationX: 90,
        onComplete: () => {
          gsap.set(slide, { rotationX: -90 });
        },
      },
      "+=" + delay
    ).to(
      nextSlide,
      {
        rotationX: 0,
      },
      "<"
    );
  });

  tl.to({}, { duration: delay });
});
</script>

<template>
  <section class="">
    <div class="spacer"></div>

    <div class="wrapper desktop:grid xl:grid-cols-2 xl:place-items-center">
      <div class="flex flex-col items-center">
        <img
          src="/images/moko/moko-holding-sign.png"
          alt=""
          class="h-auto w-1/6"
        />
        <h2
          :class="heroTitleFont"
          class="text-4xl text-dark-primary dark:text-light-primary text-center mx-auto mb-4 w-fit px-8 py-1"
        >
          {{ $t("firstTime.title") }}
        </h2>
      </div>
      <div class="slider mx-auto">
        <div class="slide center bg-moko-blue">
          <div class="">
            <h2>はじめての方へ</h2>
            <p>Language Friendsは、たのしく学ぶえいごえほんです。</p>
          </div>
        </div>

        <div class="slide center bg-niko-purple">
          <div>
            <h2>学びかた</h2>
            <p>えを見て、聞いて、まねをする。</p>
          </div>
        </div>

        <div class="slide center bg-okja-yellow">
          <div>
            <h2>キャラクター</h2>
            <p>ともだちのようなキャラクターが教えてくれます。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="spacer"></div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
}

.slider {
  width: 300px;
  height: 300px;
  position: relative;
  perspective: 500px;
  transform-style: preserve-3d;

  @media (width >= 768px) {
    width: 600px;
    height: 600px;
    perspective: 900px;
  }
}

.slider:after {
  position: absolute;
  content: "";
  top: -2rem;
  bottom: -2rem;
  right: -2rem;
  left: -2rem;
  outline: 1.5px dashed var(--light);
  border-radius: 12px;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  backface-visibility: hidden;
  padding: 1rem;
}

.panel {
  height: 50vh;
}

.spacer {
  height: 10vh;
}
</style>
