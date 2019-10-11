<template>
  <div>
    <form>
      Name: <input v-model="newChannel" data-test="new_channel" type="text" placeholder="Introduïu un nom">
      <button data-test="add_button" @click.prevent="add">
        Afegir
      </button>
    </form>
    <ul>
      <li v-for="channel in filteredChannels" :key="channel.id">
        <input type="checkbox" :checked="channel.active" @click="toggle(channel)">
        <input
          v-if="editing === channel.id"
          v-model="newValue"
          type="text"
          :data-test="'new_value_' + channel.id"
          @keyup.enter="update(channel)"
          @blur="update(channel)"
        >
        <span v-else>{{ channel.name }}</span>
        <button :data-test="'delete_button_' + channel.id" @click="remove(channel)">
          Eliminar
        </button>
        <button :data-test="'update_button_' + channel.id" @click="initUpdate(channel)">
          Update
        </button>
      </li>
    </ul>
    Total: {{ total }}
    <ul>
      <li><a href="#" @click="filter='all'">All</a></li>
      <li><a href="#" @click="filter='active'">Active</a></li>
      <li><a href="#" @click="filter='disabled'">Disable</a></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */

// visibility filters
var filters = {
  all: function (channels) {
    return channels
  },
  active: function (channels) {
    return channels.filter(function (channel) {
      return channel.active
    })
  },
  disabled: function (channels) {
    return channels.filter(function (channel) {
      return !channel.active
    })
  }
}

export default {
  name: 'AppChannels',
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  computed: {
    total() {
      return this.channels.length
    },
    filteredChannels() {
      return filters[this.filter](this.channels)
    }
  },
  data () {
    return {
      newChannel: '',
      editing: null,
      newValue: '',
      filter: 'all'
    }
  },
  methods: {
    toggle (channel) {
      this.channels[this.channels.indexOf(channel)].active = !channel.active
      if (!channel.active) this.disable(channel)
      else this.active(channel)
    },
    disable (channel) {
      axios.delete('http://moixonet-backend.test/api/v1/active_channels/' + channel.id).then(() => {
        console.log('OK!')
      }).catch(() => {
        // ALERT
        console.log('ERROR!')
      })
    },
    active (channel) {
      axios.post('http://moixonet-backend.test/api/v1/active_channels/' + channel.id).then(() => {
        console.log('OK!')
      }).catch(() => {
        // ALERT
        console.log('ERROR!')
      })
    },
    add () {
      // console.log('TODO ADD')
      // 1) Que cal fer al frontend
      // imperatiu / declaratiu
      // Afegir un canal a la llista de canals
      // JAVASCRIPT ASYNC -> CALLBACKS -> PROMISES -> ASYNC/AWAIT
      axios.
        post('http://moixonet-backend.test/api/v1/channels',{name: this.newChannel}).
        then((response) => {
        // eslint-disable-next-line
        console.log('OK!!')
        this.channels.push(response.data)
      }).catch(error => {
        // eslint-disable-next-line
        console.log(error)
        // TODO -> ALERT/ SNACKBAR / AVIS
      })
      // $reponse = $this->json('POST','/api/v1')
    },
    remove (channel) {
      this.channels.splice(this.channels.indexOf(channel),1)
      axios.
      delete('http://moixonet-backend.test/api/v1/channels/' + channel.id).
      then(() => {
        // eslint-disable-next-line
        console.log('OK!!')
      }).catch(error => {
        // eslint-disable-next-line
        console.log(error)
        // TODO -> ALERT/ SNACKBAR / AVIS
      })
    },
    initUpdate(channel) {
      this.editing = channel.id
      this.newValue = channel.name
    },
    update (channel) {
      this.channels[this.channels.indexOf(channel)].name = this.newValue
      this.editing = null
      axios.
      put('http://moixonet-backend.test/api/v1/channels/' + channel.id,{name: this.newValue}).
      then(() => {
        // eslint-disable-next-line
        console.log('OK!!')
      }).catch(error => {
        // eslint-disable-next-line
        console.log(error)
        // TODO -> ALERT/ SNACKBAR / AVIS
      })
    }
  }
}
</script>
