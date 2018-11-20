<template>
  <v-layout row>
     <v-list dense>
      <template v-for="(thread) in getPermissionThreads(getUser)">
        <v-list-tile
          :key="thread.id"
          avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="thread.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="thread.startTime"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-layout>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "forum-page",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
    ...mapGetters("forum", ["getPermissionThreads"]),
  },

  methods: {},

  created() {
  }
};
</script>
