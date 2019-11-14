# GUIA 14 novembre

- Composició Page: múltiple components -> comunicació entre germans
  - Primer exemple sense Vuex:
  - Form i List comparteixen estat: channels
- Copiar testos proporcionats professor
- PAGE DESIGN PATTERN: Hi ha un objecte/mètode (a l'exemple build()) que conté totsels elements d'una pàgina/component

# COMPONENTS

---------------------------------
| PAGE COMPONENT: Channels      |
|  VChannelsForm                |
|  VChannelsList                |
|                               |
---------------------------------

Page Component: compositions multiple subcomponents

Smart Components:
 - Channels: és una View o Page
Dun components/Presentational components/ Base components
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
