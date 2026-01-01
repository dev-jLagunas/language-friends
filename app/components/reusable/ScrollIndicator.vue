<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Step = { id: string; label: string };

const props = defineProps<{ steps: Step[] }>();
const activeIndex = ref(0);

gsap.registerPlugin(ScrollTrigger);

const pad2 = (n: number) => String(n).padStart(2, "0");
const triggerPrefix = "step-";

onMounted(async () => {
  await nextTick();
  await new Promise((r) => requestAnimationFrame(() => r(null)));

  // kill only our triggers
  ScrollTrigger.getAll()
    .filter((t) => String(t.vars?.id || "").startsWith(triggerPrefix))
    .forEach((t) => t.kill());

  // build triggers
  props.steps.forEach((step, i) => {
    const el = document.getElementById(step.id);
    if (!el) return;

    ScrollTrigger.create({
      id: `${triggerPrefix}${step.id}`,
      trigger: el,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.isActive) activeIndex.value = i;
      },
      onEnter: () => (activeIndex.value = i),
      onEnterBack: () => (activeIndex.value = i),
    });
  });

  // set initial based on current scroll
  const y = window.scrollY + 1;
  for (let i = props.steps.length - 1; i >= 0; i--) {
    const el = document.getElementById(props.steps[i].id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (y >= top) {
      activeIndex.value = i;
      break;
    }
  }

  ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll()
    .filter((t) => String(t.vars?.id || "").startsWith(triggerPrefix))
    .forEach((t) => t.kill());
});
</script>

<template>
  <div class="fixed right-4 top-1/2 -translate-y-1/2 z-50 select-none">
    <div
      class="rounded-full bg-white/70 backdrop-blur px-3 py-2 shadow-md text-dark-primary"
    >
      <span class="font-bold">{{ pad2(activeIndex + 1) }}</span>
      <span class="opacity-50 mx-1">/</span>
      <span class="opacity-70">{{ pad2(steps.length) }}</span>
    </div>
  </div>
</template>
