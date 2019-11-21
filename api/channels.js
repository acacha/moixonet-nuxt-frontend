import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import dotenv from 'dotenv'

dotenv.config()

const instance = axios.create({
  baseURL: process.env.LARAVEL_ENDPOINT,
  adapter: httpAdapter
})

export default {
  add (channel) {
    return instance
      .post(`/api/v1/channels/`, channel)
      .then(result => result)
  },
  remove (channel) {
    return instance
      .get(`/users/${channel}`)
      .then(result => result.data)
  }
}
