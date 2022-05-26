<template>
  <table>
    <thead>
      <tr class="table_header">
        <slot name="table-header"></slot>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="(c, i) in cols" :key="i">{{ c.name }}</td>
      </tr>
      <slot name="table-content"></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SpecialityTable",
  props: {
    cols: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.table_header {
  background: #8fb6d5;
  color: #000;
}
table {
  width: 100%;
  color: #000;
}
td {
  background: #fff;
  border: 1px solid #8b9296;
  padding: 1rem;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.4rem;
}
</style>
