<template>
    <label
        class="label-global_input"
        max-width="964px"
        style="display: flex; padding: 0 10px;"
    >
        <input class="global-input" />
        <v-img

            src="../../assets/icon-search.png"
            width="25px"
            height="25px"
            style="transform: scale(-1, 1)"
        >
        </v-img>
    </label>
</template>

<script setup>
import { defineProps, defineEmits} from 'vue'

defineProps({
    value: {
        type: [ String, Number],
        default: null
    }
})
</script>

<style>
.label-global_input {
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  color: black;
}

.global-input {
  padding: 5px 10px;
  width: 964px;
  color: black;
}
</style>