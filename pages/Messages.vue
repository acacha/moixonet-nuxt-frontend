<template>
  <div>
    <app-messages :messages="messages" />
  </div>
</template>

<script>
// import axios from 'axios'
import messagesFixture from '../cypress/integration/fixtures/messages'
import AppMessages from '../components/AppMessages'

export default {
  middleware: ['auth'],
  name: 'Messages',
  components: {
    'app-messages': AppMessages
  },
  data () {
    return {
      // FIXTURES
      messages: messagesFixture
    }
  },
  created () {
    // PROMISES
    // axios.get('http://moixonet-backend.test/api/v1/messages').then((response) => {
    //   this.messages = response.data
    // })
    //   .catch((error) => {
    //     // console.log(error)
    //   })
  }
}
</script>
