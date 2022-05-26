<template>
  <header class="header" :class="{ light: headerColor === 'light' }">
    <div class="header_logo">
      <span>
        <router-link to="/">EduGrant</router-link>
      </span>
    </div>
    <div class="header_nav">
      <span class="nav_link" :class="{ active_page: currentPage === 'Home' }">
        <router-link to="/">{{ $t("main") }}</router-link>
      </span>
      <span
        class="nav_link"
        :class="{ active_page: currentPage === 'Stories' }"
      >
        <router-link to="/stories">{{ $t("stories") }}</router-link>
      </span>
      <span
        class="nav_link"
        :class="{ active_page: currentPage === 'Specialities' }"
      >
        <router-link to="/specialities">{{ $t("specialities") }}</router-link>
      </span>
      <span class="nav_link" :class="{ active_page: currentPage === 'CreateStory' }">
        <router-link to="/create-story">{{ $t("create_story") }}</router-link>
      </span>
      <span class="lang_link">
        <dropdown
          :selected_lang="currentLang"
          @changeLanguage="changeLanguage"
        />
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
    currentPage() {
      return this.$router?.currentRoute?.name;
    },
    headerColor() {
      return this.$route?.meta?.headerColor || "dark";
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
  background: #0a2640;
  position: sticky;
  top: 0;
  z-index: 10;
  &_logo {
    span {
      a {
        font-weight: map-get($font, weight-fat);
        font-family: map-get($font, secondary-font);
        font-size: 4.5rem;
        color: map-get($colors, white);
      }
    }
  }
  &_nav {
    display: flex;
    align-items: center;
    gap: 4rem;
    .nav_link {
      a {
        font-size: 1.6rem;
        color: map-get($colors, white);
        position: relative;
        margin-bottom: 2px;
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #65e4a3;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
      }
      &:hover {
        a {
          &:after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }
    }
    .lang_link {
      font-size: 1.6rem;
    }
  }
}
.light {
  background: #fff;

  .header_logo {
    span {
      a{
        color: map-get($colors, black);
      }
    }
  }
  .nav_link {
    a {
      color: map-get($colors, black);
    }
  }
}
.active_page {
  a {
    color: #65e4a3!important;
  }
}
</style>
