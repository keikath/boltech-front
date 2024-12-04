<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';
import background from '@/assets/img/background.png';
</script>

<template>
<div class="bg-gradient-to-r from-gray-200 via-purple-400 to-pink-200 ">
  <Navbar />
  <RouterView />
  <Footer />
</div>
</template>

