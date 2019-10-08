<template>
  <div>
    <form>
      Name: <input data-test="new_channel" v-model="newChannel" type="text" placeholder="Introduiu un nom">
      <button data-test="add_button" @click.prevent="add">
        Afegir
      </button>
    </form>
    <ul>
      <li v-for="channel in channels" :key="channel.id">
        <input v-if="editing === channel.id" type="text" v-model="newValue" @blur="update(channel)">
        <span v-else>{{ channel.name }}</span>
        <button @click="remove(channel)" :data-test="'delete_button_' + channel.id">Eliminar</button>
        <button @click="initUpdate(channel)" :data-test="'update_button_' + channel.id">Update</button>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AppChannels',
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      newChannel: '',
      editing: null,
      newValue: ''
    }
  },
  methods: {
    add () {
      // console.log('TODO ADD')
      // 1) Que cal fer al frontend
      // imperatiu / declaratiu
      // Afegir un canal a la llista de canals
      this.channels.push({
        name: this.newChannel
      })
      // 2) Cal fer algo al backend
    },
    remove (channel) {
      this.channels.splice(this.channels.indexOf(channel),1)
    },
    initUpdate(channel) {
      this.editing = channel.id
      this.newValue = channel.name
    },
    update (channel) {
      this.channels[this.channels.indexOf(channel)].name = this.newValue
      this.editing = null
    }
  }
}
</script>
