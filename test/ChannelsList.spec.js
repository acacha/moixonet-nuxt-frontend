import { mount } from '@vue/test-utils'
import ChannelsList from '../components/ChannelsList'
import channelsFixture from '../cypress/fixtures/channels'

// https://vue-test-utils.vuejs.org/
describe('ChannelsList', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapper = mount(ChannelsList, options)

    return {
      wrapper
    }
  }

  beforeEach(() => {
    opts = {
      propsData: {
        channels: channelsFixture
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
})
