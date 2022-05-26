<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <notifications-list />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import NotificationsList from "@/components/NotificationsList";
export default {
  mounted() {
    this.$store.dispatch("helpers/fetchSubjects");
  },
  components: {
    NotificationsList,
  },
  watch: {
    route() {
      console.log("AAAAAAAAAAAAAAAA");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
  methods: {
    ...mapActions(["helpers/fetchSubjects"]),
  },
  computed: {
    layout() {
      const layoutName = this.$route?.meta?.layout || "DefaultLayout";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
    route() {
      return this.$route?.fullPath;
    },
  },
};
</script>
<style lang="scss">
* {
  font-family: map-get($font, main-font);
  font-size: 2rem;
  line-height: 3.2rem;
}
</style>
