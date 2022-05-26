<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show"
    role="alert"
  >
    {{ message }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
    message() {
      if (this.notification.message === this.$t(this.notification.message)) {
        return this.notification.type === "error"
          ? this.$t("error")
          : this.$t("success");
      }
      return this.$t(this.notification.message);
    },
  },
  created() {
    this.timeout = setTimeout(() => {
      this.$store.dispatch(
        "notifications/removeNotification",
        this.notification
      );
    }, 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: mapActions(["notifications/removeNotification"]),
};
</script>
<style lang="scss" scoped>
.alert {
  padding: 2rem 4rem;
  background: #fff;
  border-radius: 5px;
  color: #fff;
  transform: translateX(calc(100% + 5rem));
  animation: notifAnim 5s ease-in-out;
  &-error {
    border: 2px solid #cb2525;
    background: #cb2525;
  }
  &-success {
    border: 2px solid green;
    background: #278830;
  }
}

@keyframes notifAnim {
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(100% + 5rem));
  }
}
</style>
