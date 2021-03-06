# RESUM NUXT/ASYNC DATA/VUEX

- Veure el curs: https://vueschool.io/courses/async-data-with-nuxtjs
- Javascript porta de serie fetch() per fer peticions Ajax/XHR (no cal instal·lar res)
  - Se sol i nosaltres utilitzarem però la llibreria axios (cal instal·lar). NOTA: nuxt porta un mòdul que és el que utilitzarem
- SSR:
  - No utilitzare, el típic sistema de cridar a peticions axios.get als mètodes mounted/created
    - NO SEO optimized
  - Amb SSR cal utilitzar mètodes propis nuxt: asyncData() o fetch()
    - asyncData() estableix amb el seu valor de retorn data (de fet fa un merge entre data local i data fetched) -> UTILITZAR SENSE VUEX
    - fetch()-> no fa merge de data -> UTILITZAR AMB VUE PER FER ELS COMMITS de l'estat VUEX
- Comprovar la diferència utilitzar asyncData vs fetch/axios a mounted: 
  - Posar informació a les capçaleres HTML HEAD i veure al consultar el codi font original que les dades no hi són!
        
# VUEX

- Esquema com funciona: https://vuex.vuejs.org/vuex.png
- NUXT: https://nuxtjs.org/guide/vuex-store/
  - Obliga a treballar amb mòdules
  - Cada fitxer és un mòdul
- Mètodes: 
  - Estat: mapState i spreadOperator: https://vuex.vuejs.org/guide/state.html
  - Getters: mapGetters https://vuex.vuejs.org/guide/getters.html
  - Mutations: commit, mapMutations https://vuex.vuejs.org/guide/mutations.html
    - ús de constants: https://vuex.vuejs.org/guide/mutations.html#using-constants-for-mutation-types
  - Actions: dispatch, maActions https://vuex.vuejs.org/guide/actions.html
  - Modules: Prefix/namespace per a tenir l'store repartida: https://vuex.vuejs.org/guide/modules.html
  - Using computed setter/getter amb v-model: https://vuex.vuejs.org/guide/forms.html#two-way-computed-property    

NUXT AXIOS:
- https://axios.nuxtjs.org/
  - $axios.$get
  - Store actions: this.$axios.$get
  - nuxtServerInit: https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action
- Complica els tests, cal preparar la api per poder injectar/canviar el client:
  - Als testos unitaris el client serà un axios normal (no cal autenticació pq de fet utilitzem nock i el api endpoint no s'executa realment mai)
  - Crear un plugin **plugins/api.js** que defineixi que el client és el mòdul axios de nuxt ($nuxt)

```  
import { setClient } from '../api/apiClient'

export default ({ app, store }) => {
  setClient(app.$axios)
}
```

DOTENV:
- Vue: https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code
- NUXT: https://nuxtjs.org/api/configuration-env/
- Dotenv
  
TDD:
- https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-3-7a68ad3f5fb1
- Mòduls:
  - channels.js
  - messages.js
- Fixtures:
  - channels
- Component intel.ligent Channels (channels.spec.js):
  - Incorporar Store i initial state al test
    - Canviar a Channels.vue l'estat local ( apartat data) channels per els channels de l'store
    - Refactoritzar Channels.spec.js: 
      - Pàgina channel es converteix en un pàgina dumb que només conté layout de subpàgines inteligents:
        - <channels-form></channels-form>
        - <channels-list></channels-list>   
  - ACTIONS:
    - CHANNEL_STORE
    - CHANNEL_DESTROY
    - CHANNEL_UPDATE
    - CHANNEL_INDEX
    - CHANNEL_SHOW
    - TODO: edit
- API TESTING
  - https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-4-700a4269e368
  - Crear carpeta api a tests
  - Crear api_channels.spec.js
  - npm install --save-dev nock
  - Utilitzar environment per establir la URL de la API    
  -     console.log(process.env) console.log(process.env.VUE_APP_LARAVEL_ENDPOINT)

# GUIA 21 novembre
- Repàs últim dia:
  - Pàgina login: mostrar missatges snackbar quan login correcte i login incorrecte
  - Event Bus: creació d'un plugin i exemple ús event bus
  - Snackbar:
    - Creació component dummy (Appsnackbar) i els seus testos
    - AppSnackbar s'utilitza als layouts: component aporta inteligència: connexió amb Event bus per mostrar snackbar
    - Creació d'un plugin per injectar this.$snackbar i facilitar l'ús snackbar

TRAITS/MIXINS

Reutilitzar codi:
- Utilitzar per evitar codi web registre snackbar a layouts: auth i default
  - Nom mixin: HasSnackbar mou el codi de mounted i la funció de register del listers

- Vue 3

EXTENDS    

TEST PÀGINA LOGIN:

- Copiar test del exemple professor: test
- Explicació stubs, spies i similars per provar els components de forma isolada: sense executar serveis de tercers, plugins, peticions axios, etc.
  - Vuetify:
    - Mocking de vuetify (serveis/plugins interns Vuetify) per evitar errors.
  - Nuxt:
    - Stub de nuxt-link (a projectes Vue seria stub de vue-router)
  - Serveis externs/plugins pàgina login:
    - $auth
    - $snackbar    
  - Stubs de funcions simples:jest.fn()
  - Stubs de promeses: jest.fn().mockImplementation(() => Promise.resolve())
  
EXEMPLE SLOTS:
- Compositions
- AppCardWithForm: Card que conté un formulari. reutilitzarem sovint per exemple per pàgina Register similar a pàgina login  
  
Detalls UI
- Component UI
 - Email field: compositions de 
   - required
   - email
 - Username field
   - required
 - Per a passwords:
  - Password input afegir icona ull permeti mostrar o no paraula de pas
  - Comptador de caràcters
  - https://vuetifyjs.com/en/components/text-fields#password-input
  - Per composició crear component que sigui conjunt de dos camps password i password confirmation
  
TEST E2E LOGIN amb Cypress | VUELIDATE:
- Falta mostrar missatges validació
- Paquet a utilitzar: vuelidate https://vuelidate.js.org

``` 
npm install vuelidate --save
``` 

**plugins/vuelidate.js**:

```
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
```
File **nuxt.config.js**:

plugins: [
     '~/plugins/Vuelidate'
  ]
  
Exemple ús:

```
https://codepen.io/paulpv/pen/qoKoKV  
```

- Exemple fet camp email formulari LOGIN
- Fer input field password a mida
- No poder enviar (boto enviar disabled) formulari de login si les dades no són vàlides

Components:
 
- app-text-field-required
  
COMPONENTS DIALOG:
- Dos dialogs similar amb codi wet
- refactor to dry with composition: https://learn.adamwathan.com/advanced-vue/extending-components-using-composition

# GUIA 18 novembre

- Vuetify: Video vuemastery: https://vuetifyjs.com/en/
- git status? tot net i pujat a Github
- npm update / npm install
- npm run lintfix i utilitzar PHPSTORM per corregir automàticament errors eslint
- npm run dev: comprovar estat aplicació
- DOTENV (.env) instal·lat ara falta crear/utilitzar fitxer .env i utilitzar-lo
  - Configuració URLS API BACKEND per local i producció
  - Mòdul auth nuxt: this.$auth.loginWith()
    - Configuració al fitxer **nuxt.config.js**:  
      - process.env.VUE_APP_LARAVEL_PASSPORT_ENDPOINT: http://moixonet-backend.test/
      - process.env.VUE_APP_LARAVEL_ENDPOINT: http://moixonet-backend.test/
- Com veure les rutes de nuxt:
  - **.nuxt/router.js**
- TESTOS:
  - npm run test
  - npm run test:watch
    - u: update snapshot

## SNACKBAR:
- Mostrar errors
  - https://vuetifyjs.com/en/components/snackbars
  - Alternatives: 
    - Alerts: https://vuetifyjs.com/en/components/alerts
    - Dialogs: https://vuetifyjs.com/en/components/dialogs
- Component global
  - Molts components necessitaran comunicar-se amb l'usuari mostrant missatges
  - NO cal i no es recomanable posar un snackbar/dialog/alert a cada component
  - Utilitzar un component global, que posarem al layout
  - Utilitzar un plugin vue per injectar la funcionalitat a tots els components: this.$snackbar    

TDD SNACKBAR:
- Testing amb llibreries de tercers i/o plugins Vue (Vuetify és un plugin Vue)  
  - API: 
    - Es pot canviar color snackbar: Success | Error | Info
    - I missatge snackbar
    - Posició fixa part inferior centrat
    - Timeout fix  

# TEST COVERAGE

- Resum que apareix al final execució de testos i que ens ajuda a localitzar línies de codi propi que no s'executa en cap test
- 100% cobertura: totes les línies del nostre codi s'executen al menys un cop durant testos. No implica 100% efectivitat o que la app estigui lliure errors
- Configurat automàticament amb Nuxt
    
# EVENT BUS
- Sistema simple de comunicació events entre components
- Bus: nom tambe utilitzem en hardware (bus de comunicació que utilitzen diferents components de hardware per intercanviar informació)
- Events: sistema comú (Laravel i altres frameworks igual) per connectar components entre si 

**plugins/eventBus.client.js**:

```javascript
import Vue from 'vue'

const eventBus = new Vue();
//this helps WebStorm with autocompletion, otherwise it's not needed
Vue.prototype.$eventBus = eventBus;

export default ({app}, inject) => {
    inject('eventBus', eventBus);
}
```  

https://tech.onestopbeauty.online/front-end/simple-eventBus-in-nuxt/

# VUE ROUTER TESTING / NUXT

- https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
     
# GUIA 14 novembre

https://github.com/kuroski/article-tdd-vue
https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-1-3be791dafa2b


- Composició Page: múltiple components -> comunicació entre germans
  - Primer exemple sense Vuex:
  - Form i List comparteixen estat: channels
- Copiar testos proporcionats professor
- PAGE DESIGN PATTERN: Hi ha un objecte/mètode (a l'exemple build()) que conté totsels elements d'una pàgina/component
- Component dumb i smart i notació Vue
- CONFIG ESLINT JEST
- VUEX: Store (shared data)

# COMPONENTS

---------------------------------
| PAGE COMPONENT: Channels      |
|  VChannelsForm                |
|  VChannelsList                |
|                               |
---------------------------------


ConfirmDialog -> Dialog
AnnouncementDialog -> Dialog

Page Component: compositions multiple subcomponents

Smart Components:
 - Channels: és una View o Page
Dumb components/Presentational components/ Base components
 - VChannelsForm | VChannelsList

- https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-1-3be791dafa2b
- https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended
# TESTING

## E2E CYPRESS

## UNIT TESTING: Vue Test Utils

https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-3-7a68ad3f5fb1

### Events

- Event input molt important és el que es dispara quan es canvia el contingut d'un camp de formulari (input, textarea, similars)
Interacció amb formularis:
- trigger() -> disparar events
  - trigger('click') -> Click
  - trigger('input') -> input
- element -> Permet accedir a l'element HTML
- element.value = valor del camp de formulari
- type:
  - x.element.value = 'Nou valor' x.trigger('input')
  
Tests assertions

```
wrapper.vm.$emit('foo')
wrapper.vm.$emit('foo', 123)

/*
wrapper.emitted() returns the following object:
{
  foo: [[], [123]]
}
*/

// assert event has been emitted
expect(wrapper.emitted().foo).toBeTruthy()
// assert event count
expect(wrapper.emitted().foo.length).toBe(2)
// assert event payload
expect(wrapper.emitted().foo[1]).toEqual([123])  
``` 

Search text:
-  
Key events:


# Requeriments

```
npm update
npm install --save-dev cross-env
```

# VUETIFY ICONS

Cal posar mdi- prefix davant les icones i buscar la icona a:

https://materialdesignicons.com/

# NUXT PORT AND HOSTNAME

https://nuxtjs.org/faq/host-port/

"scripts": {
  "dev": "nuxt --hostname myhost --port 3333"
}

Actualitzeu també cypress.json la variable **baseURL**

Actualitzeu /etc/hosts

nuxt.moixonet.acacha.scool.test 127.0.0.1

# DEVELOPMENT

nuxt.moixonet.acacha.scool.test


# PRODUCCIó

Domini explotació nuxt frontend:

nuxt.moixonet.acacha.scool.cat
nuxt.moixonet.genis99.scool.cat
nuxt.moixonet.aycorrea.scool.cat
nuxt.moixonet.dimobo.scool.cat
nuxt.moixonet.karimlema9.scool.cat
nuxt.moixonet.carloros.scool.cat
nuxt.moixonet.gerardgb.scool.cat
nuxt.moixonet.jotaela.scool.cat

# Domini local:

nuxt.moixonet.acacha.scool.test
nuxt.moixonet.genis99.scool.test
nuxt.moixonet.aycorrea.scool.test
nuxt.moixonet.dimobo.scool.test
nuxt.moixonet.karimlema9.scool.test
nuxt.moixonet.carloros.scool.test
nuxt.moixonet.gerardgb.scool.test
nuxt.moixonet.jotaela.scool.test

# DEPLOYMENT TYPES

- NUXT APP TYPES (RENDERING MODE):
  - SPA: No server-side rendering (only client-side navigation)
  - Universal: Isomorphic application (server-side rendering + client-side navigation)
  - https://nuxtjs.org/api/configuration-mode/ 
  - nuxt.config.js mode option

## SPA

- https://es.wikipedia.org/wiki/Single-page_application
- vue-router

## Statically generated / Pre-rendering: https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-netlify?friend=nuxt
  
Statically generated:
  
```
yarn generate or npm run generate
```

SPA MODE:

```
yarn build or npm run build
```

## SERVER SIDE RENDERING (SSR) | UNIVERSAL|ISOMORPHIC APP

https://ssr.vuejs.org/
https://medium.com/capital-one-tech/why-everyone-is-talking-about-isomorphic-universal-javascript-and-why-it-matters-38c07c87905

Vue.js is a framework for building client-side applications. 
By default, Vue components produce and manipulate DOM in the browser as output. 
However, it is also possible to render the same components into HTML strings on the server, 
send them directly to the browser, and finally **"hydrate"** the static markup into a fully 
interactive app on the client.

A server-rendered Vue.js app can also be considered **"isomorphic" or "universal"**, 
in the sense that the majority of your app's code runs on both the server and the client.

- Why SSR?
  - Better SEO, as the search engine crawlers will directly see the fully rendered page.
  - Faster time-to-content, especially on slow internet or slow devices
- Problems:
  - Development constraints. Browser-specific code can only be used inside certain lifecycle hooks; some external libraries may need special treatment to be able to run in a server-rendered app.
  - More involved build setup and deployment requirements. Unlike a fully static SPA that can be deployed on any static file server, a server-rendered app requires an environment where a Node.js server can run.
  - More server-side load. Rendering a full app in Node.js is obviously going to be more CPU-intensive than just serving static files, so if you expect high traffic, be prepared for corresponding server load and wisely employ caching strategies  

### SSR vs Prerendering

If you're only investigating SSR to improve the SEO of a handful of marketing pages (e.g. /, /about, /contact, etc), then you probably want prerendering instead. 
Rather than using a web server to compile HTML on-the-fly, prerendering simply generates static HTML files for specific routes at build time. 
The advantage is setting up prerendering is much simpler and allows you to keep your frontend as a fully static site.

If you're using webpack, you can easily add prerendering with the prerender-spa-plugin. It's been extensively tested with Vue apps - and in fact, the creator is a member of the Vue core team.

#About This Guide

# NETLIFY DEPLOYMENT

- Feu usuari a Netlify: https://www.netlify.com/
- https://nuxtjs.org/faq/netlify-deployment/

# moixonet-nuxt-frontend

> My kickass Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


# NOW DEPLOYMENT

Example now.json file
{
  "version": 2,
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/now-builder",
      "config": {}
    }
  ]
}

# Authentication iesebre-nuxt

https://github.com/pktharindu/nuxt-laravel-passport-example

## Proves Auth-module amb laravel Passport amb Proxy (Janitor package)

- Instal·lar mòdul auth segons: https://auth.nuxtjs.org/guide/setup.html

## DOTENV

TODO: copait del projecte: 

- https://github.com/pktharindu/nuxt-laravel-passport-example

# NOW

S'ha instal·lat cli de now:   

```
npm i -g now
now login
```  

Observeu el fitxer now.json del projecte. Per evitar un error també cal posar a package.json:

```
  ...
  ,
  "engines": {
    "node": "10.x"
  }
``` 

Pujar a explotació:

``` 
now --prod
```

Al fitxer package.json:

```
,
  "engines": {
    "node": "10.x"
  }
``

# Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
