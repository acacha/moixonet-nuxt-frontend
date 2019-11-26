<template>
  <button @click="remove" data-test="remove-button">
    Eliminar
  </button>
</template>

<script>
export default {
  name: 'AppChannelRemove',
  props: {
    'channel': {
      type: Object,
      required: true
    }
  },
  methods: {
    remove () {
      this.$emit('removed', this.channel)
    }
  }
}
</script>
