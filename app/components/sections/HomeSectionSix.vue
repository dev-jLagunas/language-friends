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
        class="panel bg-moko-blue-soft relative place-content-center md:grid md:grid-cols-1 md:place-items-center"
      >
        <img
          src="/images/bg-icons/textbooks-bg.png"
          alt="background-icon"
          class="absolute opacity-25 w-40 right-0 rotate-12 top-0 lg:w-1/5"
        />
        <img
          src="/images/bg-icons/whiteboard-light-bg.png"
          alt="background-icon"
          class="hidden opacity-25 lg:block lg:-rotate-12 lg:absolute lg:bottom-0 lg:left-0"
        />
        <h2 class="section-big-numbers md:absolute md:left-4 md:top-0">15.</h2>

        <div class="panel-content">
          <h3 class="font-bold mb-2 text-xl mt-4 xs:text-4xl">
            {{ $t("homeSectionSix.connect.title") }}
          </h3>
          <p class="leading-6 text-lg xs:text-2xl">
            {{ $t("homeSectionSix.connect.text") }}
          </p>
          <nav class="sns-links mt-4 md:mt-8" aria-label="Social links">
            <ul class="flex gap-4 text-4xl">
              <li>
                <a
                  href="YOUR_INSTAGRAM_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Icon name="mdi:instagram" />
                  <span class="sr-only">Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="YOUR_LINE_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LINE"
                >
                  <Icon name="simple-icons:line" />
                  <span class="sr-only">LINE</span>
                </a>
              </li>

              <li>
                <a
                  href="YOUR_YOUTUBE_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Icon name="mdi:youtube" />
                  <span class="sr-only">YouTube</span>
                </a>
              </li>
            </ul>
          </nav>
          <img
            src="/images/moko/moko-cellphone.png"
            alt=""
            class="xs:w-1/2 mx-auto"
          />
        </div>
      </section>

      <!-- Slide 2: Contact info -->
      <section
        class="panel green relative bg-niko-purple-soft place-content-center md:grid md:grid-cols-1 md:place-items-center"
      >
        <img
          src="/images/bg-icons/textbooks-bg.png"
          alt="background-icon"
          class="absolute opacity-25 w-40 right-0 rotate-12 top-0 lg:w-1/5"
        />
        <img
          src="/images/bg-icons/whiteboard-light-bg.png"
          alt="background-icon"
          class="hidden opacity-25 lg:block lg:-rotate-12 lg:absolute lg:bottom-0 lg:left-0"
        />
        <h2 class="section-big-numbers md:absolute md:left-4 md:top-0">16.</h2>

        <div class="panel-content">
          <h3 class="font-bold mb-2 text-xl mt-4 xs:text-4xl">
            {{ $t("homeSectionSix.contact.title") }}
          </h3>
          <p class="leading-6 text-lg xs:text-2xl md:leading-8">
            {{ $t("homeSectionSix.contact.description") }}
          </p>

          <ul class="space-y-2 mt-4 md:flex md:gap-2">
            <li class="xs:text-xl">
              <span class="font-bold">
                {{ $t("homeSectionSix.contact.email") }}</span
              >
              languagefriends@gmail.com
            </li>

            <li class="xs:text-xl">
              <span class="font-bold">
                {{ $t("homeSectionSix.contact.phone") }}</span
              >
              080-9533-4142
            </li>

            <li class="xs:text-xl">
              <span class="font-bold">
                {{ $t("homeSectionSix.contact.author") }}</span
              >
              Joe Lapalo
            </li>
          </ul>
          <img
            src="/images/niko/niko-cellphone.png"
            alt=""
            class="mx-auto xs:w-1/2 lg:w-1/4"
          />
        </div>
      </section>

      <!-- Slide 3: Final CTA -->
      <section
        class="panel bg-okja-yellow-soft relative place-content-center md:grid md:grid-cols-1 md:place-items-center"
      >
        <img
          src="/images/bg-icons/textbooks-bg.png"
          alt="background-icon"
          class="absolute opacity-25 w-40 right-0 rotate-12 top-0 lg:w-1/5"
        />
        <img
          src="/images/bg-icons/whiteboard-light-bg.png"
          alt="background-icon"
          class="hidden opacity-25 lg:block lg:-rotate-12 lg:absolute lg:bottom-0 lg:left-0"
        />
        <h2 class="section-big-numbers md:absolute md:left-4 md:top-0">17.</h2>

        <div class="panel-content">
          <h3 class="font-bold mb-4 text-xl mt-4 xs:text-4xl">
            Get Updates by Email
          </h3>

          <form
            aria-label="メール登録CTA"
            class="border col-span-3 border-dark-primary/50 border-dashed px-2 py-2 dark:border-light-primary/50"
          >
            <label for="email" class="sr-only">
              {{ $t("hero.emailPlaceholder") }}
            </label>

            <h3
              class="font-yomogi tracking-tight text-center text-lg font-bold mt-2 leading-5 md:leading-7 md:text-2xl"
            >
              {{ $t("hero.note") }}
            </h3>
            <div class="mt-4 md:flex md:w-1/2 md:mx-auto">
              <input
                id="email"
                type="email"
                name="email"
                :placeholder="$t('hero.emailPlaceholder')"
                autocomplete="email"
                required
                class="w-full py-2 bg-dark-primary/10 dark:bg-light-primary mb-2 px-2 h-10 placeholder:text--primary dark:placeholder:text-dark-primary"
              />

              <button
                type="submit"
                class="bg-green-signifier px-3 w-full text-dark-primary font-bold h-10 font-work md:w-1/2"
              >
                {{ $t("hero.subscribeButton") }}
              </button>
            </div>
          </form>
        </div>
        <img
          src="/images/okja/okja-please.png"
          alt=""
          class="xs:w-1/2 mx-auto lg:w-1/4"
        />
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
