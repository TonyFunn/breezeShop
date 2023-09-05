<template>
  <v-app-bar
    style="background: linear-gradient(to right, #264653, #2a9d8f), center center / cover no-repeat"
    elevation="0"
  >
    <v-app-bar-nav-icon variant="text" @click.stop="state.drawer = !state.drawer; state.drawerTwo = false"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-row>
      <p style="cursor: pointer;" @click="$router.push('/')" class="logo-bar">SB</p>
    </v-row>

    <inputText />

    <v-spacer></v-spacer>

    <v-row>
      <v-col>
        <v-btn @click="$router.push('/registeration')" prepend-icon="mdi-account" stacked>
          Профиль
        </v-btn>
      </v-col>
      <v-col>
        <v-btn @click="$router.push('/basket')" stacked>
          <v-badge :content="20">
            <v-icon>mdi-cart</v-icon>
          </v-badge>
          корзина
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>

  <v-navigation-drawer
    v-model="state.drawer"
    location="left"
    temporary
    color="#264653d4"
  >
    <v-list-item
      v-for=" (category, inx) of categories"
      :key="inx"
      :value="category"
      color="primary"
      variant="tonal"
      rounded="xl"
    >
      <v-list>
        <div @click="state.drawerTwo = !state.drawerTwo" v-text="category.title"></div>

        <v-navigation-drawer
          elevation="0"
          :style="state.drawerTwo ? 'margin-left: 255px;' : ''"
          v-model="state.drawerTwo"
          location="left"
          color="#2a9d90b4"
        >
          <v-list
            :items="category.supCategory"
          >
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              location="end"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="indigo"
                  v-bind="props"
                >
                  Menu as Popover
                </v-btn>
              </template>
            </v-menu>
          </v-list>
        </v-navigation-drawer>
      </v-list>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
import { reactive } from "vue";
import inputText from "../../components/inputs/imputText.vue"

const state = reactive({
  drawer: false,
  drawerTwo: false
})

const categories = [
  {
    title: 'Одежда',
    value: 'cloth',
    supCategory: [
      {
        title: 'Мужская',
        value: 'male'
      },
      {
        title: 'Женская',
        value: 'female'
      }
    ]
  },
  {
    title: 'Обувь',
    value: 'shoes',
    supCategory: [
      {
        title: 'Мужская',
        value: 'male'
      },
      {
        title: 'Женская',
        value: 'female'
      }
    ]
  },
  {
    title: 'Электронника',
    value: 'electronics',
    supCategory: [
      {
        title: 'Телефоны',
        value: 'phone'
      },
      {
        title: 'Компьютеры',
        value: 'computers'
      }
    ]
  },
]
</script>

<style scoped>
.logo-bar {
  font-size: 20px;
  padding: 0 15px 0 0;
}
</style>
