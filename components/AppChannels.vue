<template>
  <div>
<!--    <form action="/api/v1/channels" method="POST"></form>-->
    <form>
      Name: <input type="text" placeholder="Introduiu un nom">
      <button>Afegir</button>
    </form>
    <ul>
      <li v-for="channel in channels" :key="channel.id">
        {{ channel.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppChannels',
  props: {
    channels: {
      type: Array,
      required: true
    }
  }
}
</script>
