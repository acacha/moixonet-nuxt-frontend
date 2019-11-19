export default {
  install (Vue, options) {
    Vue.prototype.$snackbar = {
      showMessage: jest.fn(),
      showError: jest.fn(),
      showWarning: jest.fn(),
      showSnackBar: jest.fn()
    }
  }
}
