<template>
  <v-text-field
    :value="value"
    :error-messages="errors"
    @input="onInput"
    @blur="$v.value.$touch()"
    :name="name"
    :label="label"
    :data-test="dataTest"
    required
    prepend-icon="mdi-email"
  />
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'AppTextFieldEmailRequired',
  validations: {
    value: { required, email }
  },
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Correu electrònic'
    },
    name: {
      type: String,
      default: 'email'
    },
    dataTest: {
      type: String,
      default: 'email_field_required'
    }
  },
  data () {
    return {
      email: ''
    }
  },
  computed: {
    errors () {
      const errors = []
      if (!this.$v.value.$dirty) { return errors } // dirty indica si s'ha canviat/tocat el camp
      !this.$v.value.required && errors.push('El camp ' + this.name + ' és obligatori')
      !this.$v.value.email && errors.push('El camp ' + this.name + ' ha de ser un email vàlid')
      return errors
    }
  },
  methods: {
    onInput () {
      this.$v.value.$touch()
      this.$emit('input', arguments[0])
    }
  }
}
</script>
