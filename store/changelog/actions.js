import * as actionTypes from '../../action-types'
import api from '../../api/changelog'
import * as mutationTypes from '../../mutation-types'

const actions = {
  [actionTypes.CHANGELOG_INDEX] ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const changelog = await api.index()
        commit(mutationTypes.CHANGELOG_INDEX, changelog.data)
        resolve(changelog)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default actions
