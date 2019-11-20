<template>
  <app-card-with-form>
    <template v-slot:title>
      Si us plau, entreu...
    </template>
    <template v-slot:form>
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
    </template>
  </app-card-with-form>
</template>

<script>
import AppCardWithForm from '../components/AppCardWithForm'
export default {
  name: 'Login',
  layout: 'auth',
  components: {
    'app-card-with-form': AppCardWithForm
  },
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
      }).catch((error) => {
        this.$snackbar.showError(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
