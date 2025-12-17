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
  <div id="page" ref="pageRef">
    <main ref="mainRef">
      <!-- Slide 1: SNS -->
      <section class="panel bg-moko-blue">
        <h2 class="panel__number">1</h2>

        <div class="panel-content">
          <h3>Connect With Us</h3>
          <p>
            Follow The Language Friends for updates, previews, and new releases.
          </p>

          <!-- Placeholder for big SNS icons -->
          <div class="sns-links">
            <div>Instagram</div>
            <div>LINE</div>
            <div>YouTube</div>
          </div>
        </div>
      </section>

      <!-- Slide 2: Contact info -->
      <section class="panel green bg-niko-purple">
        <h2 class="panel__number">2</h2>

        <div class="panel-content">
          <h3>Contact Information</h3>
          <p>
            The Language Friends is an independent picture book project created
            to support gentle English learning for children in Japan.
          </p>

          <ul>
            <li>Email: hello@thelanguagefriends.com</li>
            <li>Phone: 000-0000-0000</li>
            <li>Author: The Language Friends Team</li>
          </ul>
        </div>
      </section>

      <!-- Slide 3: Final CTA -->
      <section class="panel bg-okja-yellow">
        <h2 class="panel__number">3</h2>

        <div class="panel-content">
          <h3>Get Updates by Email</h3>
          <p>
            Be the first to hear about new books, releases, and special content.
          </p>

          <!-- Placeholder for email form -->
          <button>Join the Email List</button>
        </div>
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
