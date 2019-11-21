import * as actionTypes from '../action-types'
import api from '../../api/channels'
import * as mutationTypes from '../mutation-types'

const actions = {
  [actionTypes.CHANNEL_ADD] ({ commit }, channel) {
    return new Promise(async (resolve, reject) => {
      try {
        await api.add(channel)
        commit(mutationTypes.CHANNEL_ADD, channel)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
  [actionTypes.CHANNEL_REMOVE] ({ commit }, channel) {
    return new Promise(async (resolve, reject) => {
      try {
        await api.remove(channel)
        commit(mutationTypes.CHANNEL_REMOVE, channel)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default actions
