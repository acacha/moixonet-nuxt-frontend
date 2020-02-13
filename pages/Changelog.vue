<template>
  <v-container fluid>
    <v-card>
      <v-toolbar dense color="primary" class="white--text">
        <v-toolbar-title>Registre de canvis</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" @click="refresh" icon dark>
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Actualitzar el registre de canvis</span>
          </v-tooltip>
        </v-toolbar-items>
      </v-toolbar>
      <v-timeline dense clipped>
        <v-data-iterator
          :search="search"
          :items="items"
        >
          <v-timeline-item
            slot="item"
            slot-scope="{ item : log }"
            :key="log.id"
            :icon="log.icon"
            :color="log.color"
            small
          >
            <v-container>
              <v-row>
                <v-col xs2>
                  {{ log.user_name }}
                </v-col>
                <v-col xs2>
                  {{ log.date_for_humans }}
                </v-col>
                <v-col xs2>
                  {{ log.description }}
                </v-col>
                <v-col xs2>
                  4
                </v-col>
                <v-col xs2>
                  5
                </v-col>
                <v-col xs2>
                  6
                </v-col>
              </v-row>
            </v-container>
          </v-timeline-item>
        </v-data-iterator>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<script>
import * as actionTypes from '../action-types'
export default {
  name: 'Changelog',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    items () {
      return this.$store.getters['changelog/list']
    }
  },
  methods: {
    async refresh () {
      // this.loading = true
      try {
        // const response = await this.$store.dispatch('changelog/index')
        // this.items = response.data
        await this.$store.dispatch('changelog/' + actionTypes.CHANGELOG_INDEX)
        this.$snackbar.showMessage('Registre de canvis actualitzat correctament')
      } catch (error) {
        console.log(error)
        // this.$snackbar.showError('Something happen')
      }
      // this.loading = false
    }
    // refreshOld () {
    //   // this.$store.dispatch('changelog/index').then().catch()
    // }
  }
}
</script>
