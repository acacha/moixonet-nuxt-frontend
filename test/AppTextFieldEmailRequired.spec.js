import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import Vue from 'vue'
import AppTextFieldEmailRequired from '../components/AppTextFieldEmailRequired.vue'

Vue.use(Vuetify)
Vue.use(Vuelidate)

describe('AppTextFieldEmailRequired', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapper = mount(AppTextFieldEmailRequired, options)
    return {
      wrapper,
      inputField: () => wrapper.find('[data-test=email_field_required]')
    }
  }

  beforeEach(() => {
    opts = {
      // sync: false, // avoid inconsistent errors with vuelidate https://github.com/vuelidate/vuelidate/issues/521
      propsData: {
        value: '',
        label: 'Correu electrònic',
        name: 'email'
      }
    }
  })

  test('is a Vue instance', () => {
    const { wrapper } = build()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('emits input when typing on input field', async () => {
    const { wrapper, inputField } = build()

    inputField().element.value = 'a'
    inputField().trigger('input')

    await wrapper.vm.$nextTick() // <- over here

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input.length).toBe(1)
    expect(wrapper.emitted().input[0][0]).toEqual('a')
  })

  test.skip('show error when field email is and invalid email', async () => {
    const { wrapper, inputField } = build()

    inputField().element.value = 'invalidemailgmail.com'
    inputField().trigger('input')

    await Vue.nextTick()

    console.log(wrapper.text())

    expect(wrapper.text()).toMatch('El camp email ha de ser un email vàlid')
  })

  test.skip('Do not show errors when field email is valid', async () => {
    const { wrapper, inputField } = build()

    inputField().element.value = 'pepe@pardo.com'
    inputField().trigger('input')

    await Vue.nextTick()

    console.log(wrapper.text())
    expect(wrapper.text()).toMatch('El camp email és obligatori')
  })
})
