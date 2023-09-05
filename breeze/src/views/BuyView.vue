<template>
    <v-container
        style=" margin-top: 20px;
        max-width: 1100px;
        padding: 0 25px;
        "
    >
        <v-row>
            <v-carousel
                height="300"
                style="border-radius: 30px;"
                hide-delimiter-background
                class="ml-3 mr-3"
            >
                <template #prev="{ props }">
                    <v-img
                        style="cursor: pointer;"
                        src="../assets/arrow_3emfximajslv.svg" max-width="55px" max-height="55px"
                        @click="props.onClick"
                    >
                    </v-img>
                </template>
                <template #next="{ props }">
                    <v-img
                        style="transform: rotate(180deg); cursor: pointer;"
                        src="../assets/arrow_3emfximajslv.svg" max-width="55px" max-height="55px"
                        @click="props.onClick"
                    >
                    </v-img>
                </template>

                <v-carousel-item
                    v-for="(slide, i) in sviper.slides"
                    :key="i"
                >
                    <v-sheet
                        :color="sviper.colors[i]"
                        height="100%"
                    >
                        <div class="d-flex fill-height justify-center align-center">
                            <div class="text-h2">
                                {{ slide }} Slide
                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-row>
        <v-row>
            <v-col class="d-flex fill-height justify-center align-center">
                <h1>Акции недели</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for=" card of 12"
                :key="card.title"
                class="d-flex child-flex"
                cols="2"
            >
                <cardProduct />
            </v-col>
        </v-row>
        <v-row>
            
        </v-row>
    </v-container>
</template>

<script setup>
import cardProduct from "../components/ui/сardProduct.vue"

const sviper = {
    colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
    ],
    slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
    ],
}

const docCards = [
    {
        img: '/assets/img-card.jpg',
        price: 650,
        title: 'Футболка женская',
        ratings: 4.5
    },
]

</script>