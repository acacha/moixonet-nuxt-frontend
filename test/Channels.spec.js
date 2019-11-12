import { shallowMount } from '@vue/test-utils'
import Channels from '../pages/Channels'
import ChannelsList from '../components/ChannelsList'
import channelsFixture from '../cypress/fixtures/channels'

describe('Channels', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapperShallow = shallowMount(Channels, options)

    return {
      wrapperShallow
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
    const { wrapperShallow } = build()
    expect(wrapperShallow.isVueInstance()).toBeTruthy()
  })

  test('renders the component', () => {
    const { wrapperShallow } = build()
    expect(wrapperShallow.element).toMatchSnapshot()
  })

  test('renders child components', () => {
    const { wrapperShallow } = build()
    const channelsList = wrapperShallow.find(ChannelsList)
    expect(channelsList.exists()).toBe(true)
  })

  test('Passes a channels prop to channels list component', () => {
    const { wrapperShallow } = build()
    const channelsList = wrapperShallow.find(ChannelsList)
    expect(channelsList.vm.channels).toBe(channelsFixture)
  })
})
