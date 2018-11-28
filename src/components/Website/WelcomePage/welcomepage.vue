<template>

  <div v-if="getUser">
    Hello {{getUser.username}}.
  </div>
  <div v-else>
    Please select a user.
  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "welcome-page",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
  },

  methods: {
  },

  mounted() {
  }
};
</script>
