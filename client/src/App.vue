<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
export default {
  computed: {
    layout() {
      const layoutName = this.$route?.meta?.layout || "DefaultLayout";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
  },
};
</script>
<style lang="scss">
*{
  font-family: map-get($font, main-font);
  font-size: 2rem;
  line-height: 3.2rem;
}
</style>
