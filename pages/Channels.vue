<template>
  <div>
    <button @click="refresh">
      Refresh
    </button>
    <app-channels :channels="channels" />
  </div>
</template>

<script>
import axios from 'axios'
// import channelsFixture from '../cypress/integration/fixtures/channels'
import AppChannels from '../components/AppChannels'

export default {
  middleware: ['auth'],
  name: 'Channels',
  components: {
    'app-channels': AppChannels
  },
  data () {
    return {
      // FIXTURES
      // channels: channelsFixture,
      channels: []
    }
  },
  created () {
    // PROMISES
    this.refresh()
  },
  methods: {
    refresh () {
      axios.get('http://moixonet-backend.test/api/v1/channels').then((response) => {
        this.channels = response.data
      })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
