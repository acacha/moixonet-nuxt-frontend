<template>
  <div>
    <form>
      Title: <input data-test="new_message_title" v-model="title" type="text" placeholder="Títol">
      Description: <input data-test="new_message_description" v-model="description" type="text" placeholder="Descripció">
      <button data-test="add_button" @click.prevent="add">
        Afegir
      </button>
    </form>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <input v-if="editing === message.id" type="text" v-model="newTitle" @blur="update(message)" :data-test="'new_title_' + message.id">
        <input v-if="editing === message.id" type="text" v-model="newDescription" @blur="update(message)" :data-test="'new_description_' + message.id">
        <span v-else>{{ message.title }} | {{ message.description }}  </span>
        <button @click="remove(message)" :data-test="'delete_button_' + message.id">Eliminar</button>
        <button @click="initUpdate(message)" :data-test="'update_button_' + message.id">Update</button>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AppChannels',
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      title: '',
      description: '',
      editing: null,
      newTitle: '',
      newDescription: ''
    }
  },
  methods: {
    add () {
      this.messages.push({
        title: this.title,
        description: this.description
      })
    },
    remove (message) {
      this.messages.splice(this.messages.indexOf(message),1)
    },
    initUpdate(message) {
      this.editing = message.id
      this.newTitle = message.title
      this.newDescription = message.description
    },
    update (message) {
      this.messages[this.messages.indexOf(message)].title = this.newTitle
      this.messages[this.messages.indexOf(message)].description = this.newDescription
      this.editing = null
    }
  }
}
</script>
