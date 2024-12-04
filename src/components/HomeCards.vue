<script setup>
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="py-8 mx-auto max-w-screen-md " >
    <div class="container-xl lg:container mx-auto rounded-full" >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pss-4 pse-4 rounded-lg text-center">
        <Card border="border-neutral-800">
          <h2 class="text-2xl font-bold">PLACE</h2>
          <p class="mt-2 mb-4">
            Learn about your cyber posture with our custom incidence response generator...
          </p>
          <RouterLink
            to="/irp-generator"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Get the recommendation!
          </RouterLink>
        </Card>
        <Card bg="bg-green-100" corners="rounded-tl-full rounded-e-full text-center ">
          <h2 class="text-2xl font-bold">hOLDER</h2>
          <p class="mt-2 mb-4">
            Confident you're good? Test your readiness by taking the assessment now.<br>
          </p>
          <RouterLink
            to="/test"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Test Yourself!
          </RouterLink>
        </Card>
        <!--Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">TECHNICAL ATTACKS</h2>
          <p class="mt-2 mb-4">
             Malware
            Ransomware 
            DDoS Attack
            Rogue Software 
            Zero-Day Exploits 
            SQL Injection <br>
          </p>
          <!--RouterLink
            to="/resources/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Learn More
          </RouterLink -->
        <!--/Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">NETWORK ATTACKS</h2>
          <p class="mt-2 mb-4">
            MiTM Attacks<br>
            Session Hijacking<br>
            Brute-force Attacks<br>
            Port Scanning<br>
          </p>
          <!--RouterLink
            to="/resources/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Learn More
          </RouterLink -->
        <!--/Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">INFORMATION SECURITY THREATS</h2>
          <p class="mt-2 mb-4">
            Disinformation Campaigns
            Website Defacement
            Internet Censorship 
            Account Takeover
            Shadow Banning <br>
          </p>
          <!--RouterLink
            to="/resources/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Learn More
          </RouterLink -->
        <!--/Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">TARGETED ATTACKS</h2>
          <p class="mt-2 mb-4">
            State-Sponsored Attacks <br>
            APTs<br>
            Supply-chain Attacks <br>
            Watering Hole Attacks <br>
          </p>
          <!--RouterLink
            to="/resources/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Learn More
          </RouterLink --> 
        <!--/Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">SURVEILLANCE & TRACKING</h2>
          <p class="mt-2 mb-4">
            Surveillance<br>
            Credential Theft <br>
          </p>
          <!--RouterLink
            to="/resources/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Learn More
          </RouterLink -->
        <!--/Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">HARASSMENT</h2>
          <p class="mt-2 mb-4">
            Harrasment <br>
            Device Confiscation<br>
          </p>
          <!--RouterLink
            to="/resources/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Learn More
          </RouterLink --> 
        <!--/Card-->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-center bg-slate-50 ring-black rounded-2xl mt-10 " >
        <Card bg="bg-orange-100" corners="rounded-full">
          <h2 class="text-2xl font-bold">What is incidence response?</h2>
          <p class="mt-2 mb-4">
            This is what happens after an attacker of group of attackers maliciously gain access to your data, infrustructure or other sensitive assets. As an organization it is in your best interest in such moments to act fast to contain the breach and ensure recovery of compromised assets as well as get ahead of whatever damage may have been inflicted. This is where incidence response comes in...
          </p>
          
        </Card>
      </div>  
    </div>
  </section>
</template>
