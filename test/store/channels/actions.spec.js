import flushPromises from 'flush-promises'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import * as actionTypes from '../../../store/action-types'
import * as mutationTypes from '../../../store/mutation-types'
import actions from '../../../store/channels/actions'
import channelsFixture from '../../../cypress/fixtures/channels'
import api from '../../../api/channels'
import { setClient } from '../../../api/apiClient'
jest.mock('../../../api/channels')

describe('channels actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
    const instance = axios.create({
      baseURL: process.env.VUE_APP_LARAVEL_ENDPOINT,
      adapter: httpAdapter
    })
    setClient(instance)
  })

  it('adds a channel', async () => {
    const addedChannel = channelsFixture[0]
    await actions[actionTypes.CHANNEL_STORE]({ commit }, addedChannel)
    await flushPromises()
    expect(api.store).toHaveBeenCalledWith(addedChannel)
    expect(commit).toHaveBeenCalledWith(mutationTypes.CHANNEL_STORE, addedChannel)
  })

  it('removes a channel', async () => {
    const removedChannel = channelsFixture[0]
    await actions[actionTypes.CHANNEL_DESTROY]({ commit }, removedChannel)
    await flushPromises()
    expect(api.destroy).toHaveBeenCalledWith(removedChannel)
    expect(commit).toHaveBeenCalledWith(mutationTypes.CHANNEL_DESTROY, removedChannel)
  })

  it('get channels', async () => {
    const channels = channelsFixture
    await actions[actionTypes.CHANNELS_INDEX]({ commit })
    await flushPromises()
    expect(api.index).toHaveBeenCalled()
    expect(commit).toHaveBeenCalledWith(mutationTypes.CHANNELS_INDEX, channels)
  })

  it('updates a channel', async () => {
    const updatedChannel = channelsFixture[0]
    await actions[actionTypes.CHANNEL_UPDATE]({ commit }, updatedChannel)
    await flushPromises()
    expect(api.update).toHaveBeenCalledWith(updatedChannel)
    expect(commit).toHaveBeenCalledWith(mutationTypes.CHANNEL_UPDATE, updatedChannel)
  })
})
