<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const pageRef = ref<HTMLElement | null>(null);
const mainRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;
let resizeHandler: (() => void) | null = null;

onMounted(async () => {
  await nextTick();
  if (!pageRef.value || !mainRef.value) return;

  gsap.registerPlugin(ScrollTrigger);

  const init = () => {
    const sections = gsap.utils.toArray<HTMLElement>("section", mainRef.value!);

    let winH = window.innerHeight;

    // Calculate total scroll
    const getTotalScroll = () => {
      let total = 0;
      sections.forEach((section) => {
        total += section.offsetHeight;
      });
      return total - winH;
    };

    // Timeline
    const tl = gsap.timeline();
    tl.addLabel("start");

    sections.forEach((section, index) => {
      const next = sections[index + 1];
      if (!next) return;

      tl.to(next, {
        y: -next.offsetHeight,
        duration: next.offsetHeight,
        ease: "linear",
      }).addLabel(`section-${index}`);
    });

    // Set page height
    pageRef.value!.style.height = getTotalScroll() + winH + "px";

    // ScrollTrigger
    ScrollTrigger.create({
      id: "contactScroll",
      trigger: mainRef.value!,
      animation: tl,
      pin: true,
      scrub: true,
      start: "top top",
      end: () => "+=" + getTotalScroll(),
      snap: {
        snapTo: (value) => {
          const labels = Object.values(tl.labels);
          const duration = tl.totalDuration();
          const points = labels.map((l) => l / duration);
          const proximity = 0.12;

          for (let p of points) {
            if (value > p - proximity && value < p + proximity) {
              return p;
            }
          }
          return value;
        },
        duration: { min: 0.2, max: 0.6 },
      },
      invalidateOnRefresh: true,
    });
  };

  ctx = gsap.context(() => {
    init();
  }, pageRef.value);

  resizeHandler = () => {
    ScrollTrigger.getById("contactScroll")?.kill();
    ScrollTrigger.refresh();
    init();
  };

  window.addEventListener("resize", resizeHandler);
});

onBeforeUnmount(() => {
  resizeHandler && window.removeEventListener("resize", resizeHandler);
  ScrollTrigger.getById("contactScroll")?.kill();
  ctx?.revert();
});
</script>

<template>
  <div id="page" ref="pageRef" class="font-yomogi">
    <main ref="mainRef">
      <!-- Slide 1: SNS -->
      <section
        class="panel bg-moko-blue-soft relative md:place-content-end lg:grid lg:grid-cols-2 lg:place-content-center"
      >
        <img
          src="/images/bg-icons/textbooks-bg.png"
          alt="background-icon"
          class="absolute opacity-25 w-40 right-0 rotate-12 top-0 lg:w-1/5"
        />
        <img
          src="/images/bg-icons/whiteboard-light-bg.png"
          alt="background-icon"
          class="hidden opacity-25 lg:block lg:-rotate-12 lg:absolute lg:bottom-0"
        />
        <h2
          class="section-big-numbers dark:text-light-primary md:absolute md:left-10 md:top-5"
        >
          4.
        </h2>
        <div class="md:px-8 lg:place-content-center">
          <h3 class="font-bold mb-2 text-2xl mt-4 xs:text-3xl">
            {{ $t("homeSectionTwo.sectionA.title") }}
          </h3>
          <p class="leading-5 text-lg xs:text-2xl xs:leading-7 lg:text-3xl">
            {{ $t("homeSectionTwo.sectionA.text") }}
          </p>
        </div>
        <img src="/images/everyone/cats-together-school.png" alt="" class="" />
      </section>
      <!-- Slide 2: Contact info -->
      <section
        class="panel bg-niko-purple-soft relative md:place-content-end lg:grid lg:grid-cols-2 lg:place-content-center"
      >
        <img
          src="/images/bg-icons/flashcards-bg.png"
          alt="background-icon"
          class="absolute opacity-25 w-40 right-0 rotate-12 top-0 lg:w-1/5"
        />
        <img
          src="/images/bg-icons/globe-talk-bg.png"
          alt="background-icon"
          class="hidden opacity-25 lg:block lg:-rotate-12 lg:absolute lg:bottom-0"
        />
        <h2
          class="section-big-numbers dark:text-light-primary md:absolute md:left-10 md:top-5"
        >
          5.
        </h2>
        <div class="md:px-8 lg:place-content-center">
          <h3 class="font-bold mb-2 text-2xl mt-4 xs:text-3xl">
            {{ $t("homeSectionTwo.sectionB.title") }}
          </h3>
          <p class="leading-5 text-lg xs:text-2xl xs:leading-7 lg:text-3xl">
            {{ $t("homeSectionTwo.sectionB.text") }}
          </p>
        </div>
        <img src="/images/everyone/cats-together-bike.png" alt="" class="" />
      </section>

      <!-- Slide 3: Final CTA -->
      <section
        class="panel bg-okja-yellow-soft relative md:place-content-end lg:grid lg:grid-cols-2 lg:place-content-center"
      >
        <img
          src="/images/bg-icons/backpack-bg.png"
          alt="background-icon"
          class="absolute opacity-25 w-40 right-0 rotate-12 top-0 lg:w-1/5"
        />
        <img
          src="/images/bg-icons/whiteboard-light-bg.png"
          alt="background-icon"
          class="hidden opacity-25 lg:block lg:-rotate-12 lg:absolute lg:bottom-0"
        />
        <h2
          class="section-big-numbers dark:text-light-primary md:absolute md:left-10 md:top-5"
        >
          6.
        </h2>
        <div class="md:px-8 lg:place-content-center">
          <h3 class="font-bold mb-2 text-2xl mt-4 xs:text-3xl">
            {{ $t("homeSectionTwo.sectionC.title") }}
          </h3>
          <p class="leading-5 text-lg xs:text-2xl xs:leading-7 lg:text-3xl">
            {{ $t("homeSectionTwo.sectionC.text") }}
          </p>
        </div>
        <img src="/images/everyone/cats-together-hug.png" alt="" class="" />
      </section>
    </main>
  </div>
</template>

<style scoped>
main {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

section.panel {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;

  &:not(:first-child) {
    top: 100%;
  }
}
</style>
