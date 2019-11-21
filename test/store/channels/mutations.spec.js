import mutations from '../../../store/channels/mutations'
import * as mutationTypes from '../../../store/mutation-types'
import initialState from '../../../store/channels/state'
import channelsFixture from '../../../cypress/fixtures/channels'

describe('channels mutations', () => {
  let state

  beforeEach(() => {
    state = initialState()
  })

  it('sets channels', () => {
    const channels = channelsFixture
    expect(state.list.length).toEqual(0)
    mutations[mutationTypes.CHANNELS_INDEX](state, channels)
    expect(state.list[0]).toEqual(channelsFixture[0])
    expect(state.list[1]).toEqual(channelsFixture[1])
    expect(state.list[2]).toEqual(channelsFixture[2])
    expect(state.list.length).toEqual(3)
  })

  it('adds new channel', () => {
    const addedChannel = channelsFixture[0]
    expect(state.list.length).toEqual(0)
    mutations[mutationTypes.CHANNEL_STORE](state, addedChannel)
    expect(state.list[0]).toEqual(addedChannel)
    expect(state.list.length).toEqual(1)
  })

  it('removes a channel', () => {
    state = {
      list: channelsFixture
    }
    const removedChannel = channelsFixture[0]
    expect(state.list.length).toEqual(3)

    mutations[mutationTypes.CHANNEL_DESTROY](state, removedChannel)
    expect(state.list.length).toEqual(2)
    expect(JSON.stringify(state.list)).not.toMatch(removedChannel.name)
  })
})
