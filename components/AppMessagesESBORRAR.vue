<template>
  <div>
    <form>
      Title: <input v-model="title" data-test="new_message_title" type="text" placeholder="Títol">
      Description: <input v-model="description" data-test="new_message_description" type="text" placeholder="Descripció">
      <button @click.prevent="add" data-test="add_button">
        Afegir
      </button>
    </form>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <input v-if="editing === message.id" v-model="newTitle" :data-test="'new_title_' + message.id" @blur="update(message)" type="text">
        <input v-if="editing === message.id" v-model="newDescription" :data-test="'new_description_' + message.id" @blur="update(message)" type="text">
        <span v-else>{{ message.title }} | {{ message.description }}  </span>
        <button :data-test="'delete_button_' + message.id" @click="remove(message)">
          Eliminar
        </button>
        <button :data-test="'update_button_' + message.id" @click="initUpdate(message)">
          Update
        </button>
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
