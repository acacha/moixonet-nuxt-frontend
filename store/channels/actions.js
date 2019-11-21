import * as actionTypes from '../../action-types'
import api from '../../api/channels'
import * as mutationTypes from '../../mutation-types'

const actions = {
  [actionTypes.CHANNEL_STORE] ({ commit }, channel) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await api.store(channel)
        commit(mutationTypes.CHANNEL_STORE, result.data)
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
        console.log('channels obtained!!!')
        console.log(channels.data)
        // commit('channels/' + mutationTypes.CHANNELS_INDEX, channels.data)
        // console.log('AFTER MUTATION')
        commit(mutationTypes.CHANNELS_INDEX, channels.data)
        console.log('AFTER MUTATION 2')
        resolve(channels)
      } catch (error) {
        console.log('ERROR!!!!!!!!!!')
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
