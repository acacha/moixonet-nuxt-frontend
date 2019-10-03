<template>
  <div>
    <ul>
      <li v-for="channel in channels" :key="channel">{{channel}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Channels',
  data () {
    return {
      channels: [
        'Canal 1',
        'Canal 2',
        'Canal 3'
      ]
    }
  }
}
</script>
