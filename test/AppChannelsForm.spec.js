import { mount } from '@vue/test-utils'
import AppChannelsForm from '../components/AppChannelsForm'

describe('AppChannelsForm', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapper = mount(AppChannelsForm, options)

    return {
      wrapper,
      channelNameInput: () => wrapper.find('[data-test=input_name]'),
      addButton: () => wrapper.find('[data-test=add_button]'),
      inputErrors: () => wrapper.find('[data-test=input_errors]')
    }
  }

  beforeEach(() => {
    opts = {}
  })

  test('is a Vue instance', () => {
    const { wrapper } = build()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders a list of channels', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('Can add channel clicking on add button', () => {
    const { wrapper, channelNameInput, addButton, inputErrors } = build()
    channelNameInput().element.value = 'New channel'
    channelNameInput().trigger('input')
    addButton().trigger('click')

    // NO INPUT ERRORS
    expect(inputErrors().exists()).toEqual(false)

    expect(channelNameInput().element.value).toBe('')

    expect(wrapper.emitted().added).toBeTruthy()
    expect(wrapper.emitted().added.length).toBe(1)
    expect(wrapper.emitted().added[0][0]).toEqual('New channel')
  })

  test.skip('Can add channel with enter', () => {
    const { wrapper, channelNameInput } = build()
    channelNameInput().element.value = 'New channel'
    channelNameInput().trigger('input')

    channelNameInput().trigger('keyup.enter')

    expect(channelNameInput().element.value).toBe('')

    expect(wrapper.emitted().added).toBeTruthy()
    expect(wrapper.emitted().added.length).toBe(1)
    expect(wrapper.emitted().added[0][0]).toEqual('New channel')
  })

  test('Show validation error if no channel name provided', () => {
    const { addButton, inputErrors } = build()
    addButton().trigger('click')
    expect(inputErrors().exists()).toEqual(true)
    expect(inputErrors().text()).toEqual('El nom és obligatori')
  })

  test('Validation error is removed after resolving error', () => {
    const { addButton, channelNameInput, inputErrors } = build()
    addButton().trigger('click')
    expect(inputErrors().exists()).toEqual(true)
    expect(inputErrors().text()).toEqual('El nom és obligatori')
    channelNameInput().element.value = 'N'
    channelNameInput().trigger('input')
    expect(inputErrors().exists()).toEqual(false)
  })
})
