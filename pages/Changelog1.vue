<template>
  <v-card>
    <v-timeline dense clipped>
      <!--<v-slide-x-transition group> // TODO NO VA!! -->
      <v-data-iterator
        :search="search"
        :items="timeline"
        no-results-text="No s'ha trobat cap registre coincident"
        no-data-text="No hi han dades disponibles"
        row
        wrap
      >
        <!--        :rows-per-page-items="rowsPerPageItems"-->
        <!--        :pagination.sync="pagination"-->
        <!--        rows-per-page-text="Registres per pàgina"-->
        <v-timeline-item
          slot="item"
          slot-scope="{ item: log}"
          :key="log.id"
          :color="log.color"
          :icon="log.icon"
          class="mb-3"
          small
        >
          <v-layout justify-space-between>
            <v-flex xs2 text-xs-left align-self-center>
              <template v-if="log.user_name">
                <user-photo
                  :hash-id="log.user_hashid"
                  :alt="log.user_name"
                  class="mr-2"
                />
                <span :title="log.user_email">{{ log.user_name }}</span>
              </template>
              <template v-else>
                Cap usuari
              </template>
            </v-flex>
            <v-flex xs1 text-xs-left align-self-center>
              <timeago v-if="realTime" :title="log.formatted_time" :datetime="typeof log.time === 'object' ? log.time.date : log.time" :auto-update="1" :converterOptions="{ includeSeconds: true }" />
              <span :title="log.formatted_time" v-else>{{ log.human_time }}</span>
            </v-flex>
            <v-flex v-html="log.text" xs4 text-xs-left align-self-center />
            <v-flex xs1 text-xs-left align-self-center>
              <compare-values :log="log" name="Compara" title="Compara valor àntic i valor nou" />
            </v-flex>
            <v-flex xs1 text-xs-left align-self-center>
              <json-dialog v-if="log.loggable" :json="log.loggable" name="Actual" title="Objecte actual" />
              <json-dialog v-else :json="{}" name="Actual" title="Objecte actual" />
            </v-flex>
            <v-flex xs1 text-xs-left align-self-center>
              <json-dialog v-if="log.new_loggable" :json="JSON.parse(log.new_loggable)" name="Nou" title="Objecte nou" />
              <json-dialog v-else :json="{}" name="Nou" title="Objecte nou" />
            </v-flex>
            <v-flex xs1 text-xs-left align-self-center>
              <json-dialog v-if="log.old_loggable" :json="JSON.parse(log.old_loggable)" name="Àntic" title="Objecte en el moment de la modificació" />
              <json-dialog v-else :json="{}" name="Àntic" title="Objecte en el moment de la modificació" />
            </v-flex>
            <v-flex xs1 text-xs-left align-self-center>
              <v-btn :href="log.module_href" :target="log.module_target" icon>
                <v-icon :title="'Mòdul ' + log.module_text">
                  {{ log.module_icon }}
                </v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs1 text-xs-left align-self-center>
              <v-icon :title="'Acció: ' + log.action_text">
                {{ log.action_icon }}
              </v-icon>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-data-iterator>
      <!--</v-slide-x-transition>-->
    </v-timeline>
  </v-card>
</template>

<script>
export default {
  name: 'Changelog',
  data () {
    return {
      search: '',
      rowsPerPageItems: [ 10, 25, 50, 100, 500, 1000, { 'text': 'Tots', 'value': -1 } ],
      pagination: {
        rowsPerPage: 10
      },
      dataLogs: [
        {},
        {}
      ]
    }
  },
  computed: {
    timeline () {
      return this.dataLogs.slice().reverse()
    }
  }
}
</script>

<style scoped>

</style>
