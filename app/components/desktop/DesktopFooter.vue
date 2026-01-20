<script setup lang="ts"></script>

<template>
  <footer
    class="hidden md:block font-yomogi relative border-t border-dark-primary/20 dark:border-light-primary/20 max-w-7xl mx-auto"
    aria-label="フッター"
  >
    <div class="mx-auto px-4 py-12 grid grid-cols-2">
      <!-- Brand -->
      <div>
        <h3 class="font-bold text-lg mb-2">The Language Friends</h3>
        <p class="text-sm opacity-80 leading-5 pr-4 lg:w-2/3">
          A gentle English picture book series designed for children growing up
          in Japan.
        </p>
        <div class="flex items-center gap-4 mt-2">
          <ThemeToggleBtn />
          <LangToggleBtn />
        </div>
      </div>
      <div class="grid grid-cols-3">
        <!-- Start Here -->
        <div>
          <h4 class="font-bold mb-3">{{ $t("ui.learnMore") }}</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink :to="$localePath('/about-us')" class="hover:underline">
                {{ $t("navigation.main.about") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="$localePath('/character-info')"
                class="hover:underline"
              >
                {{ $t("navigation.newVisitors.characters") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="">
                {{ $t("policy.title") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Books -->
        <div>
          <h4 class="font-bold mb-3">Books</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                :to="$localePath('/books-display')"
                class="hover:underline"
              >
                {{ $t("navigation.main.books") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="$localePath('/how-to-use')"
                class="hover:underline"
              >
                {{ $t("navigation.newVisitors.howTo") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact / Settings -->
        <div>
          <h4 class="font-bold mb-3">Connect</h4>
          <ul class="space-y-2 text-sm mb-4">
            <li>
              <NuxtLink
                :to="$localePath('/contact-us')"
                class="hover:underline"
              >
                {{ $t("navigation.newVisitors.contact") }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Bottom bar -->
    <div
      class="text-center text-xs py-4 opacity-70 absolute bottom-0 right-1/2"
    >
      <p><© {{ new Date().getFullYear() }} The Language Friends</p>
    </div>
  </footer>
</template>

<style scoped></style>
