<script setup>
import { defineProps } from 'vue';

defineProps({
  bg: {
    type: String,
    default: 'bg-yellow-100',
  },
  corners: {
    type: String,
    default: 'rounded-tr-full rounded-s-full',
  },
  border: {
    type: String,
    default: 'border-neutral-700',
  }  
});
</script>

<template>
  <div :class="`${bg} ${corners} ${border} p-6 shadow-md`" >
    <slot></slot>
  </div>
</template>
