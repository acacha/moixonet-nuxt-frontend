import { mount } from '@vue/test-utils'
import AppChannelRemove from '../components/AppChannelRemove'
import channelsFixture from '../cypress/fixtures/channels'

describe('AppChannelRemove', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapper = mount(AppChannelRemove, options)

    return {
      wrapper,
      removeButton: () => wrapper.find('[data-test=remove-button]')
    }
  }

  beforeEach(() => {
    opts = {
      propsData: {
        channel: channelsFixture[0]
      }
    }
  })

  test('is a Vue instance', () => {
    const { wrapper } = build()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders a list of channels', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('remove a channel when click on button', () => {
    const { wrapper, removeButton } = build()
    removeButton().trigger('click')
    expect(wrapper.emitted().removed).toBeTruthy()
    expect(wrapper.emitted().removed.length).toBe(1)
    expect(wrapper.emitted().removed[0][0]).toEqual(channelsFixture[0])
  })
})
