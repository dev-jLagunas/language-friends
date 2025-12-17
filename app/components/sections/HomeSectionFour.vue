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
  <section ref="sectionRef">
    <div class="description panel hr-bottom">
      <div class="scroll-down">
        <div class="arrow"></div>
      </div>
    </div>

    <section class="black">
      <div class="text-wrap">
        <div class="panel-text">
          <h2>Book Series 1</h2>
          <p>
            A gentle introduction to English through daily routines and familiar
            actions. Designed to help children hear and recognize simple English
            naturally.
          </p>
        </div>

        <div class="panel-text">
          <h2>Book Series 2</h2>
          <p>
            Expands vocabulary using play, movement, and emotions. Encourages
            listening and repetition without pressure or testing.
          </p>
        </div>

        <div class="panel-text">
          <h2>Book Series 3</h2>
          <p>
            Focuses on short sentences and simple interactions between
            characters. Helps children connect meaning through context and
            pictures.
          </p>
        </div>

        <div class="panel-text">
          <h2>Book Series 4</h2>
          <p>
            Introduces slightly longer phrases while keeping language calm and
            familiar. Supports confidence as children become more comfortable
            with English.
          </p>
        </div>

        <div class="panel-text">
          <h2>Book Series 5</h2>
          <p>
            A natural continuation of the series, reinforcing patterns learned
            earlier. Designed as a bridge toward more independent English
            exposure.
          </p>
        </div>
      </div>

      <div class="p-wrap">
        <div class="block one bg-moko-blue"></div>
        <div class="block two bg-niko-purple"></div>
        <div class="block three bg-okja-yellow"></div>
        <div class="block four bg-moko-blue"></div>
        <div class="block five bg-niko-purple"></div>
      </div>
    </section>

    <section class="panel plain"></section>
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
  overflow: hidden;
  width: 450px;
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
  text-align: center;
  transform: translateY(100%);
  opacity: 0;
}

.p-wrap {
  position: relative;
  overflow: hidden;
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
  background-image: url("/images/mockups/book-mockup.png");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.block.two {
  background-image: url("/images/mockups/book-mockup-2.png");
}
.block.three {
  background-image: url("/images/mockups/book-mockup.png");
}
.block.four {
  background-image: url("/images/mockups/book-mockup-2.png");
}
</style>
