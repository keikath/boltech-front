<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Protect your Assets & Secure your Future...',
  },
  subtitle: {
    type: String,
    default: 'Welcome to your friendly neighbourhood guiding-hand on all matters cybersecurity! Stay one step ahead of cyber threats. Our APP offers comprehensive cybersecurity solutions tailored to keep your data and systems safe, from educative guides to assessment tests and even fun reality-based games to help you learn how to best respond if under attack. Get started now on making smart choices for your organization!  ',
  },
});
</script>

<template>
  <section class="bg-gradient-to-r from-stone-900 via-teal-400 to-yellow-300  py-16  mb-8 mt-16 mx-20 rounded-full rounded-es-2xl rounded-ss-3xl   ">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <h1 class="text-xl font-extrabold text-stone-900 sm:text-3xl md:text-4xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-yellow-100">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
