import { setClient } from '../api/apiClient'

export default ({ app, store }) => {
  setClient(app.$axios)
}
