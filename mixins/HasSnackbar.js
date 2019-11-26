export const HasSnackbar = {
  data () {
    return {
      snackbar: false,
      message: 'PUT YOUR MESSAGE HERE!',
      color: 'success'
    }
  },
  mounted () {
    this.registerShowSnackbarEventListener()
  },
  methods: {
    registerShowSnackbarEventListener () {
      this.$eventBus.$on('showSnackbar', (message, color) => {
        message = message || 'Put your message here'
        color = color || 'success'
        this.snackbar = true
        this.message = message
        this.color = color
      })
    }
  }
}
