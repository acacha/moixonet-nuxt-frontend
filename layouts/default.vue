<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-row
            v-if="item.heading"
            :key="i"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-right"
            />
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          />
          <v-list-item
            v-else
            :key="i"
            :to="item.to"
            link
            nuxt
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-right
      clipped-left
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Moixonet</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="left"
      fixed
      temporary
    />

    <v-content>
      <nuxt />
    </v-content>

    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    />

    <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-access-point</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>TODO PERFIL</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      app
      color="blue-grey"
      class="white--text"
    >
      <span>Vuetify</span>
      <v-spacer />
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Default',
  data: () => ({
    drawer: false,
    drawerRight: false,
    right: false,
    left: false,
    items: [
      { icon: 'mdi-home', text: 'Home', to: '/home' },
      { heading: 'Administració' },
      { divider: true },
      { icon: 'mdi-access-point', text: 'Canals', to: '/channels' },
      { icon: 'mdi-message', text: 'Missatges', to: '/messages' },
      { icon: 'mdi-message', text: 'Sobre nosaltres', to: '/about' },
      { icon: 'mdi-message', text: 'Contact', to: '/contact' }
    ]
  }),
  created () {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.user = this.$auth.user
    }
  }
}
</script>
