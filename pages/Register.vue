<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title data-test="auth_login_card_title">Creeu un usuari</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          data-test="username"
          label="Nom d'usuari"
          name="username"
          prepend-icon="mdi-account"
          type="text"
        />

        <v-text-field
          data-test="email"
          label="Correu electrònic"
          name="login"
          prepend-icon="mdi-account"
          type="text"
        />

        <v-text-field
          data-test="password"
          id="password"
          label="Paraula de pas"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <nuxt-link to="/login">Ja tinc un usuari</nuxt-link>
      <v-spacer />
      <v-btn color="primary" data-test="login-button">
        Registrar-se
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth'
}
</script>

<style scoped>

</style>
