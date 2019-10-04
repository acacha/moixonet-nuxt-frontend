<template>
  <div>
    <app-channels :channels="channels"></app-channels>
  </div>
</template>

<script>
// import axios from 'axios'
import channelsFixture from '../cypress/integration/fixtures/channels'
import AppChannels from '../components/AppChannels'

export default {
  name: 'Channels',
  components: {
    'app-channels': AppChannels
  },
  data () {
    return {
      // FIXTURES
      channels: channelsFixture
    }
  },
  created () {
    // PROMISES
    // axios.get('http://moixonet-backend.test/api/v1/channels').then((response) => {
    //   this.channels = response.data
    // })
    //   .catch((error) => {
    //     // console.log(error)
    //   })
  }
}
</script>
