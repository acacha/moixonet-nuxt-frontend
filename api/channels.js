import instance from './apiClient'

export default {
  store (channel) {
    return instance.post('/api/v1/channels', channel)
  },
  index () {
    return instance.get('/api/v1/channels/')
  },
  destroy (channel) {
    return instance.delete('/api/v1/channels/' + channel.id)
  },
  update (channel) {
    return instance.put('/api/v1/channels/' + channel.id, channel)
  },
  show (channel) {
    return instance.get('/api/v1/channels/' + channel.id)
  }
}
