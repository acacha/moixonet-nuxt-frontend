<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title data-test="card_title">
        <slot name="title">
          PUT YOUR TITLE HERE
        </slot>
      </v-toolbar-title>
    </v-toolbar>
    <span data-test="card_form">
      <slot name="form" />
    </span>
  </v-card>
</template>

<script>
export default {
  name: 'AppCardWithForm'
}
</script>
