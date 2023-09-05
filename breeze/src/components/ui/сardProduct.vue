<template>
    <v-hover
        v-slot="{ isHovering, props }"
    >
        <v-card
            style="cursor: pointer; background-color: #ffffff00; border-radius: 10px;"
            v-bind="props"
            :elevation="isHovering ? 12 : 0"
        >
            <v-img
                src="../../assets/img-carg.jpg"
                cover
                style="border-radius: 10px;"
            ></v-img>
    
            <v-card-title>
                Top western road trips
            </v-card-title>

            <v-card-subtitle>
                1,000 miles of wonder
            </v-card-subtitle>

            <v-rating
                :model-value="4.5"
                bg-color="orange-lighten-1"
                color="amber"
                density="compact"
                class="ma-2"
                half-increments
                readonly
                size="small"
            ></v-rating>
            <div class="text-grey ms-4">
              4.5 (413)
            </div>
        </v-card>
    </v-hover>
</template>

<script setup>

</script>