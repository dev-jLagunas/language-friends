<script setup lang="ts">
const canvaUrl =
  "https://www.canva.com/design/DAG_IPuznv8/c7TBufPaHKHtbjEx_h-z8A/view?utm_content=DAG_IPuznv8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdb5ebfa4c9";
</script>

<template>
  <section class="w-full font-yomogi max-w-7xl mx-auto page-paddings pb-32">
    <!-- Preview Intro -->
    <div class="">
      <h2 class="section-card-title text-center">
        {{ $t("books.freePreviewTitle") }}
      </h2>
      <p class="section-body-type mt-2 text-center w-full mx-auto">
        {{ $t("books.freePreviewDescription") }}
      </p>
    </div>

    <!-- Book Preview -->
    <div class="overflow-hidden">
      <iframe
        :src="canvaUrl"
        class="w-full h-[80vh] rounded-2xl md:w-3/4 md:h-[50vh] mx-auto"
        loading="lazy"
        allowfullscreen
      />
    </div>
    <!-- CTA -->
    <div class="mt-8 flex justify-center text-dark-primary font-black text-lg">
      <NuxtLink to="/books-display" class="green-cta">
        本の一覧を見る｜View All Books
      </NuxtLink>
    </div>
  </section>
</template>
