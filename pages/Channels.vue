<template>
  <span>
    <channels-form />
    <channels-list />
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
  }
}
</script>
