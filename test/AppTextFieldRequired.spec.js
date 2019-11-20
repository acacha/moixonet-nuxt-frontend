import { mount } from '@vue/test-utils'
import AppTextFieldRequired from '../components/AppTextFieldRequired.vue'

describe('AppTextFieldRequired', () => {
  let opts
  const build = (options) => {
    options = options || opts
    const wrapper = mount(AppTextFieldRequired, options)
    return {
      wrapper
    }
  }
  test('is a Vue instance', () => {
    const { wrapper } = build()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })
})
