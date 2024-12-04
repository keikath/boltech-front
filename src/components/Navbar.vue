<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.png';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-purple-500 shadow-lg " style= "background-color: #4D2342">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex mx-auto h-20 items-center justify-between">
        <div
          class="flex flex-1  items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue resources" />
            <span class="hidden md:block text-yellow-500 text-2xl font-bold ml-2"
              >FIRSST</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-yellow-100'
                    : 'hover:bg-zinc-950 hover:text-stone-300 ',
                  'text-black',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/resources"
                :class="[
                  isActiveLink('/resources')
                    ? 'bg-black' 
                    : 'hover:bg-zinc-900 hover:text-white',
                  'text-gray-100',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Resources</RouterLink
              >
              <RouterLink
                to="/test"
                :class="[
                  isActiveLink('/test')
                    ? 'bg-indigo-200'
                    : 'hover:bg-zinc-950 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Assessment Tool</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
