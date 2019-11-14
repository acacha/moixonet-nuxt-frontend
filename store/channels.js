export const state = () => ({
  channels: []
})

export const mutations = {
  SET_CHANNELS (state, channels) {
    state.channels = channels
  },
  ADD_CHANNEL (state, channel) {
    state.channels.push(channel)
  },
  REMOVE_CHANNEL (state, channel) {
    state.channels.splice(state.channels.indexOf(channel), 1)
  }
}

export const actions = {
  // SET_CHANNELS (state, channels) {
  //   state.channels = channels
  // }
}
