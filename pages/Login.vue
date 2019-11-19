<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title data-test="auth_login_card_title">
        Si us plau, entreu...
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          data-test="auth_login_input_email"
          label="Correu electrònic"
          name="login"
          prepend-icon="mdi-email"
          type="text"
        />

        <v-text-field
          id="password"
          v-model="password"
          data-test="auth_login_input_password"
          label="Paraula de pas"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <nuxt-link to="/register">
        Registrar-se
      </nuxt-link>&nbsp;<nuxt-link to="/password/reset">
        Recordar paraula de pas
      </nuxt-link>
      <v-spacer />
      <v-btn :loading="loading" @click="login" color="primary" data-test="auth_login_button_login">
        Entrar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      }).then(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
