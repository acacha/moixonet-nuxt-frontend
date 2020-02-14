import http from './apiClient'

export default {
  index () {
    return http.get('/api/v1/changelogs')
  }
}
