<template>
  <v-text-field
    :value="value"
    :error-messages="errors"
    @input="onInput"
    @blur="$v.value.$touch()"
    :name="name"
    :label="label"
    data-test="text_field_required"
    required
  />
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'AppTextFieldRequired',
  validations: {
    value: { required }
  },
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    errors () {
      const errors = []
      if (!this.$v.value.$dirty) { return errors } // dirty indica si s'ha canviat/tocat el camp
      !this.$v.value.required && errors.push('El camp ' + this.name + ' és obligatori')
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
