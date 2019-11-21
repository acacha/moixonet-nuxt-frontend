<template>
  <app-channels-form @added="add" />
</template>

<script>
import * as actionTypes from '../action-types'
import AppChannelsForm from './AppChannelsForm'

export default {
  name: 'ChannelsForm',
  components: {
    'app-channels-form': AppChannelsForm
  },
  methods: {
    add (channel) {
      this.$store.dispatch('channels/' + actionTypes.CHANNEL_STORE, channel)
    }
  }
}
</script>
