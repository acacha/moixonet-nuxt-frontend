import { shallowMount } from '@vue/test-utils'
import ChannelsForm from '../components/ChannelsForm'
import AppChannelsForm from '../components/AppChannelsForm'
import channelsFixture from '../cypress/fixtures/channels'
import * as actionTypes from '../action-types'

describe('ChannelsForm', () => {
  let opts
  const actions = jest.fn()

  const build = (options) => {
    options = options || opts
    const wrapperShallow = shallowMount(ChannelsForm, options)

    return {
      wrapperShallow,
      channelsForm: () => wrapperShallow.find(AppChannelsForm)
    }
  }

  beforeEach(() => {
    // MOCKING this.$store
    opts = {
      mocks: {
        $store: {
          // state: {
          //   channels: {
          //     list: channelsFixture
          //   }
          // },
          dispatch: actions
        }
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
    const { channelsForm } = build()
    expect(channelsForm().exists()).toBe(true)
  })

  test('Add a channel when received "added"', () => {
    const { channelsForm } = build()
    const addedChannel = channelsFixture[0]

    channelsForm().vm.$emit('added', addedChannel)

    expect(actions).toHaveBeenCalled()
    expect(actions.mock.calls[0][0]).toEqual(actionTypes.CHANNEL_STORE)
    expect(actions.mock.calls[0][1]).toEqual(addedChannel)
  })
})
