<template>
  <v-container>
    <v-card>
      <v-toolbar dense color="primary">
        <v-toolbar-title class="white--text">Llista de canals</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text icon class="white--text" @click="refresh" :loading="loading">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-toolbar-items>

      </v-toolbar>
      <v-list>
        <v-list-item v-for="channel in channels">
          {{ channel.name }}
        </v-list-item>
        <v-card-actions>
          <v-btn @click="omplir" color="primary">
            Omplir
          </v-btn>
          <v-btn @click="buidar" color="error">
            Buidar
          </v-btn>
          <v-btn @click="refresh">
            refresh
          </v-btn>
        </v-card-actions>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
// import axios from 'axios'
import channelsFixture from '../cypress/fixtures/channels'
export default {
  name: 'ChannelsList',
  data () {
    return {
      loading: false
    }
  },
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
    async refresh () {
      this.loading = true
      await this.$store.dispatch('channels/REFRESH')
      this.loading = false
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
