<script setup lang="ts">
import type MobileNavHeaderVue from "../mobile/MobileNavHeader.vue";

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? "light" : "dark";
};

const colorMode = useColorMode();
const { locales, setLocale, locale } = useI18n();

const switchableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
);

const isDark = computed(() => colorMode.value === "dark");
</script>

<template>
  <div>
    <MobileNavHeader class="desktop:hidden" />
    <nav
      aria-label="デスクトップナビゲーション"
      class="hidden font-yomogi desktop:flex"
    >
      <ul
        class="flex justify-around items-center border-b w-full border-dashed py-4"
      >
        <!-- 1. Home -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/')"
            :aria-label="$t('footer.nav.home')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-dark-primary dark:border-light-primary"
          >
            <Icon
              name="heroicons:home"
              class="group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.nav.home") }}</span>
          </NuxtLink>
        </li>

        <!-- 2. First time customers -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/new-customers')"
            :aria-label="$t('footer.menu.start')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-moko-blue"
          >
            <Icon
              name="heroicons:information-circle"
              class="text-moko-blue group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.menu.start") }}</span>
          </NuxtLink>
        </li>

        <!-- 3. About us -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/about-us')"
            :aria-label="$t('footer.nav.about')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-soft-pink"
          >
            <Icon
              name="ph:cat"
              class="text-soft-pink group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.nav.about") }}</span>
          </NuxtLink>
        </li>

        <!-- 5. Characters -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/character-info')"
            :aria-label="$t('footer.menu.characters')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-niko-purple"
          >
            <Icon
              name="heroicons:face-smile"
              class="text-niko-purple group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.menu.characters") }}</span>
          </NuxtLink>
        </li>

        <!-- 4. Logo / Brand -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/')"
            aria-label="The Language Friends"
            class="flex flex-col items-center"
          >
            <!-- <Icon name="heroicons:heart" /> -->
            <span class="font-bold">The Language Friends</span>
          </NuxtLink>
        </li>

        <!-- 6. Book series -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/books-display')"
            :aria-label="$t('footer.nav.books')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-sunny-orange"
          >
            <Icon
              name="heroicons:book-open"
              class="text-sunny-orange group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.nav.books") }}</span>
          </NuxtLink>
        </li>

        <!-- 7. Kids corner -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/kids-corner')"
            :aria-label="$t('footer.menu.kids')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-okja-yellow"
          >
            <Icon
              name="heroicons:puzzle-piece"
              class="text-okja-yellow group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.menu.kids") }}</span>
          </NuxtLink>
        </li>

        <!-- 8. Contact -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/contact-us')"
            :aria-label="$t('footer.menu.contact')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-green-signifier"
          >
            <Icon
              name="heroicons:envelope"
              class="text-green-signifier group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.menu.contact") }}</span>
          </NuxtLink>
        </li>

        <!-- 9. Language toggle -->
        <li class="group">
          <button
            v-for="l in switchableLocales"
            :key="l.code"
            type="button"
            @click="setLocale(l.code)"
            :aria-label="l.name"
            class="flex flex-col items-center hover:cursor-pointer"
          >
            <Icon
              name="heroicons:language"
              class="text-red-signifier group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ l.name }}</span>
          </button>
        </li>

        <!-- 10. Dark / Light toggle -->
        <li class="group">
          <button
            type="button"
            @click="toggleColorMode"
            aria-label="テーマ切り替え"
          >
            <Icon v-if="isDark" name="heroicons:moon" />
            <Icon v-else name="heroicons:sun" />
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
