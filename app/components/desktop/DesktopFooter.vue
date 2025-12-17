<script setup lang="ts">
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
  <footer
    aria-label="デスクトップフッター"
    class="hidden desktop:flex flex-col border-t border-t-dark-primary/20 dark:border-t-light-primary/20 mt-24 font-yomogi"
  >
    <!-- Main footer nav -->
    <ul class="flex justify-around items-start py-10 w-full">
      <!-- Home -->
      <li class="group">
        <NuxtLink :to="$localePath('/')" class="flex flex-col items-center">
          <Icon name="heroicons:home" />
          <span>{{ $t("footer.nav.home") }}</span>
        </NuxtLink>
      </li>

      <!-- First time -->
      <li class="group">
        <NuxtLink
          :to="$localePath('/new-customers')"
          class="flex flex-col items-center"
        >
          <Icon name="heroicons:information-circle" class="text-moko-blue" />
          <span>{{ $t("footer.menu.start") }}</span>
        </NuxtLink>
      </li>

      <!-- About -->
      <li class="group">
        <NuxtLink
          :to="$localePath('/about-us')"
          class="flex flex-col items-center"
        >
          <Icon name="ph:cat" class="text-soft-pink" />
          <span>{{ $t("footer.nav.about") }}</span>
        </NuxtLink>
      </li>

      <!-- Brand -->
      <li class="group">
        <NuxtLink
          :to="$localePath('/')"
          class="flex flex-col items-center font-bold"
        >
          The Language Friends
        </NuxtLink>
      </li>

      <!-- Characters -->
      <li class="group">
        <NuxtLink
          :to="$localePath('/character-info')"
          class="flex flex-col items-center"
        >
          <Icon name="heroicons:face-smile" class="text-niko-purple" />
          <span>{{ $t("footer.menu.characters") }}</span>
        </NuxtLink>
      </li>

      <!-- Books -->
      <li class="group">
        <NuxtLink
          :to="$localePath('/books-display')"
          class="flex flex-col items-center"
        >
          <Icon name="heroicons:book-open" class="text-sunny-orange" />
          <span>{{ $t("footer.nav.books") }}</span>
        </NuxtLink>
      </li>

      <!-- Kids -->
      <li class="group">
        <NuxtLink
          :to="$localePath('/kids-corner')"
          class="flex flex-col items-center"
        >
          <Icon name="heroicons:puzzle-piece" class="text-okja-yellow" />
          <span>{{ $t("footer.menu.kids") }}</span>
        </NuxtLink>
      </li>

      <!-- Contact -->
      <li class="group">
        <NuxtLink
          :to="$localePath('/contact-us')"
          class="flex flex-col items-center"
        >
          <Icon name="heroicons:envelope" class="text-green-signifier" />
          <span>{{ $t("footer.menu.contact") }}</span>
        </NuxtLink>
      </li>
    </ul>

    <!-- Controls + meta -->
    <div class="flex justify-center items-center gap-10 pb-8">
      <!-- Language -->
      <div class="flex gap-4">
        <button
          v-for="l in switchableLocales"
          :key="l.code"
          @click="setLocale(l.code)"
        >
          {{ l.name }}
        </button>
      </div>

      <!-- Theme toggle -->
      <label class="switch">
        <input type="checkbox" @click="toggleColorMode" />
        <span class="slider">
          <div class="star star_1"></div>
          <div class="star star_2"></div>
          <div class="star star_3"></div>
          <svg viewBox="0 0 16 16" class="cloud_1 cloud">
            <path
              transform="matrix(.77976 0 0 .78395-299.99-418.63)"
              fill="#fff"
              d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            />
          </svg>
        </span>
      </label>
    </div>

    <!-- Legal -->
    <div class="text-center text-xs opacity-60 pb-4">
      © {{ new Date().getFullYear() }} The Language Friends. All rights
      reserved.
    </div>
  </footer>
</template>

<style scoped>
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
