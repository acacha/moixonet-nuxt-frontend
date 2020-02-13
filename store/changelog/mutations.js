import * as mutationTypes from '../../mutation-types'

const mutations = {
  [mutationTypes.CHANGELOG_INDEX] (state, changelog) {
    state.list = changelog
  }
}

export default mutations
