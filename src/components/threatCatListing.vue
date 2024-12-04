<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  resource: Object,
});

/*const showFullDescription = ref(false);

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  let description = props.resource.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});*/
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ resource.type }}</div>
        <h3 class="text-xl font-bold">{{ resource.title }}</h3>
      </div>

      <div class="mb-5">
        <ul>
          <li>{{ resource.description }}</li> <br> <!--JASON are you there-->
        </ul>
        <!--button
          @click="toggleFullDescription"
          class="text-green-500 hover:text-green-600 mb-5"
        >
          {{ showFullDescription ? 'Less' : 'More' }}
        </button-->
      </div>

      <!--h3 class="text-green-500 mb-2">{{ resource.salary }} / Year</h3-->

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <!--div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ resource.location }}
        </div-->
        <RouterLink
          :to="'/resources/' + resource.id"
          class="h-[36px] bg-indigo-300 hover:bg-purple-200 text-black border-neutral-700 border-2 px-4 py-2 rounded-lg text-center font-mono text-sm relative "
        >
          Take a look!
        </RouterLink>
      </div>
    </div>
  </div>
</template>
