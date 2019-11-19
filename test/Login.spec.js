import { shallowMount, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import flushPromises from 'flush-promises'
import Login from '../pages/Login'

Vue.use(Vuetify)
describe('Login', () => {
  let opts
  const auth = {
    loginWith: jest.fn().mockImplementation(() => Promise.resolve())
    // ALTERNATIVES
    // loginWith: jest.fn().mockResolvedValue(43)
    // loginWith: jest.fn()
    // loginWith: jest.fn().mockRejectedValue('Error occurred')
    // loginWith: jest.fn().mockImplementation(() => Promise.reject('Error occurred'));
  }
  const build = (options) => {
    options = options || opts
    const wrapperShallow = shallowMount(Login, options)
    const wrapper = mount(Login, options)

    return {
      wrapperShallow,
      loginButton: () => wrapper.find('[data-test=auth_login_button_login]'),
      emailInputField: () => wrapper.find('[data-test=auth_login_input_email]'),
      passwordInputField: () => wrapper.find('[data-test=auth_login_input_password]')
    }
  }

  beforeEach(() => {
    opts = {
      stubs: ['nuxt-link'],
      sync: false,
      mocks: {
        $auth: auth
      },
      vuetify: new Vuetify({
        mocks: {
          $vuetify: {
            breakpoint: {} // STUB BREAKPOINTS SERVICE: https://vuetifyjs.com/en/getting-started/unit-testing#mocking-vuetify
          }
        }
      })
    }
  })

  test('is a Vue instance', () => {
    const { wrapperShallow } = build()
    expect(wrapperShallow.isVueInstance()).toBeTruthy()
  })

  test('renders the component', () => {
    const { wrapperShallow } = build()
    expect(wrapperShallow.element).toMatchSnapshot()
  })

  test('can login', () => {
    const { loginButton, emailInputField, passwordInputField } = build()
    emailInputField().element.value = 'sergiturbadenas@gmail.com'
    emailInputField().trigger('input')
    passwordInputField().element.value = '12345678'
    passwordInputField().trigger('input')
    loginButton().trigger('click')

    expect(auth.loginWith).toHaveBeenCalled()
    expect(auth.loginWith.mock.calls[0][1].data).toEqual({ email: 'sergiturbadenas@gmail.com', password: '12345678' })
  })

  test('shows error on error login', async () => {
    const auth = {
      loginWith: jest.fn().mockRejectedValue('Error occurred')
    }
    const snackbar = {
      showError: jest.fn()
    }
    opts = {
      stubs: ['nuxt-link'],
      sync: false,
      mocks: {
        $auth: auth,
        $snackbar: snackbar
      },
      vuetify: new Vuetify({
        mocks: {
          $vuetify: {
            breakpoint: {} // STUB BREAKPOINTS SERVICE: https://vuetifyjs.com/en/getting-started/unit-testing#mocking-vuetify
          }
        }
      })
    }
    const { loginButton, emailInputField, passwordInputField } = build(opts)
    emailInputField().element.value = 'sergiturbadenas@gmail.com'
    emailInputField().trigger('input')
    passwordInputField().element.value = '12345678'
    passwordInputField().trigger('input')
    loginButton().trigger('click')

    await flushPromises()

    expect(snackbar.showError).toHaveBeenCalled()
    expect(snackbar.showError.mock.calls[0][0]).toEqual('Error occurred')
  })
})
