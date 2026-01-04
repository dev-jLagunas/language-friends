<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".contact-section");

    sections.forEach((section, index) => {
      const textEl = section.querySelector(
        ".contact-text"
      ) as HTMLElement | null;
      const imageEl = section.querySelector(
        ".contact-image"
      ) as HTMLElement | null;

      if (!textEl || !imageEl) return;

      gsap.from(textEl, {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(imageEl, {
        x: index % 2 === 0 ? 50 : -50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, root.value as Element);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <section
    ref="root"
    class="mx-auto px-4 md:pt-24 pb-24 font-yomogi theme-toggle-styles space-y-8 md:space-y-0"
  >
    <!-- Contact Intro -->
    <section
      class="contact-section md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div
        class="contact-text bg-moko-blue-soft rounded-2xl py-6 px-4 place-content-center md:px-6 md:-rotate-3"
      >
        <div class="flex items-center justify-between">
          <h1 class="section-card-title section-title-underline">
            {{ $t("contact.title") }}
          </h1>
          <Icon name="mdi:email-outline" class="text-4xl" />
        </div>

        <p class="section-body-type">
          {{ $t("contact.intro") }}
        </p>
      </div>

      <img
        src="/images/everyone/cats-on-eachother.png"
        alt=""
        class="contact-image rounded-xl dashed-border w-full rotate-12 xs:w-3/4 xs:mx-auto"
      />
    </section>

    <!-- Email -->
    <section
      class="contact-section md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div
        class="contact-text bg-niko-purple-soft rounded-2xl py-6 px-4 place-content-center md:px-6 md:rotate-3 md:order-1"
      >
        <div class="flex items-center justify-between">
          <h2 class="section-card-title">
            {{ $t("contact.emailLabel") }}
          </h2>
          <Icon name="mdi:mailbox-open-outline" class="text-4xl" />
        </div>

        <p class="section-body-type mt-2 mb-4">
          {{ $t("contact.emailText") }}
        </p>

        <a
          href="mailto:hello@thelanguagefriends.com"
          class="section-body-type underline underline-offset-4"
        >
          hello@thelanguagefriends.com
        </a>
      </div>

      <img
        src="/images/everyone/cats-using-sns.png"
        alt=""
        class="contact-image rounded-xl dashed-border w-full -rotate-12 xs:w-3/4 xs:mx-auto"
      />
    </section>

    <!-- Social -->
    <section
      class="contact-section md:p-8 grid grid-cols-1 md:grid-cols-2 md:order-1 gap-12 items-center"
    >
      <div
        class="contact-text bg-okja-yellow-soft rounded-2xl py-6 px-4 place-content-center md:px-6 md:-rotate-3"
      >
        <div class="flex items-center justify-between">
          <h2 class="section-card-title">
            {{ $t("contact.socialLabel") }}
          </h2>
          <Icon name="mdi:account-group-outline" class="text-4xl" />
        </div>

        <p class="section-body-type mt-2 mb-4">
          {{ $t("contact.socialText") }}
        </p>

        <div class="flex gap-4">
          <a href="#" aria-label="Instagram">
            <Icon name="mdi:instagram" class="text-3xl" />
          </a>
          <a href="#" aria-label="YouTube">
            <Icon name="mdi:youtube" class="text-3xl" />
          </a>
        </div>
      </div>

      <img
        src="/images/everyone/cats-together-bike.png"
        alt=""
        class="contact-image rounded-xl dashed-border w-full rotate-12 xs:w-3/4 xs:mx-auto"
      />
    </section>

    <!-- Note -->
    <p class="text-sm opacity-70 text-center">
      {{ $t("contact.note") }}
    </p>
  </section>
</template>
