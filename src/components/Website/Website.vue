<template>
  <v-container fluid>
    <v-toolbar 
      app
      dense>
      <v-toolbar-side-icon @click="sidebarVisible = !sidebarVisible"></v-toolbar-side-icon>

      <v-toolbar-title>TEST</v-toolbar-title>

    </v-toolbar>
    <v-navigation-drawer
      v-model="sidebarVisible"
      absolute
      temporary
      app>        
      
      <v-list> 
        <template v-for="navItem in navItems">
              <v-list-tile
                :key="navItem.title"
                @click="route(navItem.title)"
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
            v-for="userItem in userItems"
            :key="userItem"
            @click="route(userItem)">
            <v-list-tile-content>
              <v-list-tile-title>{{ userItem }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>

export default {
  name: "website-home",
  components: {},
  props: {},
  data() {
    return {
      sidebarVisible: false,
      navItems: [{ title: "Home" }, { title: "Forum" }],
      userItem: [{title: "User"}],
      userItems: ["A", "B", "C"]
    };
  },
  computed: {},

  methods: {
    route(item) {
      // eslint-disable-next-line
      console.log("Route to " + item);
    }
  }
};
</script>
