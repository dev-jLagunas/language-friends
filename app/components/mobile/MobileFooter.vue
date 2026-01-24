<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full z-100">
    <nav aria-label="モバイルフッターナビゲーション" class="relative">
      <ul
        class="flex-row-evenly-center theme-toggle-styles py-4 font-yomogi font-bold border-t border-dark-primary/20 dark:border-light-primary/20"
      >
        <li class="group">
          <NuxtLink
            :to="$localePath('/')"
            aria-label="ホーム"
            class="flex-col-center-center"
            active-class="border-b border-dashed border-dark-primary dark:border-light-primary"
          >
            <Icon name="heroicons:home" class="text-3xl group-hover-rotate" />
            <span>{{ $t("navigation.main.home") }}</span>
          </NuxtLink>
        </li>

        <li class="group">
          <NuxtLink
            :to="$localePath('/books-display')"
            aria-label="えほん"
            class="flex-col-center-center"
            active-class="border-b border-dashed border-sunny-orange"
          >
            <Icon
              name="heroicons:book-open"
              class="text-3xl text-sunny-orange group-hover-rotate"
            />
            <span>{{ $t("navigation.main.books") }}</span>
          </NuxtLink>
        </li>

        <li class="group">
          <NuxtLink
            :to="$localePath('/contact-us')"
            class="flex-col-center-center"
            active-class="border-b border-dashed border-soft-pink"
          >
            <Icon
              name="heroicons:envelope"
              class="text-3xl text-green-signifier group-hover-rotate"
            />
            <span>{{ $t("navigation.newVisitors.contact") }}</span>
          </NuxtLink>
        </li>

        <li>
          <button
            type="button"
            aria-label="メニューを開く"
            @click="toggleMenu"
            class="burger"
            :class="isMenuOpen ? 'text-red-signifier' : 'text-dark-primary'"
            :aria-expanded="isMenuOpen"
          >
            <span :class="{ open: isMenuOpen }"></span>
            <span :class="{ open: isMenuOpen }"></span>
            <span :class="{ open: isMenuOpen }"></span>
          </button>
        </li>
      </ul>
    </nav>

    <!-- OPEN SIDE MENU STYLES -->
    <transition name="slide-down">
      <aside
        v-if="isMenuOpen"
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        class="font-yomogi theme-toggle-styles border-r shadow-sm border-dark-primary/50 dark:border-light-primary/50"
      >
        <nav
          aria-label="フルメニュー"
          class="flex-col-center-center h-full relative"
        >
          <NuxtLink
            @click="toggleMenu"
            to="/privacy-policy"
            class="text-sm absolute top-8"
          >
            {{ $t("policy.title") }}
          </NuxtLink>

          <div class="flex-row-center-center gap-4 absolute top-60">
            <LangToggleBtn />
            <ThemeToggleBtn />
          </div>

          <ul class="space-y-3 text-2xl">
            <!-- NEW VISITORS (PARENT) -->
            <li class="group">
              <div class="flex items-center opacity-90">
                <Icon
                  name="heroicons:sparkles"
                  class="mr-2 text-sunny-orange group-hover-rotate"
                />
                <span class="font-bold">{{
                  $t("navigation.newVisitors.label")
                }}</span>
              </div>

              <!-- NESTED LINKS -->
              <ul class="mt-2 ml-6 space-y-2 text-xl">
                <li>
                  <NuxtLink
                    :to="$localePath({ path: '/', hash: '#landingStory' })"
                    @click="toggleMenu"
                    class="flex items-center px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <Icon name="heroicons:map" class="mr-2 text-moko-blue" />
                    <span>{{ $t("navigation.newVisitors.tour") }}</span>
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    :to="$localePath('/about-us')"
                    @click="toggleMenu"
                    class="flex items-center px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <Icon
                      name="heroicons:information-circle"
                      class="mr-2 text-red-signifier"
                    />
                    <span>{{ $t("navigation.main.about") }}</span>
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    :to="$localePath('/character-info')"
                    @click="toggleMenu"
                    class="flex items-center px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <Icon
                      name="heroicons:face-smile"
                      class="mr-2 text-niko-purple"
                    />
                    <span>{{ $t("navigation.newVisitors.characters") }}</span>
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    :to="$localePath('/how-to-use')"
                    @click="toggleMenu"
                    class="flex items-center px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <Icon
                      name="heroicons:information-circle"
                      class="mr-2 text-okja-yellow"
                    />
                    <span>{{ $t("navigation.newVisitors.howTo") }}</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="$localePath('/book-preview')"
                    @click="toggleMenu"
                    class="flex items-center px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <Icon
                      name="heroicons:book-open"
                      class="mr-2 text-green-signifier"
                    />
                    <span>{{ $t("navigation.newVisitors.bookPreview") }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </li>

            <!-- EXISTING ITEMS (UNCHANGED) -->
            <li>
              <NuxtLink
                to="/kids-corner"
                @click="toggleMenu"
                class="flex items-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <Icon
                  name="heroicons:puzzle-piece"
                  class="mr-2 text-okja-yellow"
                />
                <span>{{ $t("navigation.newVisitors.kids") }}</span>
              </NuxtLink>
            </li>
          </ul>

          <ul
            aria-label="ソーシャルリンク"
            class="grid grid-cols-4 gap-4 text-3xl mt-4 md:text-4xl"
          >
            <li class="group">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon name="simple-icons:instagram group-hover-rotate" />
              </a>
            </li>

            <li class="group">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Icon name="simple-icons:youtube group-hover-rotate" />
              </a>
            </li>

            <li class="group">
              <a
                href="https://www.amazon.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amazon"
              >
                <Icon name="simple-icons:amazon group-hover-rotate" />
              </a>
            </li>

            <li class="group">
              <a
                href="https://www.kobo.com/jp/ja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kobo"
              >
                <Icon name="simple-icons:rakutenkobo group-hover-rotate" />
              </a>
            </li>
          </ul>
          <button
            type="button"
            aria-label="Close menu"
            class="absolute bottom-24 opacity-75 hover:opacity-100 transition-all duration-300 hover:cursor-pointer"
            @click="toggleMenu"
          >
            <Icon name="heroicons:x-mark" class="text-red-signifier text-5xl" />
          </button>
          <ul class="flex flex-row gap-4">
            <li>
              <a
                href="https://www.instagram.com/thelanguagefriends?igsh=MXM4c2NzcDRidHg3ag%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm hover:underline"
              >
                <Icon name="mdi:instagram " class="w-7 h-7" />
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
        </nav>
      </aside>
    </transition>
  </footer>
</template>

<style scoped>
#mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 78vw;
  height: 100vh;
  z-index: 10;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.55s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateX(-100%);
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateX(0);
}

.burger {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
}

.burger span {
  position: absolute;
  height: 4px;
  width: 100%;
  background: currentColor;
  border-radius: 9px;
  left: 0;
  transition: 0.25s ease-in-out;
}

.burger span:nth-child(1) {
  top: 0;
  transform-origin: left center;
}

.burger span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-child(3) {
  bottom: 0;
  transform-origin: left center;
}

/* OPEN STATE */
.burger span.open:nth-child(1) {
  transform: rotate(45deg);
  top: 0;
  left: 5px;
}

.burger span.open:nth-child(2) {
  width: 0;
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 0;
  left: 5px;
}
</style>
