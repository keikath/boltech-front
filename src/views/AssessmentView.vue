<script setup>
import { RouterLink } from 'vue-router';
</script>

<template >
  <div class=" m-auto top-0 h-screen bg-cover bg-center bg-[url('@/assets/img/background.png')]">
    <button class="text-rose-700 font-semibold bg-indigo-200  py-2 px-2 rounded-xl m-auto max-w-lg mx-3 my-5 hover:bg-blue-400" >
      <RouterLink
      to = "/resources"> Back to Guides!
      </RouterLink>
    </button>
    <div> </div> 
  </div>
</template>