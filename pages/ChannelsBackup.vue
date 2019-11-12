<template>
  <div>
    <button @click="refresh">
      Refresh
    </button>
    <app-channels :channels="channels" />
  </div>
</template>

<script>
// import channelsFixture from '../cypress/integration/fixtures/channels'
import AppChannels from '../components/AppChannels'

export default {
  // middleware: ['auth'],
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
  async asyncData ({ $axios }) {
    const { data } = await $axios.get(process.env.LARAVEL_ENDPOINT + '/api/v1/channels')
    return { channels: data }
  },
  methods: {
    refresh () {
      this.$axios.get('http://moixonet-backend.test/api/v1/channels').then((response) => {
        this.channels = response.data
      })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error)
        })
    }
  }
}
</script>
