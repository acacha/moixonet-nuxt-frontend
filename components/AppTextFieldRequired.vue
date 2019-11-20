<template>
  <v-text-field
    :value="value"
    :error-messages="errors"
    @input="$v.value.$touch()"
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
    name: { required }
  },
  props: {
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
      if (!this.$v.value.$dirty) { return errors }
      !this.$v.name.required && errors.push('Camp ' + this.name + ' obligatori')
      return errors
    }
  },
  methods: {
    onInput () {
      this.$v.name.$touch()
      this.$emit('input', this.value)
    }
  }
}
</script>
