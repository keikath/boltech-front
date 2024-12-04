<script setup>
  import BackButton from '@/components/BackButton.vue';
  import { ref, onMounted } from "vue";
  import { useRoute, RouterLink } from "vue-router";
  import axios from "axios";

  const route = useRoute();
  const resource = ref(null);
  const guides = ref([]);
  const openDropdown = ref(null);

  const fetchResource = async () => {
    const { data } = await axios.get(`/api/resources/${route.params.id}`);
    resource.value = data;
  };

  const fetchGuides = async () => {
    const { data } = await axios.get("/api/guideData");
    guides.value = data.filter((guide) => guide.resourceId === parseInt(route.params.id));
  };

  const toggleDropdown = (id) => {
    openDropdown.value = openDropdown.value === id ? null : id;
  };

  onMounted(() => {
    fetchResource();
    fetchGuides();
  });
</script>


<template>
  <BackButton />
  <section class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
           <div>
              <!--button @click="$router.back()">Back</button-->
              <h1 class="text-3xl font-bold mb-4">{{ resource?.title }}</h1>
              
              <div v-for="guide in guides" :key="guide.id" class="dropdown">

                <button @click="toggleDropdown(guide.id)" class="dropdown-button">
                  {{ guide.type }} 
                  <span :class="['arrow', { rotated: openDropdown === type }]">▼</span>
                </button>

                <div v-if="openDropdown === guide.id" class="dropdown-menu">
                  <p> <strong>Description:</strong> {{ guide.description }}</p>
                </div>

                <!--div v-else>
                  <p class="text-red-500">Resource not found!</p>
                </div-->


              </div>
            </div>
          </div> 

        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">

            <hr class="my-4" />

          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Access resource</h3>
            <!--RouterLink
              :to="`/test/${resource.value.id}`"
              class="bg-yellow-300 hover:bg-yellow-400 text-stone text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Short Quiz</RouterLink
          -->
            <!--@click="follow/loadlink"-->
            <button
              class="bg-pink-800 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Links)
            </button>
          </div>
        </aside>

      </div>
    </div>
  </section>          
</template>






<style scoped>
.dropdown {
  position: relative;
  margin-bottom: 16px;
}

.dropdown-button {
  padding: 8px 16px;
  cursor: pointer;
  background-color:rgb(236, 213, 213);
  color: rgb(43, 7, 7);
  border: none;
  border-radius: 4px;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.arrow.rotated {
  transform: rotate(180deg); /* Rotates arrow when dropdown is open */
}

.dropdown-menu {
  margin-top: 8px;
  padding: 0;
  list-style: none;
  background-color: rgb(225, 226, 161);
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.dropdown-item {
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item p {
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.5;
}

.dropdown-item:hover {
  background-color: transparent; /* Disable hover effect */
  cursor: default; /* Non-interactive */
}
</style>
