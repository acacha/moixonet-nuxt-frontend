<template>
  <app-card-with-form>
    <template v-slot:title>
      Si us plau, entreu...
    </template>
    <template v-slot:form>
      <v-card-text>
        <v-form>
          <app-text-field-email-required v-model="email" name="email" label="Correu electrònic"/>

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
import AppTextFieldEmailRequired from '../components/AppTextFieldEmailRequired'
export default {
  name: 'Login',
  layout: 'auth',
  components: {
    'app-card-with-form': AppCardWithForm,
    'app-text-field-email-required': AppTextFieldEmailRequired
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
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
