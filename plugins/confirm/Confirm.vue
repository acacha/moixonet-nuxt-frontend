<template>
  <v-dialog
    @input="change"
    :max-width="width"
    :persistent="persistent"
    @keydown.esc="choose(false)"
    eager
    value="true"
  >
    <v-card tile>
      <v-toolbar v-if="Boolean(title)" :color="color" dark dense flat>
        <v-icon v-if="Boolean(icon)" left>
          {{ icon }}
        </v-icon>
        <v-toolbar-title v-text="title" class="white--text" />
      </v-toolbar>
      <v-card-text v-html="message" class="body-1 py-3" />
      <v-card-actions>
        <v-spacer />
        <v-btn
          v-if="Boolean(buttonFalseText)"
          :color="buttonFalseColor"
          @click="choose(false)"
          text
        >
          {{ buttonFalseText }}
        </v-btn>
        <v-btn
          v-if="Boolean(buttonTrueText)"
          :color="buttonTrueColor"
          @click="choose(true)"
          text
        >
          {{ buttonTrueText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { VCard, VCardActions, VCardText, VDialog, VIcon, VToolbar, VToolbarTitle, VSpacer, VBtn } from 'vuetify/lib'

export default {
  components: {
    VCard,
    VCardActions,
    VCardText,
    VDialog,
    VIcon,
    VToolbar,
    VToolbarTitle,
    VSpacer,
    VBtn
  },
  props: {
    buttonTrueText: {
      type: String,
      default: 'Confirmar'
    },
    buttonFalseText: {
      type: String,
      default: 'Cancel·lar'
    },
    buttonTrueColor: {
      type: String,
      default: 'primary'
    },
    buttonFalseColor: {
      type: String,
      default: 'grey'
    },
    color: {
      type: String,
      default: 'warning'
    },
    icon: {
      type: String,
      default () {
        return this.$vuetify.icons.values.warning
      }
    },
    message: {
      type: String,
      required: true
    },
    persistent: Boolean,
    title: {
      type: String,
      default: 'PUT YOUR TITLE HERE'
    },
    width: {
      type: Number,
      default: 450
    }
  },
  data () {
    return {
      value: false
    }
  },
  mounted () {
    document.addEventListener('keyup', this.onEnterPressed)
  },
  destroyed () {
    document.removeEventListener('keyup', this.onEnterPressed)
  },
  methods: {
    onEnterPressed (e) {
      if (e.keyCode === 13) {
        e.stopPropagation()
        this.choose(true)
      }
    },
    choose (value) {
      this.$emit('result', value)
      this.value = value
      this.$destroy()
    },
    change (res) {
      this.$destroy()
    }
  }
}
</script>
