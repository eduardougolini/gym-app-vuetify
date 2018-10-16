<template>
  <v-app v-if="logged">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
    <v-flex
      align-center
      justify-center
      layout
      text-xs-center
      class="mt-5 mb-2">
      <v-avatar
            :tile="tile"
            :size="100"
            color="grey lighten-4"
          >
            <img src="./assets/logo.png" alt="avatar">
      </v-avatar>
    </v-flex>
    <v-flex
      align-center
      justify-center
      layout
      text-xs-center
      class="mb-5">
      <h3>Nome da academia</h3>
    </v-flex>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
        :to="item.url"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile
        @click=""
        :to="logout"
      >
        <v-list-tile-action>
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Sair</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      app
      :clipped-left="clipped"
    >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>fas fa-exchange-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
  <v-app v-else>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logged: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "fas fa-credit-card",
          title: "Clientes em débito",
          url: "debit-clients"
        },
        {
          icon: "fas fa-file",
          title: "Fichas de treino",
          url: "training-records"
        },
        {
          icon: "fas fa-user",
          title: "Cadastro de clientes",
          url: "clients-register"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Academia"
    };
  }
};
</script>