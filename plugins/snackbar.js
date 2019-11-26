import { EventBus } from './event-bus.js'

export default {
  install (Vue, options) {
    // Add Vue instance methods by attaching them to Vue.prototype.
    Vue.prototype.$snackbar = {
      showMessage (message) {
        this.showSnackBar(message, 'success')
      },
      showError (message) {
        this.showSnackBar(message, 'error')
      },
      showWarning (message) {
        this.showSnackBar(message, 'warning')
      },
      showSnackBar (message, color) {
        EventBus.$emit('showSnackbar', message, color)
      }
    }
  }
}
