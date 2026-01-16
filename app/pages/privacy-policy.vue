<template>
  <section
    class="mx-auto px-4 md:pt-24 pb-24 font-yomogi theme-toggle-styles space-y-12 max-w-5xl"
  >
    <!-- Header -->
    <section class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 text-dark-primary">
      <div class="flex items-center justify-between">
        <h1 class="section-card-title section-title-underline">
          {{ $t("policy.title") }}
        </h1>
        <Icon name="mdi:shield-account-outline" class="text-4xl" />
      </div>

      <p class="section-body-type mt-2">
        {{ $t("policy.intro") }}
      </p>

      <p class="section-body-type mt-2 text-sm opacity-70">
        {{ $t("policy.lastUpdated") }}
      </p>
    </section>

    <!-- Sections -->
    <section class="space-y-8">
      <div class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 text-dark-primary">
        <h2 class="section-card-title">
          {{ $t("policy.informationCollected.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("policy.informationCollected.content") }}
        </p>
      </div>

      <div class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8 text-dark-primary">
        <h2 class="section-card-title">
          {{ $t("policy.howWeUse.title") }}
        </h2>
        <ul class="section-body-type mt-2 list-disc list-inside space-y-1">
          <li>{{ $t("policy.howWeUse.itemA") }}</li>
          <li>{{ $t("policy.howWeUse.itemB") }}</li>
          <li>{{ $t("policy.howWeUse.itemC") }}</li>
        </ul>
      </div>

      <div class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 text-dark-primary">
        <h2 class="section-card-title">
          {{ $t("policy.childrenPrivacy.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("policy.childrenPrivacy.content") }}
        </p>
      </div>

      <div class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 text-dark-primary">
        <h2 class="section-card-title">
          {{ $t("policy.dataProtection.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("policy.dataProtection.content") }}
        </p>
      </div>

      <div class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8 text-dark-primary">
        <h2 class="section-card-title">
          {{ $t("policy.thirdParties.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("policy.thirdParties.content") }}
        </p>
      </div>

      <div class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 text-dark-primary">
        <h2 class="section-card-title">
          {{ $t("policy.yourRights.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("policy.yourRights.content") }}
        </p>
      </div>

      <div class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 text-dark-primary">
        <h2 class="section-card-title">
          {{ $t("policy.contact.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("policy.contact.content") }}
        </p>
      </div>
    </section>
  </section>
</template>
