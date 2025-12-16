<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sectionRef = ref<HTMLElement | null>(null);

let offsets: number[] = [];
let totalOffset = 0;
let resizeHandler: (() => void) | null = null;
let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!sectionRef.value) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const rows = gsap.utils.toArray<HTMLElement>(".row", sectionRef.value!);

    const calculateOffsets = () => {
      totalOffset = 0;
      offsets = rows.map((row) => {
        const prev = totalOffset;
        const h1 = row.querySelector("h1");
        totalOffset += h1 ? h1.offsetHeight : 0;
        return prev;
      });

      ScrollTrigger.refresh();
    };

    calculateOffsets();
    resizeHandler = calculateOffsets;
    window.addEventListener("resize", resizeHandler);

    rows.forEach((row, i) => {
      const heading = row.querySelector(".left");
      if (!heading) return;

      ScrollTrigger.create({
        trigger: heading,
        start: () => `top ${offsets[i]}`,
        endTrigger: sectionRef.value!,
        end: () => `bottom ${totalOffset}`,
        pin: heading,
        pinSpacing: false,
      });
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
  }
  ctx?.revert();
});
</script>

<template>
  <section ref="sectionRef">
    <div class="panel plain">Meet The Language Friends</div>

    <div class="row-wrap">
      <div class="row">
        <div class="left">
          <h1>Moko</h1>
        </div>
        <div class="right border-2 h-120 place-content-center">
          Hi, I’m Moko. I love moving my body, riding my bike, and exploring the
          world around me. I learn English by doing everyday things and noticing
          what’s happening around me. Sometimes I make mistakes, and that’s
          okay. Learning is more fun when we take it one step at a time.
        </div>
      </div>

      <div class="row">
        <div class="left">
          <h1>Niko</h1>
        </div>
        <div class="right h-120 place-content-center">
          Hello, I’m Niko. I’m curious and I like asking questions about new
          things. I enjoy learning English through simple words and familiar
          situations. I don’t rush, and I don’t worry about being perfect. I
          just keep listening, trying, and growing.
        </div>
      </div>

      <div class="row">
        <div class="left">
          <h1>Okja</h1>
        </div>
        <div class="right h-120 place-content-center">
          I’m Okja. I’m calm, thoughtful, and I like to take my time. I learn
          English by watching, listening, and repeating what I hear. There’s no
          pressure and no tests here. Just stories, feelings, and gentle
          learning together.
        </div>
      </div>
    </div>

    <div style="height: 100vh"></div>
  </section>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  border-top: dashed 1px var(--mid);
}
.row .left {
  width: 40%;
}
.row .right {
  width: 60%;
}
.row + .row {
  margin-top: 50px;
}
.pin-spacer {
  /* to get around an odd browser rounding issue that happens when it gets converted to pixels */
  width: 40% !important;
}

h1 {
  padding: 0;
  margin: 0;
  font-size: 2rem;
  border: 2px solid red;
}
</style>
