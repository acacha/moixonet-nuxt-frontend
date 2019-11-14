<template>
  <ul>
    <li v-for="channel in channels" :key="channel.id">{{ channel.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'VChannelsList',
  props: {
    channels: {
      type: Array,
      required: true
    }
  }
}
</script>
