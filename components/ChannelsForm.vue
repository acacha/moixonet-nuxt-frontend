<template>
  <span>
    <v-btn @click="show = !show" small fab dark color="accent">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="show" width="500px">
      <v-card>
        <v-toolbar dense color="primary">
          <v-toolbar-title class="white--text">Afegeix un canal</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-form>
            <v-text-field name="name" label="Nom" placeholder="Nom" />
          </v-form>
        </v-container>
        <v-card-actions>
          <v-btn @click="show = !show">Tancar</v-btn>
          <v-btn color="primary">Afegir</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </span>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
