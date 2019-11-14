import { shallowMount } from '@vue/test-utils'
import Channels from '../pages/Channels'
import AppChannelsList from '../components/AppChannelsList'
import AppChannelsForm from '../components/AppChannelsForm'
import channelsFixture from '../cypress/fixtures/channels'

describe('Channels', () => {
  let opts

  const build = (options) => {
    options = options || opts
    const wrapperShallow = shallowMount(Channels, options)

    // IMPORTANT => Funció permet que cada cop utilitzem subcomponent sigui una instancia fresca i no el que hi ha en mempria des de que es
    // va obtenir el valor a la primera crida
    return {
      wrapperShallow,
      channelsList: () => wrapperShallow.find(AppChannelsList),
      channelsForm: () => wrapperShallow.find(AppChannelsForm)
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
    expect(channelsList().exists()).toBe(true)
    expect(channelsForm().exists()).toBe(true)
  })

  test('Passes a channels prop to channels list component', () => {
    const { channelsList } = build()
    expect(channelsList().vm.channels).toBe(channelsFixture)
  })

  it('Adds a channel when received "added"', () => {
    // arrange
    const expectedChannel = 'Nou canal'
    const { wrapperShallow, channelsForm } = build()

    expect(wrapperShallow.vm.channels.length).toBe(3)
    // act
    channelsForm().vm.$emit('added', expectedChannel)

    // check add method is called
    // Es pot comprovar directament l'estat vm.channels
    // console.log(wrapperShallow.vm.channels)
    // console.log(wrapperShallow.vm.channels.length)
    // console.log(wrapperShallow.vm.channels[3])
    // console.log(wrapperShallow.vm.channels[3].name)
    expect(wrapperShallow.vm.channels.length).toBe(4)
    expect(wrapperShallow.vm.channels[3].name).toBe('Nou canal')
    // Es pot fer un espia/mock que només comprovi si s'executa el mètode desitjat

    // assert
    // expect(actions.SEARCH_USER).toHaveBeenCalled()
    // expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectedChannel })
  })

  it('Adds a channel when received "added" alt1', () => {
    const add = jest.fn()

    const expectedChannel = 'Nou canal'
    opts = {
      propsData: {
        channels: channelsFixture
      },
      methods: {
        add
      }
    }
    const { channelsForm } = build()
    channelsForm().vm.$emit('added', expectedChannel)
    expect(add).toBeCalled()
  })
})
