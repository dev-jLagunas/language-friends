<script setup></script>

<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="mt-4 space-y-4"
  >
    <!-- Netlify required hidden input -->
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="redirect" value="/thanks" />

    <!-- Honeypot -->
    <p class="hidden">
      <label>
        Don’t fill this out if you’re human:
        <input name="bot-field" />
      </label>
    </p>

    <!-- Name -->
    <div>
      <label class="sr-only" for="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name | 名前"
        class="w-full rounded-lg px-4 py-2 text-base bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moko-blue"
      />
    </div>

    <!-- Message -->
    <div>
      <label class="sr-only" for="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        required
        placeholder="Message | メッセージ"
        class="w-full rounded-lg px-4 py-2 text-base bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-moko-blue"
      ></textarea>
    </div>

    <!-- Submit -->
    <button
      type="submit"
      class="inline-flex items-center justify-center rounded-lg bg-moko-blue px-6 py-2 text-white font-medium hover:bg-moko-blue/90 transition"
    >
      Send message
    </button>
  </form>
</template>
