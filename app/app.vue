<template>
  <div
    class="min-h-screen flex flex-col bg-light-primary dark:bg-dark-secondary text-dark-primary dark:text-light-primary lg:px-16"
  >
    <header>
      <TheNavbar />
    </header>

    <main class="flex-1 mt-4 bg-light-primary dark:bg-dark-secondary">
      <NuxtPage />
    </main>

    <footer>
      <MobileFooter class="desktop:hidden" />
    </footer>
  </div>
</template>
