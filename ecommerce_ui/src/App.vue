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
    ]
  }),
  methods:{
    insertRoute(route){
      this.$router.push(route);
    }
  }
};
</script>
