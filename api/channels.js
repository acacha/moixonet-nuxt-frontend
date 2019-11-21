import instance from './apiClient'

export default {
  index () {
    return instance
      .get('/api/v1/channels/')
      .then(result => result)
  },
  store (channel) {
    return instance
      .post('/api/v1/channels/', channel)
      .then(result => result)
  },
  destroy (channel) {
    return instance
      .delete('/api/v1/channels/' + channel.id)
      .then(result => result)
  },
  update (channel) {
    return instance
      .put('/api/v1/channels/' + channel.id, channel)
      .then(result => result)
  }
}
