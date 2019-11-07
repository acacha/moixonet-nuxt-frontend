<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title data-test="auth_login_card_title">
        Recordar paraula de pas
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          data-test="email"
          label="Correu electrònic"
          name="login"
          prepend-icon="mdi-account"
          type="text"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <nuxt-link to="/register">
        Registrar-se
      </nuxt-link>&nbsp;<nuxt-link to="/login">
        Login
      </nuxt-link>
      <v-spacer />
      <v-btn color="primary" data-test="login-button">
        Recordar paraula de pas
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  layout: 'auth',
  name: 'PasswordReset'
}
</script>
