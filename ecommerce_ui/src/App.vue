<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      
      <v-btn
        v-for="(r, indx) in routes" :key="indx"
        target="_blank"
        text
        @click = "insertRoute(r.route)"
      >
        <span class="mr-2">{{r.name}}</span>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
      <!-- Renderizacion de los componentes de la SPA -->
    </v-main>

     <v-footer
        app
        color="primary"
        dark

     >
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in linksFooter"
            :key="link"
            variant="text"
            class="mx-2"
          >
            {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Denise Eichenblat</strong>
          </v-col>
        </v-row>
      </v-footer>
  </v-app>


</template>

<script>

export default {
  name: 'App',

  data: () => ({
    routes:[
      {name: "Home", route: '/'},
      {name: "About", route: '/about'},
      {name: "Product", route: '/products'}
    ],
    linksFooter: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
  }),
  methods:{
    insertRoute(route){
      this.$router.push(route);
    }
  }
};
</script>
