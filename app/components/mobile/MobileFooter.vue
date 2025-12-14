<script setup lang="ts">
import { ref, computed } from "vue";

const colorMode = useColorMode();
const { locales, setLocale } = useI18n();

const isDark = computed(() => colorMode.value === "dark");

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? "light" : "dark";
};
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <footer>
    <nav aria-label="モバイルフッターナビゲーション">
      <ul
        class="flex justify-evenly items-center border-t border-dashed py-3 font-yomogi text-base bg-light-primary dark:bg-dark-secondary dark:text-light-primary"
      >
        <li>
          <NuxtLink
            to="/"
            aria-label="ホーム"
            class="flex flex-col items-center justify-center"
          >
            <Icon name="heroicons:home" class="text-2xl" />
            <span>{{ $t("footer.nav.home") }}</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/books-display"
            aria-label="えほん"
            class="flex flex-col items-center justify-center"
          >
            <Icon name="heroicons:book-open" class="text-2xl" />
            <span>{{ $t("footer.nav.books") }}</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/about-us"
            aria-label="わたしたちについて"
            class="flex flex-col items-center justify-center"
          >
            <Icon name="ph:cat" class="text-2xl" />
            <span>{{ $t("footer.nav.about") }}</span>
          </NuxtLink>
        </li>

        <li>
          <button
            type="button"
            aria-label="メニューを開く"
            aria-controls="mobile-menu"
            @click="toggleMenu"
            class="flex flex-col items-center justify-center"
          >
            <Icon name="heroicons:bars-3" class="text-2xl" />
            <span>{{ $t("footer.nav.menu") }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <transition name="slide-down">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        class="bg-light-primary border-b border-l border-t border-dashed dark:bg-dark-secondary dark:text-light-primary"
      >
        <nav
          aria-label="フルメニュー"
          class="flex flex-col justify-center items-center h-full text-2xl font-yomogi"
        >
          <button
            type="button"
            @click="toggleColorMode"
            aria-label="テーマ切り替え"
          >
            <Icon v-if="isDark" name="heroicons:moon" />
            <Icon v-else name="heroicons:sun" />
          </button>

          <img
            src="/images/everyone/cats-on-eachother.png"
            alt="Language Friends characters playing"
            class="h-40 mx-auto"
          />
          <h2 class="font-bold text-2xl mb-8">The Language Friends</h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/new-customers" @click="closeMenu">
                <Icon
                  name="heroicons:information-circle"
                  class="text-moko-blue mr-2"
                />
                <span>{{ $t("footer.menu.start") }}</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/character-info" @click="closeMenu">
                <Icon
                  name="heroicons:face-smile"
                  class="text-niko-purple mr-2"
                />
                <span>{{ $t("footer.menu.characters") }}</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/kids-corner" @click="closeMenu">
                <Icon
                  name="heroicons:puzzle-piece"
                  class="mr-2 text-okja-yellow"
                />
                <span>{{ $t("footer.menu.kids") }}</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/contact-us" @click="closeMenu">
                <Icon
                  name="heroicons:envelope"
                  class="mr-2 text-green-signifier"
                />
                <span>{{ $t("footer.menu.contact") }}</span>
              </NuxtLink>
            </li>

            <button
              v-for="l in locales"
              :key="l.code"
              @click="setLocale(l.code)"
              class="mr-4"
            >
              <span
                ><Icon
                  name="heroicons:language"
                  class="mr-2 text-red-signifier" /></span
              >{{ l.name }}
            </button>
          </ul>
          <ul aria-label="ソーシャルリンク" class="grid grid-cols-4 gap-4 mt-4">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon name="simple-icons:instagram" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Icon name="simple-icons:youtube" />
              </a>
            </li>

            <li>
              <a
                href="https://www.amazon.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amazon"
              >
                <Icon name="simple-icons:amazon" />
              </a>
            </li>

            <li>
              <a
                href="https://www.kobo.com/jp/ja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kobo"
              >
                <Icon name="simple-icons:rakutenkobo" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </footer>
</template>

<style scoped>
#mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88vh;
  z-index: 50;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.55s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateX(100%);
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateX(0);
}
</style>
