<script setup lang="ts">
import { ref } from "vue";

const isStartOpen = ref(false);

const toggleStart = () => {
  isStartOpen.value = !isStartOpen.value;
};

const closeStart = () => {
  isStartOpen.value = false;
};
</script>

<template>
  <div>
    <MobileNavHeader />
    <nav
      aria-label="デスクトップナビゲーション"
      class="hidden md:block navbar-wrapper"
    >
      <ul class="the-navbar">
        <!-- 1. Home -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/')"
            :aria-label="$t('footer.nav.home')"
            class="flex-col-center-center"
            active-class="border-b border-dashed"
          >
            <Icon name="heroicons:home" class="text-2xl group-hover-rotate" />
            <span class="hover:font-bold lg:text-lg">
              {{ $t("navigation.main.home") }}
            </span>
          </NuxtLink>
        </li>

        <!-- Start Here (click dropdown) -->
        <li class="relative">
          <button
            type="button"
            @click="toggleStart"
            @mouseenter="isStartOpen = true"
            @mouseleave="isStartOpen = false"
            class="flex-col-center-center group focus:outline-none"
            aria-haspopup="true"
            :aria-expanded="isStartOpen"
          >
            <Icon
              name="heroicons:information-circle"
              class="text-moko-blue text-2xl group-hover-rotate"
            />

            <div class="flex items-center gap-1">
              <span class="hover:font-bold lg:text-lg">
                {{ $t("navigation.newVisitors.label") }}
              </span>

              <!-- Caret -->
              <Icon
                name="heroicons:chevron-down"
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': isStartOpen }"
              />
            </div>
          </button>

          <!-- Dropdown -->
          <ul
            v-show="isStartOpen"
            @mouseenter="isStartOpen = true"
            @mouseleave="isStartOpen = false"
            class="absolute top-full pt-3 w-48 bg-white dark:bg-dark-primary shadow-lg rounded-sm z-50"
          >
            <li>
              <NuxtLink
                :to="$localePath({ path: '/', hash: '#landingStory' })"
                @click="closeStart"
                class="block px-4 py-2 hover:bg-moko-blue/10"
              >
                {{ $t("navigation.newVisitors.tour") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                :to="$localePath('/about-us')"
                @click="closeStart"
                class="block px-4 py-2 hover:bg-niko-purple/10"
              >
                {{ $t("navigation.main.about") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                :to="$localePath('/character-info')"
                @click="closeStart"
                class="block px-4 py-2 hover:bg-okja-yellow/10"
              >
                {{ $t("navigation.newVisitors.characters") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="$localePath('/how-to-use')"
                @click="closeStart"
                class="block px-4 py-2 hover:bg-okja-yellow/10"
              >
                {{ $t("navigation.newVisitors.howTo") }}
              </NuxtLink>
              <li>
              <NuxtLink
                :to="$localePath('/book-preview')"
                @click="closeStart"
                class="block px-4 py-2 hover:bg-moko-blue/10"
              >
                {{ $t("navigation.newVisitors.bookPreview") }}
              </NuxtLink>
            </li>
            </li>
          </ul>
        </li>

        <!-- 3. Books -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/books-display')"
            :aria-label="$t('footer.nav.books')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-sunny-orange"
          >
            <Icon
              name="heroicons:book-open"
              class="text-sunny-orange text-2xl group-hover-rotate"
            />
            <span class="hover:font-bold lg:text-lg">
              {{ $t("navigation.main.books") }}
            </span>
          </NuxtLink>
        </li>

        <!-- 4. Kids Corner -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/kids-corner')"
            :aria-label="$t('footer.menu.kids')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-okja-yellow"
          >
            <Icon
              name="heroicons:puzzle-piece"
              class="text-okja-yellow text-2xl group-hover-rotate"
            />
            <span class="hover:font-bold lg:text-lg">
              {{ $t("navigation.newVisitors.kids") }}
            </span>
          </NuxtLink>
        </li>

        <!-- 5. Contact -->
        <li class="group">
          <NuxtLink
            :to="$localePath('/contact-us')"
            :aria-label="$t('footer.menu.contact')"
            class="flex flex-col items-center"
            active-class="border-b border-dashed border-green-signifier"
          >
            <Icon
              name="heroicons:envelope"
              class="text-green-signifier text-2xl group-hover-rotate"
            />
            <span class="hover:font-bold lg:text-lg">
              {{ $t("navigation.newVisitors.contact") }}
            </span>
          </NuxtLink>
        </li>
        <li class="flex-col-center-center gap-2 lg:flex-row">
          <LangToggleBtn /><ThemeToggleBtn />
        </li>
        <li>
          <ul class="flex-col-center-center gap-2 lg:flex-row">
            <li>
              <a
                href="https://www.instagram.com/thelanguagefriends?igsh=MXM4c2NzcDRidHg3ag%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm hover:underline"
              >
                <Icon name="mdi:instagram" class="w-7 h-7" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/channel/UC4II6bDJtBYCo1wPdUX_y1A"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm hover:underline"
              >
                <Icon name="mdi:youtube" class="w-7 h-7" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
