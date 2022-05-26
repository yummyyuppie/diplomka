<template>
  <div
    class="select_wrap"
    :class="{ active: toggleSelect }"
    @click.stop="toggleSelect = !toggleSelect"
    v-click-outside="() => (toggleSelect = false)"
  >
    <ul class="default_option">
      <li v-if="selectedItem">
        <div class="option">
          <p>{{ selectedItem.text }}</p>
        </div>
      </li>
      <p class="placeholder" v-else>{{ placeholder }}</p>
      <div class="arrow-toggle">
        <svg
          v-if="toggleSelect"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
          />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
          />
        </svg>
      </div>
    </ul>
    <ul class="select_ul">
      <li
        v-for="(opt, index) in options"
        :key="index"
        @click.stop="setItemSelected(opt)"
      >
        <div class="option">
          <p>{{ opt.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "CustomSelect",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    selected: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
    },
  },
  watch: {
    selected(val) {
        this.selectedItem = this.options.find((e) => e.text === val) ?? "";
    },
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      toggleSelect: false,
      selectedItem: null,
    };
  },
  methods: {
    setItemSelected(option) {
      this.toggleSelect = false;
      this.$emit("setSelected", this.name, option);
    },
  },
};
</script>

<style scoped lang="scss">
.select_wrap {
  width: 100%;
  margin: 15px 0;
  position: relative;
  user-select: none;
  color: #000;
  font-size: 1.8rem;
  line-height: 2rem;
}

.select_wrap .default_option {
  background: #fff;
  border-radius: 4.5rem;
  padding: 10px 20px;
  position: relative;
  cursor: pointer;
}
.placeholder {
  color: #6f6c90;
}

//.select_wrap .default_option li {
//  padding: 10px 20px;
//}
.arrow-toggle {
  position: absolute;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 68, 142, 0.89);
  border-radius: 50%;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  svg {
    fill: #fff;
    color: #fff;
    width: 50%;
    height: 50%;
  }
}

.select_wrap .select_ul {
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: none;
  z-index: 2;
}

.select_wrap .select_ul li {
  padding: 10px 20px;
  cursor: pointer;
}

.select_wrap .select_ul li:first-child:hover {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.select_wrap .select_ul li:last-child:hover {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.select_wrap .select_ul li:hover {
  background: #fff4dd;
}

.select_wrap .option {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.select_wrap.active .select_ul {
  display: block;
}

.select_wrap.active .default_option:before {
  transform: rotate(-225deg);
}
</style>
