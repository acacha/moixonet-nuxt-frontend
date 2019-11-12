import { mount } from '@vue/test-utils'
import ChannelsList from '../components/ChannelsList'
import channelsFixture from '../cypress/fixtures/channels'

// https://vue-test-utils.vuejs.org/
describe('ChannelsList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ChannelsList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders and html list', () => {
    const wrapper = mount(ChannelsList)
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders a list of channels', () => {
    // Necessitem passar-li els canals
    const wrapper = mount(ChannelsList, {
      propsData: {
        channels: channelsFixture
      }
    })
    console.log(wrapper.html())
    expect(wrapper.element).toMatchSnapshot()
  })

  // SNAPSHOT

  // TEMPLATE

  // test('is a Vue instance', () => {
  //   const wrapper = mount(Logo)
  //   expect(wrapper.isVueInstance()).toBeTruthy()
  // })
  //
  // test('is a Vue instance', () => {
  //   const wrapper = mount(Logo)
  //   expect(wrapper.isVueInstance()).toBeTruthy()
  // })
  //
})
