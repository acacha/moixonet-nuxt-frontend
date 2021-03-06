import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import Vue from 'vue'
import AppTextFieldRequired from '../components/AppTextFieldRequired.vue'

Vue.use(Vuetify)
Vue.use(Vuelidate)
describe('AppTextFieldRequired', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapper = mount(AppTextFieldRequired, options)
    return {
      wrapper,
      inputField: () => wrapper.find('[data-test=text_field_required]')
    }
  }

  beforeEach(() => {
    opts = {
      sync: false, // avoid inconsistent errors with vuelidate https://github.com/vuelidate/vuelidate/issues/521
      propsData: {
        label: 'Nom',
        name: 'name',
        value: ''
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

  test('emits input when typing on input field', () => {
    const { wrapper, inputField } = build()
    inputField().element.value = 'a'
    inputField().trigger('input')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input.length).toBe(1)
    expect(wrapper.emitted().input[0][0]).toEqual('a')
  })

  test('show error when field is empty with input', async () => {
    const { wrapper, inputField } = build()
    inputField().element.value = ''
    inputField().trigger('input')

    await Vue.nextTick()

    expect(wrapper.text()).toMatch('El camp name és obligatori')
  })

  test.skip('show error when field is empty with input', async () => {
    const { wrapper, inputField } = build()
    inputField().element.value = ''
    inputField().trigger('input')

    await Vue.nextTick()

    expect(wrapper.text()).toMatch('El camp name és obligatori')
  })
})
