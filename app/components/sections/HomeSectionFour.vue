<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sectionRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!sectionRef.value) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    // BLOCKS (images)
    gsap.set(".block", {
      zIndex: (i, _t, targets) => targets.length - i,
    });

    const images = gsap.utils.toArray<HTMLElement>(".block:not(:last-of-type)");

    images.forEach((image, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.value!,
            start: () => `top -${window.innerHeight * (i + 0.5)}`,
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .to(image, { height: 0 });
    });

    // TEXT PANELS
    gsap.set(".panel-text", {
      zIndex: (i, _t, targets) => targets.length - i,
    });

    const texts = gsap.utils.toArray<HTMLElement>(".panel-text");

    texts.forEach((text, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.value!,
            start: () => `top -${window.innerHeight * i}`,
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
            onEnter: () => gsap.set(text, { pointerEvents: "auto" }),
            onLeave: () => gsap.set(text, { pointerEvents: "none" }),
            onEnterBack: () => gsap.set(text, { pointerEvents: "auto" }),
            onLeaveBack: () => gsap.set(text, { pointerEvents: "none" }),
          },
        })
        .to(text, { opacity: 1, y: "50%", duration: 0.33 })
        .to(text, { opacity: 0, y: "0%", duration: 0.33 }, 0.66);
    });

    // PIN THE SECTION
    ScrollTrigger.create({
      trigger: sectionRef.value!,
      start: "top top",
      end: () => `+=${(images.length + 1) * window.innerHeight}`,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      // markers: true, // enable only for debugging
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <section ref="sectionRef" class="font-yomogi">
    <section class="black relative">
      <img
        src="/images/bg-icons/abc-bg.png"
        alt=""
        class="absolute top-0 left-0 -rotate-45 opacity-10"
      />
      <img
        src="/images/bg-icons/whiteboard-bg.png"
        alt=""
        class="absolute bottom-0 right-0 rotate-45 opacity-10"
      />
      <div class="text-wrap">
        <div class="panel-text relative px-8">
          <p
            class="section-big-numbers absolute -top-30 dark:text-light-primary lg:-top-40"
          >
            10.
          </p>
          <h2 class="font-bold text-4xl mb-2">
            {{ $t("homeSectionFour.series.like.title") }}
          </h2>
          <p class="text-3xl leading-8">
            {{ $t("homeSectionFour.series.like.text") }}
          </p>
          <button class="dashed-btn mt-4">
            {{ $t("ui.cta") }}
          </button>
        </div>

        <div class="panel-text pl-2 relative md:px-8">
          <p
            class="section-big-numbers absolute -top-30 dark:text-light-primary lg:-top-40"
          >
            11.
          </p>
          <h2 class="font-bold text-4xl mb-2">
            {{ $t("homeSectionFour.series.verb.title") }}
          </h2>
          <p class="text-3xl leading-8">
            {{ $t("homeSectionFour.series.verb.text") }}
          </p>
          <button class="dashed-btn mt-4">
            {{ $t("ui.cta") }}
          </button>
        </div>

        <div class="panel-text pl-2 relative md:px-8">
          <p
            class="section-big-numbers absolute -top-30 dark:text-light-primary lg:-top-40"
          >
            12.
          </p>
          <h2 class="font-bold text-4xl mb-2">
            {{ $t("homeSectionFour.series.adjective.title") }}
          </h2>
          <p class="text-3xl leading-8">
            {{ $t("homeSectionFour.series.adjective.text") }}
          </p>
          <button class="dashed-btn mt-4">
            {{ $t("ui.cta") }}
          </button>
        </div>

        <div class="panel-text pl-2 md:px-8 relative">
          <p
            class="section-big-numbers absolute -top-30 dark:text-light-primary lg:-top-40"
          >
            13.
          </p>
          <h2 class="font-bold text-4xl mb-2">
            {{ $t("homeSectionFour.series.dislike.title") }}
          </h2>
          <p class="text-3xl leading-8">
            {{ $t("homeSectionFour.series.dislike.text") }}
          </p>
          <button class="dashed-btn mt-4">
            {{ $t("ui.cta") }}
          </button>
        </div>

        <div class="panel-text pl-2 md:px-8 relative">
          <p
            class="section-big-numbers absolute -top-30 dark:text-light-primary lg:-top-40"
          >
            14.
          </p>
          <h2 class="font-bold text-4xl mb-2">
            {{ $t("homeSectionFour.series.friends.title") }}
          </h2>
          <p class="text-3xl leading-8">
            {{ $t("homeSectionFour.series.friends.text") }}
          </p>
          <button class="dashed-btn mt-4">
            {{ $t("ui.cta") }}
          </button>
        </div>
      </div>

      <div class="p-wrap">
        <div class="block one"></div>
        <div class="block two"></div>
        <div class="block three"></div>
        <div class="block four"></div>
        <div class="block five"></div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.scroller {
  height: 100vh;
}

.black {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: flex-col;
  height: 100vh;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.text-wrap {
  position: relative;
  width: 800px;
  height: 80vh;
}

.panel-text {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
}

.p-wrap {
  position: relative;
  width: 50%;
  max-width: 600px;
  height: 80vh;
}

.block {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: url("/images/mockups/book-mockup-2.png");
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
}

.block.two {
  background-image: url("/images/mockups/book-mockup-2.png");
}
.block.three {
  background-image: url("/images/mockups/book-mockup-2.png");
}
.block.four {
  background-image: url("/images/mockups/book-mockup-2.png");
}
</style>
