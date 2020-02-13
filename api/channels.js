import http from './apiClient'

export default {
  index () {
    return http.get('/api/v1/channels/')
  },
  store (channel) {
    return http.post('/api/v1/channels/', channel)
  },
  destroy (channel) {
    return http.delete('/api/v1/channels/' + channel.id)
  },
  update (channel) {
    return http.put('/api/v1/channels/' + channel.id, channel)
  }
}
