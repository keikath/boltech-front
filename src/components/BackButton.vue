<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/resources"
        class="text-rose-900 hover:text-rose-950 font-mono font-semibold   flex items-center"
      >
        <i class="pi pi-arrow-circle-left mr-3"></i> Back to Guides
      </RouterLink>
    </div>
  </section>
</template>
