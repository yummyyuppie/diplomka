<template>
  <div class="drop" @click="active = !active" v-click-outside="() => active = false">
    <a class="drop-trigger" id="selected_lang">
      {{ languages.find(e=>e.value === currentLang).text }}
    </a>
    <div
      class="drop-down"
      id="dropdown1"
      tabindex="-1"
      :class="{ active: active }"
    >
      <ul>
        <li v-for="(lang, idx) in languages" :key="idx">
          <a @click="currentLang = lang.value; active = false">{{ lang.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
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
      return [{value: "ru", text: 'Русский'}, {value: "kz", text: "Қазақша"}];
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
  directives: {
    ClickOutside
  }
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
    font-size: 1.6rem;
  }
  #selected_lang{
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
      list-style-type: none;
      li {
        a{
          color: #000;
          font-size: 1.6rem;
        }
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
