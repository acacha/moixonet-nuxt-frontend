<template>
  <span>
    <channels-form />
    <channels-list />
  </span>
</template>

<script>
import ChannelsList from '../components/ChannelsList'
import ChannelsForm from '../components/ChannelsForm'
import api from '../api/channels'
import * as mutationTypes from '../mutation-types'

export default {
  middleware: ['auth'],
  name: 'Channels',
  components: {
    'channels-list': ChannelsList,
    'channels-form': ChannelsForm
  },
  async fetch ({ store, params }) {
    const { data } = await api.index()
    store.commit('channels/' + mutationTypes.CHANNELS_INDEX, data)
    // TODO PQ NO FUNCIONA??
    // store.dispatch('channels/' + actionTypes.CHANNELS_INDEX)
  }
}
</script>
