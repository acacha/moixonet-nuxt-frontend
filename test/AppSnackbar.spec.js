import { shallowMount, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import AppSnackbar from '../components/AppSnackbar'

Vue.use(Vuetify)

describe('AppSnackbar', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapperShallow = shallowMount(AppSnackbar, options)
    const wrapper = mount(AppSnackbar, options)

    return {
      wrapperShallow,
      wrapper,
      closeButton: () => wrapper.find('[data-test=close_button]')
    }
  }

  beforeEach(() => {
    opts = {}
  })

  test('is a Vue instance', () => {
    const { wrapperShallow } = build()
    expect(wrapperShallow.isVueInstance()).toBeTruthy()
  })

  test('renders the component with default props', () => {
    const { wrapperShallow } = build()
    expect(wrapperShallow.element).toMatchSnapshot()
  })

  test('renders the default message', () => {
    const { wrapper } = build({
      propsData: {
        'show': true
      }
    })
    expect(wrapper.text()).toMatch('Put your message here')
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders the passed message', () => {
    const { wrapper } = build({
      propsData: {
        'show': true,
        'message': 'Unexpected error'
      }
    })
    expect(wrapper.text()).toMatch('Unexpected error')
    expect(wrapper.element).toMatchSnapshot()
  })

  test('color validation', () => {
    const { wrapper } = build()
    const color = wrapper.vm.$options.props.color

    expect(color.type).toBe(String)
    expect(color.validator && color.validator('unvalid')).toBeFalsy()
    expect(color.validator && color.validator('error')).toBeTruthy()
  })

  test('renders the component', () => {
    const { wrapperShallow } = build({
      propsData: {
        'show': true
      }
    })
    expect(wrapperShallow.element).toMatchSnapshot()
  })

  test('can be closed', () => {
    const { closeButton, wrapper } = build({
      propsData: {
        'show': true
      }
    })
    closeButton().trigger('click')
    expect(wrapper.emitted().toggle).toBeTruthy()
    expect(wrapper.emitted().toggle.length).toBe(1)
  })
})
