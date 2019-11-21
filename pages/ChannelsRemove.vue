<template>
  <span>
    <channels-form></channels-form>
    <channels-list></channels-list>
  </span>
</template>

<script>
import ChannelsList from '../components/ChannelsList'
import ChannelsForm from '../components/ChannelsForm'

export default {
  middleware: ['auth'],
  name: 'Channels',
  components: {
    'channels-list': ChannelsList,
    'channels-form': ChannelsForm
  },
  computed: {
    channels () {
      return this.$store.state.channels.list
    }
  },
  methods: {
    // operació sobre un element d'estat -> commit a Vuex
    add (name) {
      this.channels.push({
        id: 5,
        name
      })
    },
    remove (channel) {
      this.channels.splice(this.channels.indexOf(channel), 1)
    }
  }
}
</script>
