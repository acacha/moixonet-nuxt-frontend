import { shallowMount } from '@vue/test-utils'
import Channels from '../pages/Channels'
import ChannelsList from '../components/ChannelsList'
import ChannelsForm from '../components/ChannelsForm'
import channelsFixture from '../cypress/fixtures/channels'

describe('Channels', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapperShallow = shallowMount(Channels, options)
    const channelsList = wrapperShallow.find(ChannelsList)
    const channelsForm = wrapperShallow.find(ChannelsForm)

    return {
      wrapperShallow,
      channelsList,
      channelsForm
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
    const { channelsList, channelsForm } = build()
    expect(channelsList.exists()).toBe(true)
    expect(channelsForm.exists()).toBe(true)
  })

  test('Passes a channels prop to channels list component', () => {
    const { channelsList } = build()
    expect(channelsList.vm.channels).toBe(channelsFixture)
  })
})
