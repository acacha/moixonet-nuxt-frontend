<template>
  <span>
    <app-channels-form @added="add" />
    <app-channels-list :channels="channels" />
  </span>
</template>

<script>
import AppChannelsList from '../components/AppChannelsList'
import AppChannelsForm from '../components/AppChannelsForm'
import channelsFixture from '../cypress/fixtures/channels'
export default {
  name: 'Channels',
  components: {
    'app-channels-list': AppChannelsList,
    'app-channels-form': AppChannelsForm
  },
  data () {
    return {
      channels: channelsFixture
    }
  },
  methods: {
    // operació sobre un element d'estat -> commit a Vuex
    add (name) {
      this.channels.push({
        id: 5,
        name
      })
    }
  }
}
</script>
