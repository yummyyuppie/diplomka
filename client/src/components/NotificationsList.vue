<template>
  <div class="notifications-list" v-show="notifications.length > 0">
    <notification-message
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage";
import { mapState } from "vuex";
export default {
  components: {
    NotificationMessage,
  },
  computed: {
    ...mapState("notifications", ["notifications"]),
    // tempNots() {
    //   return [{id: 'asasasas', type: 'error', message: 'hi'}]
    // }
},
};
</script>

<style>
.notifications-list {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  margin-right: 15px;
  width: 50rem;
}
</style>
