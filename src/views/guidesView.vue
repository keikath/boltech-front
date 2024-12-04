<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.png';
import { ref, computed } from 'vue';
import guideData from '@/threatguidedata.json'; // Import JSON file


// Reactive state
const openDropdown = ref(null); // Tracks which dropdown is open

// Method to toggle dropdown visibility
const toggleDropdown = (type) => {
  openDropdown.value = openDropdown.value === type ? null : type;
};

// Computed property to group threats by type
const groupedThreats = computed(() => {
  return guideData.reduce((acc, threat) => {
    if (!acc[threat.type]) acc[threat.type] = [];
    acc[threat.type].push(threat);
    return acc;
  }, {});
});

/* // Reactive state
const isOpen = ref(false);
const threats = ref(guideData); // Initialize with imported JSON data

// Method to toggle dropdown visibility
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};


/* //Reactive state
const isOpen = ref(false);
const items = ref(guideData); //Initialize with imported JSON data
const selectedItem = ref(null);

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item) => {
  selectedItem.value = item;
  isOpen.value = false; // Close the dropdown
}; */
</script>

<template> 
 <BackButton />
  <section class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <!--div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6"-->
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div>
              <!-- div {{ threat.title }} -->
                <div v-for="(group, type) in groupedThreats" :key="type" class="dropdown">
                  
                  <button @click="toggleDropdown(type)" class="dropdown-button">
                    {{ openDropdown === type ? `${type}` : `${type}` }}
                    <span :class="['arrow', { rotated: openDropdown === type }]">▼</span>
                  </button>
                  <ul v-if="openDropdown === type" class="dropdown-menu">
                    <li v-for="threat in group" :key="threat.id" class="dropdown-item">
                      <p><strong>Description:</strong> {{ threat.description }}</p>
                    </li>
                  </ul>
                  
                </div>
            </div>
          </div>
        </main>
      <!--/div-->
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


  <!--div>
    <div v-for="(group, type) in groupedThreats" :key="type" class="dropdown">
      <button @click="toggleDropdown(type)" class="dropdown-button">
        {{ openDropdown === type ? `Hide ${type}` : `Show ${type}` }}
      </button>
      <ul v-if="openDropdown === type" class="dropdown-menu">
        <li v-for="threat in group" :key="threat.id" class="dropdown-item">
          <h3>{{ threat.title }}</h3>
          <p><strong>Description:</strong> {{ threat.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-button">
      {{ isOpen ? 'Hide Threats' : 'Show Threats' }}
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="threat in threats" :key="threat.id" class="dropdown-item">
        <h3>{{ threat.title }}</h3>
        <p><strong>Type:</strong> {{ threat.type }}</p>
        <p><strong>Description:</strong> {{ threat.description }}</p>
      </li>
    </ul>
  </div>
</template-->
