import nock from 'nock'
import dotenv from 'dotenv'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import channelsFixture from '../../cypress/fixtures/channels'
import api from '../../api/channels'
import { setClient } from '../../api/apiClient'

dotenv.config()

describe('channels api', () => {
  beforeEach(() => {
    const instance = axios.create({
      baseURL: 'http://moixonet-backend.test',
      adapter: httpAdapter
    })
    setClient(instance)
  })
  it('store a channel', async () => {
    const channel = channelsFixture[0]

    // MOXIOS: mock axios
    // NOCK: mock the network
    // console.log(process.env.LARAVEL_ENDPOINT)
    const request = nock('http://moixonet-backend.test').post('/api/v1/channels', channel).reply(201)

    const result = await api.store(channel)
    expect(result.status).toEqual(201)

    expect(request.isDone()).toBe(true)
  })
})
