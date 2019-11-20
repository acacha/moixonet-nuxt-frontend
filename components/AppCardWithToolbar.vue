<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title data-test="auth_login_card_title">
        <slot name="title">
          PUT YOUR TITLE HERE
        </slot>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <slot name="text">
        PUT YOUR CARD TEXT HERE
      </slot>
    </v-card-text>
    <v-card-actions>
      <slot name="actions">
        PUT YOUR CARD ACTIONS HERE
      </slot>
    </v-card-actions>
  </v-card>
</template>
