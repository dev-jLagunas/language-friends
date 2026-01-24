<script setup lang="ts">
const canvaUrl =
  "https://www.canva.com/design/DAG_TrMRk1Q/T6yscgDeq-4aVPBjpgWAkw/view?utm_content=DAG_TrMRk1Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5a2c8089df";
</script>

<template>
  <section
    class="w-full font-yomogi max-w-7xl mx-auto px-4 h-screen place-content-center pb-52 md:page-paddings"
  >
    <!-- Preview Intro (always visible) -->

    <h2 class="section-card-title text-center">
      {{ $t("books.freePreviewTitle") }}
    </h2>

    <!-- Desktop Preview (iframe only on md+) -->
    <div class="hidden lg:block overflow-hidden">
      <p class="section-body-type mb-4 text-center w-full mx-auto">
        {{ $t("books.freePreviewDescription") }}
      </p>
      <iframe
        :src="canvaUrl"
        class="w-full h-[80vh] rounded-2xl md:w-3/4 md:h-[50vh] mx-auto"
        loading="lazy"
        allowfullscreen
      />
    </div>

    <!-- Mobile / Tablet Fallback -->
    <div class="block lg:hidden text-center mt-8">
      <a
        :href="canvaUrl"
        target="_blank"
        rel="noopener"
        class="green-cta inline-block mb-4 hover:rounded-tr-2xl hover:rounded-bl-2xl transition-all duration-200 ease-linear"
      >
        無料プレビューを開く
      </a>
      <p class="section-body-type md:px-16">
        {{ $t("books.previewInfo") }}
      </p>
      <Icon name="simple-icons:canva" class="text-8xl mt-8 text-moko-blue" />
    </div>
  </section>
</template>
