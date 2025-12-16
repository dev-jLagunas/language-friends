<script setup lang="ts">
import { ref, computed } from "vue";

const colorMode = useColorMode();
const { locales, locale, setLocale } = useI18n();

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
const switchableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
);
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full z-100">
    <nav aria-label="モバイルフッターナビゲーション">
      <ul
        class="flex justify-evenly items-center border-t border-dark-primary/20 shadow-sm dark:border-light-primary/20 py-4 font-yomogi text-lg font-bold bg-light-primary dark:bg-dark-secondary dark:text-light-primary"
      >
        <li class="group">
          <NuxtLink
            :to="$localePath('/')"
            aria-label="ホーム"
            class="flex flex-col items-center justify-center"
            active-class="border-b border-dashed border-dark-primary dark:border-light-primary"
          >
            <Icon
              name="heroicons:home"
              class="text-3xl group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.nav.home") }}</span>
          </NuxtLink>
        </li>

        <li class="group">
          <NuxtLink
            :to="$localePath('/books-display')"
            aria-label="えほん"
            class="flex flex-col items-center justify-center"
            active-class="border-b border-dashed border-sunny-orange"
          >
            <Icon
              name="heroicons:book-open"
              class="text-3xl text-sunny-orange group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.nav.books") }}</span>
          </NuxtLink>
        </li>

        <li class="group">
          <NuxtLink
            :to="$localePath('/about-us')"
            aria-label="わたしたちについて"
            class="flex flex-col items-center justify-center"
            active-class="border-b border-dashed border-soft-pink"
          >
            <Icon
              name="ph:cat"
              class="text-3xl text-soft-pink group-hover:rotate-5 group-hover:scale-110 transition-transform"
            />
            <span>{{ $t("footer.nav.about") }}</span>
          </NuxtLink>
        </li>

        <li class="group">
          <button
            type="button"
            aria-label="メニューを開く"
            aria-controls="mobile-menu"
            @click="toggleMenu"
            class="flex flex-col items-center justify-center"
          >
            <Icon
              name="heroicons:bars-3"
              class="text-3xl group-hover:rotate-5 group-hover:scale-110 transition-transform hover:cursor-pointer"
            />
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
        class="bg-light-primary dark:bg-dark-secondary dark:text-light-primary"
      >
        <nav
          aria-label="フルメニュー"
          class="flex flex-col justify-center items-center h-full text-2xl font-yomogi"
        >
          <div class="flex flex-row items-center justify-center gap-4">
            <button
              v-for="l in switchableLocales"
              :key="l.code"
              type="button"
              @click="setLocale(l.code)"
              :aria-label="l.name"
              class="flex flex-row items-center hover:cursor-pointer"
            >
              <span>{{ l.name }}</span>
            </button>
            <label class="switch">
              <input
                checked="true"
                id="checkbox"
                type="checkbox"
                @click="toggleColorMode"
              />
              <span class="slider">
                <div class="star star_1"></div>
                <div class="star star_2"></div>
                <div class="star star_3"></div>
                <svg viewBox="0 0 16 16" class="cloud_1 cloud">
                  <path
                    transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                    fill="#fff"
                    d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <img
            src="/images/everyone/cats-together-bike.png"
            alt="Language Friends characters playing"
            class="h-40 mx-auto"
          />
          <h2 class="font-bold text-3xl px-4 text-center mb-4">
            {{ $t("footer.menu.title") }}
          </h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/new-customers"
                @click="closeMenu"
                class="flex items-center justify-center"
              >
                <Icon
                  name="heroicons:information-circle"
                  class="text-moko-blue mr-2"
                />
                <span
                  class="px-6 hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary transition-all duration-300 ease"
                  >{{ $t("footer.menu.start") }}</span
                >
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/character-info" @click="closeMenu">
                <Icon
                  name="heroicons:face-smile"
                  class="text-niko-purple mr-2"
                />
                <span
                  class="px-6 hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary transition-all duration-300 ease"
                  >{{ $t("footer.menu.characters") }}</span
                >
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/kids-corner" @click="closeMenu">
                <Icon
                  name="heroicons:puzzle-piece"
                  class="mr-2 text-okja-yellow"
                />
                <span
                  class="px-6 hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary transition-all duration-300 ease"
                  >{{ $t("footer.menu.kids") }}</span
                >
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/contact-us" @click="closeMenu">
                <Icon
                  name="heroicons:envelope"
                  class="mr-2 text-green-signifier"
                />
                <span
                  class="px-6 hover:bg-dark-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary transition-all duration-300 ease"
                  >{{ $t("footer.menu.contact") }}</span
                >
              </NuxtLink>
            </li>
            <li></li>
          </ul>
          <ul
            aria-label="ソーシャルリンク"
            class="grid grid-cols-4 gap-16 mt-8"
          >
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
          <button
            type="button"
            aria-label="Close menu"
            class="flex flex-col text-center items-center opacity-50 hover:cursor-pointer hover:opacity-100 transition-all duration-300 mt-8"
            @click="closeMenu"
          >
            <Icon name="heroicons:arrow-right" class="mr-2" />
            <span>{{ $t("ui.closeMenu") }}</span>
          </button>
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
  height: 90vh;
  z-index: 10;
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

/* From Uiverse.io by JustCode14 */
/* Theme Switch */
/* The switch - the box around the slider */
.switch {
  font-size: 10px;
  position: relative;
  display: inline-block;
  width: 4em;
  height: 2em;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2a2a2a;
  transition: 0.4s;
  border-radius: 30px;
  overflow: hidden;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.2em;
  width: 1.2em;
  border-radius: 20px;
  left: 0.5em;
  bottom: 0.5em;
  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.81, -0.04, 0.38, 1.5);
  box-shadow: inset 8px -4px 0px 0px #fff;
}

.switch input:checked + .slider {
  background-color: #0077ff;
}

.switch input:checked + .slider:before {
  transform: translateX(1.8em);
  box-shadow: inset 15px -4px 0px 15px #ffcf48;
}

.star {
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  width: 5px;
  transition: all 0.4s;
  height: 5px;
}

.star_1 {
  left: 2.5em;
  top: 0.5em;
}

.star_2 {
  left: 2.2em;
  top: 1.2em;
}

.star_3 {
  left: 3em;
  top: 0.9em;
}

.switch input:checked ~ .slider .star {
  opacity: 0;
}

.cloud {
  width: 3.5em;
  position: absolute;
  bottom: -1.4em;
  left: -1.1em;
  opacity: 0;
  transition: all 0.4s;
}

.switch input:checked ~ .slider .cloud {
  opacity: 1;
}
</style>
