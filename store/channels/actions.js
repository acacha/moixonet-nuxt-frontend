import * as actionTypes from '../action-types'
import api from '../../api/channels'
import * as mutationTypes from '../mutation-types'

const actions = {
  [actionTypes.CHANNEL_STORE] ({ commit }, channel) {
    return new Promise(async (resolve, reject) => {
      try {
        await api.store(channel)
        commit(mutationTypes.CHANNEL_STORE, channel)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
  [actionTypes.CHANNEL_DESTROY] ({ commit }, channel) {
    return new Promise(async (resolve, reject) => {
      try {
        await api.destroy(channel)
        commit(mutationTypes.CHANNEL_DESTROY, channel)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
  [actionTypes.CHANNELS_INDEX] ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const channels = await api.index()
        commit(mutationTypes.CHANNELS_INDEX, channels)
        resolve(channels)
      } catch (error) {
        reject(error)
      }
    })
  },
  [actionTypes.CHANNEL_UPDATE] ({ commit }, channel) {
    return new Promise(async (resolve, reject) => {
      try {
        await api.update(channel)
        commit(mutationTypes.CHANNEL_UPDATE, channel)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default actions
