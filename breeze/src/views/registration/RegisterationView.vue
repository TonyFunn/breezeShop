<template>
    <form>
        <v-text-field
            v-model="state.name"
            :error-messages="v$.name.$errors.map(e => e.$message)"
            :counter="10"
            label="Name"
            required
            @input="v$.name.$touch"
            @blur="v$.name.$touch"
        ></v-text-field>

        <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map(e => e.$message)"
            label="E-mail"
            required
            @input="v$.email.$touch"
            @blur="v$.email.$touch"
        ></v-text-field>

        <v-select
            v-model="state.select"
            :items="items"
            :error-messages="v$.select.$errors.map(e => e.$message)"
            label="Item"
            required
            @change="v$.select.$touch"
            @blur="v$.select.$touch"
        ></v-select>

        <v-checkbox
            v-model="state.checkbox"
            :error-messages="v$.checkbox.$errors.map(e => e.$message)"
            label="Do you agree?"
            required
            @change="v$.checkbox.$touch"
            @blur="v$.checkbox.$touch"
        ></v-checkbox>

        <v-btn
            class="me-4"
            @click="v$.$validate"
        >
        submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </form>
</template>

<script setup>
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { email, required } from '@vuelidate/validators'

  const state = reactive({
    name: '',
    email: '',
    select: null,
    checkbox: null,
  })

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]

  const rules = {
    name: { required },
    email: { required, email },
    select: { required },
    items: { required },
    checkbox: { required },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }
</script>