<template>
  <div
    class="min-h-screen flex flex-col bg-light-primary dark:bg-dark-secondary text-dark-primary dark:text-light-primary"
  >
    <header>
      <TheNavbar />
    </header>

    <main class="flex-1 mt-4">
      <NuxtPage />
    </main>

    <footer>
      <MobileFooter class="desktop:hidden" />
    </footer>
  </div>
</template>
