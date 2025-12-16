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
  <section class="relative">
    <div class="spacer"></div>
    <div
      class="wrapper place-content-start xl:grid xl:grid-cols-2 xl:place-items-center xl:place-content-center"
    >
      <div class="flex flex-col items-center">
        <img
          src="/images/everyone/cats-together-bike.png"
          alt=""
          class="h-auto w-2/5 md:w-1/6 xl:w-3/4"
        />
        <h2
          :class="heroTitleFont"
          class="text-4xl text-dark-primary leading-9 dark:text-light-primary text-center mx-auto mb-4 w-fit px-8 py-1 xl:text-6xl"
        >
          {{ $t("firstTime.title") }}
        </h2>
      </div>
      <div class="slider mx-auto">
        <div
          class="slide center bg-moko-blue/50 flex flex-col justify-center items-center shadow-lg"
        >
          <div
            class="font-yomogi text-dark-primary flex flex-col justify-center items-center gap-2"
          >
            <figure class="w-full h-30 md:h-75 xl:h-100">
              <img
                src="/images/mockups/mon-and-son1.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </figure>

            <h2 class="font-bold text-lg md:text-3xl dark:text-light-primary">
              {{ $t("firstTime.what.title") }}
            </h2>
            <p
              class="leading-5 text-base md:text-3xl md:leading-8 dark:text-light-primary"
            >
              {{ $t("firstTime.what.text") }}
            </p>
          </div>
        </div>

        <div
          class="slide center bg-niko-purple/50 flex flex-col justify-center items-center shadow-lg"
        >
          <div
            class="font-yomogi text-dark-primary flex flex-col justify-center items-center gap-2"
          >
            <figure class="w-full h-30 md:h-75 xl:h-100">
              <img
                src="/images/mockups/mom-and-son2.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </figure>
            <h2 class="font-bold text-lg md:text-3xl dark:text-light-primary">
              {{ $t("firstTime.who.title") }}
            </h2>
            <p
              class="leading-5 text-base md:text-3xl md:leading-8 dark:text-light-primary"
            >
              {{ $t("firstTime.who.text") }}
            </p>
          </div>
        </div>

        <div
          class="slide center bg-okja-yellow/50 flex flex-col justify-center items-centers shadow-lg"
        >
          <div
            class="font-yomogi text-dark-primary flex flex-col justify-center items-center gap-2"
          >
            <figure class="w-full h-30 md:h-75 xl:h-100">
              <img
                src="/images/mockups/mom-and-son3.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </figure>
            <h2 class="font-bold text-lg md:text-3xl dark:text-light-primary">
              {{ $t("firstTime.why.title") }}
            </h2>
            <p
              class="leading-5 text-base md:text-3xl md:leading-8 dark:text-light-primary"
            >
              {{ $t("firstTime.why.text") }}
            </p>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <button class="border-2 xl border-dashed px-4">Learn More</button>
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

  @media (width >= 1480px) {
    width: 700px;
    height: 700px;
    perspective: 1200px;
    rotate: 3deg;
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
  height: 15vh;
}
</style>
