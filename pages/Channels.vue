<template>
  <span>
    <channels-form></channels-form>
    <channels-list :channels="channels"/>
  </span>
</template>

<script>
import ChannelsList from '../components/ChannelsList'
import ChannelsForm from '../components/ChannelsForm'
import channelsFixture from '../cypress/fixtures/channels'
export default {
  name: 'Channels',
  components: {
    'channels-list': ChannelsList,
    'channels-form': ChannelsForm
  },
  data () {
    return {
      channels: channelsFixture
    }
  }
}
</script>
