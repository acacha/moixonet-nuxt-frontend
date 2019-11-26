import Vue from 'vue'
import { EventBus } from './event-bus.js'

// this helps WebStorm with autocompletion, otherwise it's not needed
Vue.prototype.$eventBus = EventBus

export default ({ app }, inject) => {
  inject('eventBus', EventBus)
}

// USE WITH
// this.$eventBus.$emit || this.$eventBus.$on
