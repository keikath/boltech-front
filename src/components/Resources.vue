<script setup>
import { RouterLink } from 'vue-router';
import threatCatListing from './threatCatListing.vue';
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios'; 



const resources = ref([]);
//console.log(resources.value);


onMounted(async () => {
  try {
    const response = await axios.get('/api/resources');
    resources.value = response.data;
  } catch (error) {
    console.error('Error fetching resources', error);
  } 
})


/*const viewResource = (id) => {
  router.push({ name: 'ResourceView', params: { id } });
};

/*defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});*/

/*const state = reactive({
  threatCat: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/resource');
    state.threatCat = response.data;
  } catch (error) {
    console.error('Error fetching threatCat', error);
  } finally {
    state.isLoading = false;
  }
});*/
</script>

<template>
  <section class="bg-gradient-to-b from-blue-100 via-zinc-700 to-blue-50 mx-auto max-w-screen-lg px-10 py-10 rounded-md">
    <div class="container-xl lg:container mx-auto px-10" >
      <h2 class="text-3xl font-bold text-red-900 mb py-4 text-center">
        <span class="font-sans text-red-950">GUIDES:</span> Know Your Threats & Know Your Friendss ;)
      </h2>
      
      <!-- Show loading spinner while loading is true -->
      <!--div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div -->

      <!-- Shoe threatCat listing when done loading -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      <threatCatListing class="bg-yellow-300"
        v-for="resource in resources.slice(0, 1)"
          :key="resource.id" :resource="resource"/>
          <threatCatListing class="bg-indigo-300"
        v-for="resource in resources.slice(1, 2)"
          :key="resource.id" :resource="resource"/> 
      <threatCatListing class="bg-slate-200"
        v-for="resource in resources.slice(2, 3)"
          :key="resource.id" :resource="resource"/> 
      <threatCatListing class="bg-fuchsia-200"
        v-for="resource in resources.slice(3, 4)"
          :key="resource.id" :resource="resource"/> 
      <threatCatListing class="bg-teal-200"
        v-for="resource in resources.slice(4, 5)"
          :key="resource.id" :resource="resource"/> 
      <threatCatListing class="bg-indigo-100"
        v-for="resource in resources.slice(5)"
          :key="resource.id" :resource="resource"/>      
                 
          Explore Materials
           
        
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      :to="`/resources/rules-of-thumb`"
      class="block bg-gradient-to-b from-zinc-950 via-stone-700 to-slate-200  text-amber-300 text-center font-mono py-4 px-6 rounded-xl hover:opacity-90"
      >Here are some <br> <span class="text-red-800 font-bold ">GENERAL RULES OF THUMB</span> <br> To get started!</RouterLink
    >
  </section>
</template>
