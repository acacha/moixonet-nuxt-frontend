import { shallowMount } from '@vue/test-utils'
import Channels from '../pages/Channels'
import ChannelsList from '../components/ChannelsList'
import ChannelsForm from '../components/ChannelsForm'

describe('Channels', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapperShallow = shallowMount(Channels, options)

    return {
      wrapperShallow,
      channelsList: () => wrapperShallow.find(ChannelsList),
      channelsForm: () => wrapperShallow.find(ChannelsForm)
    }
  }

  beforeEach(() => {
    opts = {}
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
    expect(channelsList().exists()).toBe(true)
    expect(channelsForm().exists()).toBe(true)
  })
})
