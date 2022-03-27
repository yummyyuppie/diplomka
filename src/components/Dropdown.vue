<template>
  <div class="drop" @click="active = !active">
    <a class="drop-trigger">
      {{ currentLang }}
    </a>
    <div
      class="drop-down"
      id="dropdown1"
      tabindex="-1"
      :class="{ active: active }"
    >
      <ul>
        <li v-for="(lang, idx) in languages" :key="idx">
          <a @click="currentLang = lang; active = false">{{ lang }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    selected_lang: {
      type: String,
      default: "ru",
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    languages() {
      return ["ru", "kz"];
    },
    currentLang: {
      get() {
        return this.selected_lang;
      },
      set(val) {
        this.$emit("changeLanguage", val);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.drop {
  position: relative;
  cursor: pointer;

  &-trigger {
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
    padding: 1.2rem 1.6rem;
    background-color: #eee;
    border-radius: 0.8rem;
    color: #000;
  }

  &-down {
    display: none;
    padding: 1.6rem;
    box-shadow: 0 0 2rem 0 rgba(#000, 0.09);
    border-radius: 0.8rem;
    position: absolute;
    background-color: #fff;
    top: 110%;
    transition: 0.4s;
    width: 100%;
    right: 0;
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 1.2rem;

      li {
        span {
          color: #000;

          &:hover {
            color: red;
          }
        }
      }
    }

    &.active {
      display: block;
    }
  }
}
</style>
