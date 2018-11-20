<template>
  <div>
      <v-toolbar 
        app
        dense>
        <v-toolbar-side-icon @click="sidebarVisible = !sidebarVisible"></v-toolbar-side-icon>

        <v-toolbar-title>TEST</v-toolbar-title>

      </v-toolbar>
    <v-navigation-drawer
      v-model="sidebarVisible"
      absolute
      temporary>        
      
      <v-list v-if="getUser"> 
        <template v-for="navItem in navItems">
              <v-list-tile
                :key="navItem.title"
                @click="route(navItem.route)"
                no-action
              >
                <v-list-tile-content>
                  {{navItem.title}}
                </v-list-tile-content>
              </v-list-tile>
            </template>
      </v-list>

      <!-- this list will be deleted -->
      <v-list> 
        <v-list-group
          v-for="usItem in userItem"
          v-model="usItem.active"
          :key="usItem.title"
          no-action>

          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ usItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          
          <v-list-tile
            v-for="userItem in getUsers"
            :key="userItem.name"
            @click="setNewUser(userItem.name)">
            <v-list-tile-content>
              <v-list-tile-title>{{ userItem.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>
    <v-container fluid>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "website-home",
  components: {},
  props: {},
  data() {
    return {
      sidebarVisible: false,
      navItems: [{ title: "Home", route:"WelcomePage" }, { title: "Forum", route:"ForumPage" }],
      userItem: [{ title: "User" }],
      userItems: ["A", "B", "C"]
    };
  },
  computed: {
    ...mapGetters("users", ["getUsers"]),
    ...mapGetters("user", ["getUser"]),
  },

  methods: {
    ...mapMutations("user",["setUser"]),
    route(page) {
      this.$router.push({ name: page });
    },
    setNewUser(user) {
      this.setUser(user)
    },
  },

  created() {
    this.$router.push({ name: 'WelcomePage' });
  }
};
</script>

<style scoped>
.container {
  padding-top:55px;
}

</style>