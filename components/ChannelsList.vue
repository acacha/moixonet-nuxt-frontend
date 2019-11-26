<template>
  <ul>
    <li v-for="channel in channels">
      {{ channel.name }}
    </li>
    <button @click="omplir">
      Omplir
    </button>
    <button @click="buidar">
      Buidar
    </button>
    <button @click="refresh">
      refresh
    </button>
  </ul>
</template>

<script>
// import axios from 'axios'
import channelsFixture from '../cypress/fixtures/channels'
export default {
  name: 'ChannelsList',
  computed: {
    channels () {
      // return []
      return this.$store.getters['channels/channels']
    }
  },
  created () {
    this.refresh()
  },
  methods: {
    omplir () {
      // MODIFICAR L'ESTAT
      this.$store.commit('channels/SET_CHANNELS', channelsFixture)
    },
    buidar () {
      // MODIFICAR L'ESTAT
      this.$store.commit('channels/SET_CHANNELS', [])
    },
    refresh () {
      this.$store.dispatch('channels/REFRESH')
    },
    async refreshold () {
      try {
        const channels = await this.$axios.get('http://moixonet-backend.test/api/v1/channels')
        this.$store.commit('channels/SET_CHANNELS', channels.data)
      } catch (error) {
        console.log(error)
      }
    },
    refreshPromise () {
      this.$axios.get('http://moixonet-backend.test/api/v1/channels').then((channels) => {
        this.$store.commit('channels/SET_CHANNELS', channels.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
