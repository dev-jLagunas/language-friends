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

        <li class="group">
          <button
            type="button"
            aria-label="メニューを開く"
            aria-controls="mobile-menu"
            @click="toggleMenu"
            class="flex-col-center-center hover:cursor-pointer"
          >
            <Icon
              v-if="!isMenuOpen"
              name="heroicons:bars-3"
              class="text-4xl group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />

            <Icon
              v-else
              name="heroicons:x-mark"
              class="text-4xl text-red-500 group-hover:scale-110 transition-transform"
            />
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
        class="theme-toggle-styles font-yomogi border-r shadow-sm border-dark-primary dark:border-light-primary"
      >
        <nav
          aria-label="フルメニュー"
          class="flex-col-center-center h-full relative"
        >
          <div class="flex-row-center-center gap-4 absolute top-10">
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
                <span>{{ $t("navigation.newVisitors.label") }}</span>
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
                      class="mr-2 text-soft-pink"
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
                      name="heroicons:book-open"
                      class="mr-2 text-okja-yellow"
                    />
                    <span>{{ $t("navigation.newVisitors.howTo") }}</span>
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
            class="flex-col-center-center opacity-75 hover:cursor-pointer hover:opacity-100 transition-all duration-300 absolute bottom-10"
            @click="toggleMenu"
          >
            <Icon name="heroicons:arrow-right" class="" />
            <span>{{ $t("ui.closeMenu") }}</span>
          </button>
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
  width: 80vw;
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
</style>
