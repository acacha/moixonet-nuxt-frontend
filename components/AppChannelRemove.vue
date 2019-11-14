<template>
  <button data-test="remove-button" @click="remove">
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
