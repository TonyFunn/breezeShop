<template>
  <v-app>
    <default-bar
    style="background: linear-gradient(to right, #264653, #2a9d8f), center center / cover no-repeat"
  />

    <default-view 
  />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
