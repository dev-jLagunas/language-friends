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
        ".contact-text",
      ) as HTMLElement | null;
      const imageEl = section.querySelector(
        ".contact-image",
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
  <main
    ref="root"
    class="mx-auto pb-16 page-paddings px-4 font-yomogi theme-toggle-styles relative overflow-hidden max-w-7xl"
  >
    <ProgressIndicator :total="3" />
    <!-- Contact Intro -->
    <article data-step="1" class="contact-section md:p-8 contact-card-wrapper">
      <section class="contact-text bg-moko-blue-soft contact-text-wrapper">
        <header class="flex-row-between-center">
          <p
            class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-4"
          >
            1.
          </p>
          <h1 class="section-card-title section-title-underline">
            {{ $t("contact.title") }}
          </h1>
          <Icon name="mdi:email-outline" class="text-4xl opacity-80" />
        </header>

        <p class="section-body-type">
          {{ $t("contact.intro") }}
        </p>
        <ContactForm />
      </section>
      <img
        src="/images/everyone/cats-on-eachother.webp"
        alt=""
        class="contact-image rounded-2xl dashed-border w-full"
      />
    </article>

    <!-- Email -->
    <article data-step="2" class="contact-section md:p-8 contact-card-wrapper">
      <section
        class="contact-text bg-niko-purple-soft contact-text-wrapper md:order-1"
      >
        <header class="flex-row-between-center">
          <p
            class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-4"
          >
            2.
          </p>
          <h2 class="section-card-title">
            {{ $t("contact.emailLabel") }}
          </h2>
          <Icon name="mdi:mailbox-open-outline" class="text-4xl opacity-80" />
        </header>

        <p class="section-body-type mt-2 mb-4">
          {{ $t("contact.emailText") }}
        </p>

        <a
          href="mailto:thelanguagefriends@gmail.com"
          class="section-body-type underline underline-offset-4"
        >
          thelanguagefriends@gmail.com
        </a>
      </section>

      <img
        src="/images/everyone/cats-using-sns.webp"
        alt=""
        class="contact-image rounded-2xl dashed-border w-full"
      />
    </article>

    <!-- Social -->
    <article data-step="3" class="contact-section md:p-8 contact-card-wrapper">
      <section class="contact-text bg-okja-yellow-soft contact-text-wrapper">
        <header class="flex-row-between-center">
          <p
            class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-4"
          >
            3.
          </p>
          <h2 class="section-card-title">
            {{ $t("contact.socialLabel") }}
          </h2>
          <Icon name="mdi:account-group-outline" class="text-4xl opacity-80" />
        </header>
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
      </section>
      <img
        src="/images/everyone/cats-together-bike.webp"
        alt=""
        class="contact-image rounded-2xl dashed-border w-full"
      />
    </article>

    <!-- Note -->
    <p class="text-center text-2xl">
      {{ $t("contact.note") }}
    </p>
  </main>
</template>
