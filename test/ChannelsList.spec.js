import { shallowMount } from '@vue/test-utils'
import ChannelsList from '../components/ChannelsList'
import AppChannelsList from '../components/AppChannelsList'
import initialState from '../store/channels/state'
import channelsFixture from '../cypress/fixtures/channels'
import * as actionTypes from '../action-types'

describe('ChannelsList', () => {
  let opts
  const actions = jest.fn()
  const optsFixture = {
    mocks: {
      $store: {
        state: {
          channels: {
            list: channelsFixture
          }
        },
        dispatch: actions
      }
    }
  }

  const build = (options) => {
    options = options || opts
    const wrapperShallow = shallowMount(ChannelsList, options)

    return {
      wrapperShallow,
      channelsList: () => wrapperShallow.find(AppChannelsList)
    }
  }

  beforeEach(() => {
    // MOCKING this.$store.state.channels.list
    opts = {
      mocks: {
        $store: {
          state: {
            channels: initialState()
          }
        }
      }
    }
  })

  test('is a Vue instance', () => {
    const { wrapperShallow } = build()
    expect(wrapperShallow.isVueInstance()).toBeTruthy()
  })

  test('renders the component with no channels', () => {
    const { wrapperShallow } = build()
    expect(wrapperShallow.element).toMatchSnapshot()
  })

  test('renders the component channels', () => {
    const { wrapperShallow } = build(optsFixture)
    expect(wrapperShallow.element).toMatchSnapshot()
  })

  test('renders child components', () => {
    const { channelsList } = build()
    expect(channelsList().exists()).toBe(true)
  })

  test('Passes a channels prop to channels list component', () => {
    const { channelsList } = build(optsFixture)
    expect(channelsList().vm.channels).toBe(channelsFixture)
  })

  test('Removes a channel when received "removed"', () => {
    const { channelsList } = build(optsFixture)
    const removedChannel = channelsFixture[0]

    channelsList().vm.$emit('removed', removedChannel)

    expect(actions).toHaveBeenCalled()
    expect(actions.mock.calls[0][0]).toEqual('channels/' + actionTypes.CHANNEL_DESTROY)
    expect(actions.mock.calls[0][1]).toEqual(removedChannel)
  })
})
