<template>
  <div
    class="min-h-screen flex flex-col dark:bg-dark-secondary dark:text-light-primary"
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
