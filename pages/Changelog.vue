<template>
  <v-container fluid>
    <v-card>
      <v-toolbar dense color="primary" class="white--text">
        <v-toolbar-title>Registre de canvis</v-toolbar-title>
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
  }
}
</script>
