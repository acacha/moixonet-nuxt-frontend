/* eslint-disable no-console */
import * as mutations from '../mutation-types'

export default function ({ $axios, redirect, store, app }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
    store.commit('axios/' + mutations.SET, { key: 'loading', value: true })
  })

  $axios.onError((error) => {
    console.log('ERROR!')
    console.log(error)
    // TODO
    // app.$snackbar.showError(error)
    // const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   redirect('/400')
    // }
  })
}
