<template>
  <header class="header">
      <div class="header_logo">
        <span>EduGrant</span>
      </div>
      <div class="header_nav">
        <span class="nav_link">
          <router-link to="/">{{ $t("main") }}</router-link>
        </span>
        <span class="nav_link">
          <router-link to="/stories">{{ $t("stories") }}</router-link>
        </span>
        <span class="nav_link">
          <router-link to="/specialities">{{ $t("specialities") }}</router-link>
        </span>
        <span class="nav_link">
          <dropdown :selected_lang="currentLang" @changeLanguage="changeLanguage" />
        </span>
      </div>
  </header>
</template>

<script>
import Dropdown from "@/components/Dropdown";
export default {
  name: "Header.vue",
  components: { Dropdown },
  methods: {
    changeLanguage(val) {
      this.$i18n.locale = val;
    },
  },
  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 7rem;
  &_logo {
    span {
      font-weight: map-get($font, weight-fat);
      font-family: map-get($font, secondary-font);
      font-size: 4.5rem;
    }
  }
  &_nav {
    display: flex;
    align-items: center;
    gap: 4rem;
    .nav_link {
      a {
        text-decoration: none;
        font-size: 1.6rem;
        color: map-get($colors, black);
      }
      &:hover{
        a {
          color: #0A2640;
        }
      }
    }
  }
}
</style>
