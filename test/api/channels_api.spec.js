import flushPromises from 'flush-promises'
import nock from 'nock'
import dotenv from 'dotenv'
import api from '../../api/channels.js'
import channelsFixture from '../../cypress/fixtures/channels'

dotenv.config()

describe('channels_api', () => {
  it('store a channel', async () => {
    const channel = channelsFixture[0]

    const request = nock(process.env.VUE_APP_LARAVEL_ENDPOINT)
      .post('/api/v1/channels/', channel)
      .reply(201)

    const result = await api.store(channel)
    await flushPromises()
    // console.log('result:')
    // console.log(result)
    // console.log(result.status)
    expect(result.status).toEqual(201)
    expect(request.isDone()).toBe(true)
  })

  it('destroy a channel', async () => {
    const channel = channelsFixture[0]

    const request = nock(process.env.VUE_APP_LARAVEL_ENDPOINT)
      .delete('/api/v1/channels/' + channel.id)
      .reply(200)

    // act
    const result = await api.destroy(channel)
    await flushPromises()

    expect(result.status).toEqual(200)
    expect(request.isDone()).toBe(true)
  })

  it('updates a channel', async () => {
    const channel = channelsFixture[0]

    const request = nock(process.env.VUE_APP_LARAVEL_ENDPOINT)
      .put('/api/v1/channels/' + channel.id, channel)
      .reply(200)

    // act
    const result = await api.update(channel)
    await flushPromises()

    expect(result.status).toEqual(200)
    expect(request.isDone()).toBe(true)
  })
})
