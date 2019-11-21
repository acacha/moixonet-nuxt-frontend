import flushPromises from 'flush-promises'
import nock from 'nock'
import dotenv from 'dotenv'
import api from '../../api/channels.js'

dotenv.config()

describe('channels_api', () => {
  it('adds a channel', async () => {
    const channel = {
      name: 'Canal 1'
    }

    const request = nock(process.env.LARAVEL_ENDPOINT)
      .post('/api/v1/channels/', channel)
      .reply(201)

    // act
    const result = await api.add(channel)
    await flushPromises()
    // console.log('result:')
    // console.log(result)
    // console.log(result.status)
    // assert
    expect(result.status).toEqual(201)
    expect(request.isDone()).toBe(true)
  })
})
