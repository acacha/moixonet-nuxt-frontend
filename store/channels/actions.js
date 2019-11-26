// import channelsFixture from '../../cypress/fixtures/channels'
const actions = {
  async 'REFRESH' (context) {
    console.log('REFRESHING!!!!')
    console.log(context)
    // context.commit('SET_CHANNELS', [])
    // context.commit('SET_CHANNELS', channelsFixture)
    try {
      const channels = await this.$axios.get('http://moixonet-backend.test/api/v1/channels')
      console.log(channels)
      context.commit('SET_CHANNELS', channels.data)
      //   this.$store.commit('channels/SET_CHANNELS', channels.data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default actions
