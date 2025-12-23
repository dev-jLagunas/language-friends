<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const slides = gsap.utils.toArray<HTMLElement>(".slide");
  const delay = 0.5;

  const height = 500;
  const depth = -height / 2;
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
  <section class="relative font-yomogi">
    <img
      src="/images/bg-icons/abc-bg.png"
      alt="bg-icon-img"
      class="absolute opacity-10 -left-10 -rotate-12 w-1/2 md:w-1/3"
    />
    <img
      src="/images/bg-icons/whiteboard-bg.png"
      alt="bg-icon-img"
      class="absolute opacity-10 bottom-10 right-0 rotate-12 w-1/2 md:-bottom-10 md:w-1/3"
    />
    <div class="spacer"></div>
    <div
      class="wrapper place-content-start xl:grid xl:grid-cols-2 xl:place-content-center"
    >
      <div class="flex-col-center-center mb-4 md:mb-8">
        <h2
          class="text-4xl font-bold text-center mx-auto mb-2 md:text-6xl md:mb-4 2xl:text-8xl"
        >
          {{ $t("firstTime.title") }}
        </h2>
        <p class="text-center px-4 leading-5 xs:w-3/4 md:text-2xl md:leading-7">
          {{ $t("tour.intro") }}
        </p>
        <div class="text-center mt-4 hidden xl:flex">
          <button class="dashed-btn">{{ $t("ui.cta") }}</button>
        </div>
      </div>
      <div class="slider mx-auto">
        <div
          class="slide center bg-moko-blue-soft flex-col-center-center shadow-lg"
        >
          <div class="text-dark-primary space-y-2 relative">
            <p
              class="absolute -top-26 -left-2 section-big-numbers desktop:-top-30"
            >
              1.
            </p>
            <h2 class="font-bold text-2xl md:text-4xl">
              {{ $t("firstTime.what.title") }}
            </h2>
            <figure class="w-full h-60 md:h-75 xl:h-100">
              <img
                src="/images/mockups/mon-and-son1.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </figure>

            <p class="leading-5 text-lg md:leading-9 md:text-3xl">
              {{ $t("firstTime.what.text") }}
            </p>
          </div>
        </div>

        <div
          class="slide center bg-niko-purple-soft flex-col-center-center shadow-lg"
        >
          <div
            class="text-dark-primary flex flex-col justify-center items-start gap-2 relative"
          >
            <p
              class="absolute -top-26 -left-2 section-big-numbers desktop:-top-30"
            >
              2.
            </p>
            <h2 class="font-bold text-2xl md:text-4xl">
              {{ $t("firstTime.who.title") }}
            </h2>
            <figure class="w-full h-60 md:h-75 xl:h-100">
              <img
                src="/images/mockups/mom-and-son2.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </figure>

            <p class="leading-5 text-lg md:leading-9 md:text-3xl">
              {{ $t("firstTime.who.text") }}
            </p>
          </div>
        </div>

        <div
          class="slide center bg-okja-yellow-soft flex-col-center-center shadow-lg"
        >
          <div class="text-dark-primary flex-col-center-start gap-2 relative">
            <p
              class="absolute -top-26 -left-2 section-big-numbers desktop:-top-30"
            >
              3.
            </p>
            <h2 class="font-bold text-2xl md:text-4xl">
              {{ $t("firstTime.why.title") }}
            </h2>
            <figure class="w-full h-60 md:h-75 xl:h-100">
              <img
                src="/images/mockups/mom-and-son3.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </figure>

            <p class="leading-5 text-lg md:leading-9 md:text-3xl">
              {{ $t("firstTime.why.text") }}
            </p>
          </div>
        </div>
      </div>
      <div class="text-center mt-4 xl:hidden">
        <button class="dashed-btn">Learn More</button>
      </div>
    </div>

    <div class="spacer"></div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
}

.slider {
  width: 300px;
  height: 500px;
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
