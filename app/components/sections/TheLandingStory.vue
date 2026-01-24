<script setup lang="ts">
const canvaUrl =
  "https://www.canva.com/design/DAG_IPuznv8/c7TBufPaHKHtbjEx_h-z8A/view?utm_content=DAG_IPuznv8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdb5ebfa4c9";
</script>

<template>
  <main class="relative">
    <HomeSectionOne />
    <HomeSectionTwo />
    <HomeSectionThree />
    <HomeSectionFour />
    <HomeSectionFive />
    <section class="w-full max-w-7xl mx-auto px-4 mb-16 md:mb-20">
      <!-- Preview Intro -->
      <div class="mb-4">
        <h2 class="section-card-title section-title-underline">
          無料プレビュー｜Free Book Preview
        </h2>
        <p class="mt-1 section-body-type">
          このページでは、本書の内容を最初から最後まで自由にご覧いただけます。
          親子で一緒に読みながら、英語に触れてみてください。
        </p>
      </div>

      <!-- Book Preview -->
      <div class="w-full mx-auto max-w-xl overflow-hidden">
        <iframe
          :src="canvaUrl"
          class="w-full h-[60vh] md:w-1/2 md:h-[50vh] mx-auto rounded-2xl"
          loading="lazy"
          allowfullscreen
        />
      </div>
    </section>
    <HomeSectionFinal />
  </main>
</template>

<style scoped></style>
