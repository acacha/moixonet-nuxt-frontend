<template>
    <channels-list :channels="channels"/>
</template>

<script>
import ChannelsList from '../components/ChannelsList'
import channelsFixture from '../cypress/fixtures/channels'
export default {
  name: 'Channels',
  components: {
    'channels-list': ChannelsList
  },
  data () {
    return {
      channels: channelsFixture
    }
  }
}
</script>
