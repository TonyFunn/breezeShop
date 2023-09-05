<template>
  <v-parallax
    src="../assets/main-bg.jpg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 style="font-size: 150px;">
        Sea Breeze
      </h1>
      <h4 class="subheading mb-4">
        Two people worked on the project Green Tea and Tony
      </h4>
      <v-btn
        variant="outlined"
        @click="$router.push('/buy')"
      >
        К покупкам
      </v-btn>
    </div>
  </v-parallax>
</template>
