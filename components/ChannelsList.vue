<template>
  <ul>
    <li v-for="channel in channels" :key="channel.id">{{ channel.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ChannelsList',
  props: {
    channels: {
      type: Array,
      required: true
    }
  }
}
</script>
