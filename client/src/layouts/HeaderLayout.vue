<template>
  <div>
    <Header />
    <slot></slot>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "HeaderLayout",
  components: { Header },
};
</script>