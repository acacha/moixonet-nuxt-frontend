<template>
  <app-channels-list :channels="channels" @removed="remove" />
</template>

<script>
import * as actionTypes from '../action-types'
import AppChannelsList from './AppChannelsList'

export default {
  name: 'ChannelsList',
  components: {
    'app-channels-list': AppChannelsList
  },
  computed: {
    channels () {
      return this.$store.state.channels.list
    }
  },
  methods: {
    remove (channel) {
      this.$store.dispatch('channels/' + actionTypes.CHANNEL_DESTROY, channel)
    }
  }
}
</script>
