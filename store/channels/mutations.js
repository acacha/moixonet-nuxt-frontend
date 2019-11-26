import * as mutationTypes from '../../mutation-types'

const mutations = {
  'SET_CHANNELS' (state, channels) {
    state.list = channels
  },
  [mutationTypes.CHANNELS_INDEX] (state, channels) {
    state.list = channels
  },
  [mutationTypes.CHANNEL_STORE] (state, channel) {
    state.list.push(channel)
  },
  [mutationTypes.CHANNEL_DESTROY] (state, channel) {
    state.list.splice(state.list.indexOf(channel), 1)
  }
  // TODO UPDATE PER VOSALTRES
}

export default mutations
