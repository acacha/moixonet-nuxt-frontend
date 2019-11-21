import * as mutationTypes from '../mutation-types'

const mutations = {
  [mutationTypes.CHANNELS_SET] (state, channels) {
    state.list = channels
  },
  [mutationTypes.CHANNEL_ADD]  (state, channel) {
    state.list.push(channel)
  },
  [mutationTypes.CHANNEL_REMOVE]  (state, channel) {
    state.list.splice(state.list.indexOf(channel), 1)
  }
}

export default mutations
