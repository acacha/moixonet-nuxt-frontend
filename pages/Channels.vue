<template>
  <span>
    <channels-form />
    <channels-list />
  </span>
</template>

<script>
import ChannelsForm from '../components/ChannelsForm.vue'
import ChannelsList from '../components/ChannelsList.vue'
export default {
  middleware: ['auth'],
  name: 'Channels',
  components: {
    'channels-form': ChannelsForm,
    'channels-list': ChannelsList
  }
}
</script>
