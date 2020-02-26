<template>
  <v-app light>
    <v-app-bar>
      <v-app-bar-nav-icon />
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer />
      <v-btn text nuxt to="/login">
        Login
      </v-btn>
      <v-btn text class="pink lighten-3" nuxt to="/logout">
        Logout
      </v-btn>
    </v-app-bar>
    <v-toolbar>
      <v-toolbar-title>PROVA</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text nuxt to="/login">
          Login
        </v-btn>
        <v-btn text class="pink lighten-3" nuxt to="/logout">
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax
          src="https://images.unsplash.com/photo-1582092605221-bf4ddf388587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          heigth="600"
        >
          <v-row align="center" justify="center">
            <h1 class="display-1" style="font-weight: 900;text-shadow: 3px 2px #000000">
              Moixonet la nova app per a totes les teves notificacions!!!
            </h1>
            <div>
              <v-btn dark large class="mt-5 blue lighten-2">
                GET STARTED
              </v-btn>
            </div>
          </v-row>
        </v-parallax>
      </section>
      <section>
        <v-container fluid grid-list-xl>
          <v-row>
            <v-col :lg="4" cols="12">
              <v-card class="elevation-5  transparent">
                <v-card-title class="layout justify-center">Vecinos informados al instante</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores earum eius facilis fuga fugiat fugit hic illum ipsa ipsum modi mollitia, nam, nesciunt, odit porro repellendus sint voluptatum! Veniam.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :lg="4" cols="12">
              <v-card>
                <v-card-title class="layout justify-center">Herramienta esencial en emergencias y crisis</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores earum eius facilis fuga fugiat fugit hic illum ipsa ipsum modi mollitia, nam, nesciunt, odit porro repellendus sint voluptatum! Veniam.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :lg="4" cols="12">
              <v-card>
                <v-card-title class="layout justify-center">Participación ciudadana</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores earum eius facilis fuga fugiat fugit hic illum ipsa ipsum modi mollitia, nam, nesciunt, odit porro repellendus sint voluptatum! Veniam.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section>
        SECCIÓ 3
      </section>
      <section>
        <v-parallax
          src="https://images.unsplash.com/photo-1582210444264-a38ede08cedc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          heigth="600"
        >
          <v-row align="center" justify="center">
            <h1 class="display-1" style="font-weight: 900;text-shadow: 3px 2px #000000">
              La hostia!
            </h1>
          </v-row>
          <v-row align="center" justify="center">
            <v-btn dark large class="mt-5 teal lighten-2">
              More info
            </v-btn>
          </v-row>
        </v-parallax>
      </section>
    </v-content>
    <v-footer class="blue darken-2">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">
              mdi-heart
            </v-icon> using
            <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
<!--  <v-app light>-->
<!--    <v-toolbar class="white">-->
<!--      <v-toolbar-side-icon><img alt="Vuetify.js" height="100%"></v-toolbar-side-icon>-->
<!--      <v-toolbar-title v-text="title" class="mx-0" />-->
<!--      <p>Beta</p>-->
<!--      <v-spacer />-->
<!--      <v-toolbar-items>-->
<!--        <v-btn flat>-->
<!--          Open jobs-->
<!--        </v-btn>-->
<!--        &lt;!&ndash;<v-btn flat>Blog</v-btn>&ndash;&gt;-->
<!--        <v-btn flat class="pink lighten-3">-->
<!--          Sign In-->
<!--        </v-btn>-->
<!--      </v-toolbar-items>-->
<!--    </v-toolbar>-->
<!--  </v-app>-->
<!--  <div class="container">-->
<!--    TODO LANDING PAGE-->

<!--    <nuxt-link to="/channels">-->
<!--      Canals-->
<!--    </nuxt-link>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'Index',
  layout: 'landing'
}
</script>
