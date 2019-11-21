<template>
  <v-snackbar
    v-model="showProp"
    :color="color"
  >
    {{ message }}
    <v-btn
      @click="toggle"
      color="white"
      text
      data-test="close_button"
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
      default: 'success',
      validator: (value) => {
        // El valor debe coincidir con una de estas cadenas de texto
        return ['success', 'warning', 'error'].includes(value)
      }
    },
    // eslint-disable-next-line vue/require-prop-types
    message: {
      default: 'Put your message here'
    }
  },
  computed: {
    showProp: {
      get () {
        return this.show
      },
      set (newValue) {
        this.$emit('toggle', newValue)
      }
    }
  },
  methods: {
    toggle () {
      this.$emit('toggle', !this.showProp)
    }
  }
}
</script>
