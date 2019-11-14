<template>
  <ul>
    <li v-for="channel in channels" :key="channel.id">
      {{ channel.name }} <app-channel-remove :channel="channel" @removed="$emit('removed', channel)" />
    </li>
  </ul>
</template>

<script>
import AppChannelRemove from './AppChannelRemove'

export default {
  name: 'AppChannelsList',
  components: {
    'app-channel-remove': AppChannelRemove
  },
  props: {
    channels: {
      type: Array,
      required: true
    }
  }
}
</script>
