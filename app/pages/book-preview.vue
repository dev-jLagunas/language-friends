<script setup lang="ts">
const canvaUrl =
  "https://www.canva.com/design/DAG_TrMRk1Q/T6yscgDeq-4aVPBjpgWAkw/view?utm_content=DAG_TrMRk1Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5a2c8089df";
</script>

<template>
  <section
    class="w-full font-yomogi max-w-7xl mx-auto px-4 h-screen pb-52 place-content-center md:page-paddings"
  >
    <!-- Preview Intro (always visible) -->
    <div>
      <h2 class="section-card-title text-center">
        {{ $t("books.freePreviewTitle") }}
      </h2>
      <p class="section-body-type mt-2 text-center w-full mx-auto">
        {{ $t("books.freePreviewDescription") }}
      </p>
    </div>

    <!-- Desktop Preview (iframe only on md+) -->
    <div class="hidden md:block overflow-hidden">
      <iframe
        :src="canvaUrl"
        class="w-full h-[80vh] rounded-2xl md:w-3/4 md:h-[50vh] mx-auto"
        loading="lazy"
        allowfullscreen
      />
    </div>

    <!-- Mobile / Tablet Fallback -->
    <div class="block md:hidden text-center mt-8">
      <p class="section-body-type">
        {{ $t("books.previewInfo") }}
      </p>

      <a
        :href="canvaUrl"
        target="_blank"
        rel="noopener"
        class="green-cta inline-block mt-4"
      >
        無料プレビューを開く
      </a>
    </div>
  </section>
</template>
