<template>
  <form>
    <span v-if="error" data-test="input_errors">{{ error }}</span>
    <input v-model="name" type="text" data-test="input_name" @keydown.enter="add">
    <button data-test="add_button" @click.prevent="add">
      Afegir
    </button>
  </form>
</template>

<script>
export default {
  name: 'AppChannelsform',
  data () {
    return {
      name: '',
      error: null
    }
  },
  watch: {
    name (newName) {
      if (newName !== '') { this.error = null }
    }
  },
  methods: {
    add () {
      if (this.name === '') { this.showError('El nom és obligatori') }
      this.$emit('added', this.name)
      this.name = ''
    },
    showError (error) {
      this.error = error
    }
  }
}
</script>
