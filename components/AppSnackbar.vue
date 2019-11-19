<template>
  <v-snackbar
    v-model="show"
    :color="color"
  >
    {{ message }}
    <v-btn
      color="primary"
      text
      data-test="close_button"
      @click="toggle"
    >
      Tancar
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'AppSnackbar',
  model: {
    prop: 'show',
    event: 'toggle'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      validator: (value) => {
        // El valor debe coincidir con una de estas cadenas de texto
        return ['success', 'warning', 'error'].includes(value)
      }
    },
    message: {
      type: String,
      default: 'Put your message here'
    }
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>
