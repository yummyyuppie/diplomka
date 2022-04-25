<template>
  <div class="speciality">
    <h1 class="speciality_name">Коммуникации и коммуникационные технологии</h1>
    <div class="overall_info">
      <div class="bold">Общие сведения</div>
      <p>Код: B059</p>
      <p>Профильные предметы: Математика и Физика</p>
      <p>Область образования: 6B06 Информационно-коммуникационные технологии</p>
      <p>Направление подготовки: 6B062 Телекомммуникации</p>
    </div>
    <div class="grant_amount">
      <div class="bold">Количество грантов</div>
      <p>2021 год: 885</p>
      <p>2020 год: 999</p>
    </div>
    <div class="grant_info">
      <div class="bold">Общий грант</div>
      <p>Минимальный балл(Общий грант): 88</p>
      <p>Минимальный балл(Сельская квота): 88</p>
    </div>
    <div class="ord_table">
      <speciality-table :cols="cols">
        <template #table-header>
          <th colspan="6">Общий конкурс</th>
        </template>
        <template #table-content>
          <tr v-for="(u, i) in ordinaryQuotaInfo" :key="i">
            <td>{{ u.code }}</td>
            <td>{{ u.uni }}</td>
            <td>{{ u.students_amount }}</td>
            <td>{{ u.min_point }}</td>
            <td>{{ u.max_point }}</td>
            <td>{{ u.avg_point }}</td>
          </tr>
        </template>
      </speciality-table>
    </div>
    <div class="vill_table">
      <speciality-table :cols="cols">
        <template #table-header>
          <th colspan="6">Сельская квота</th>
        </template>
        <template #table-content>
          <tr v-for="(u, i) in villageQuotaInfo" :key="i">
            <td>{{ u.code }}</td>
            <td>{{ u.uni }}</td>
            <td>{{ u.students_amount }}</td>
            <td>{{ u.min_point }}</td>
            <td>{{ u.max_point }}</td>
            <td>{{ u.avg_point }}</td>
          </tr>
        </template>
      </speciality-table>
    </div>
    <div class="educ_prog">
      <p class="educ_prog_title bold">Образовательные программы</p>
      <div class="educ_prog_item" v-for="i in 5" :key="i">
        <p class="educ_prog_name" @click.stop="singleEducProgram">
          Радиотехника, электроника и телекоммуникации
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SpecialityTable from "@/components/SpecialityTable";
export default {
  name: "Speciality",
  components: { SpecialityTable },
  computed: {
    ordinaryQuotaInfo() {
      return [
        {
          code: 12,
          uni: "КБТУ",
          students_amount: 556,
          min_point: 55,
          max_point: 138,
          avg_point: 99,
        },
        {
          code: 12,
          uni: "КБТУ",
          students_amount: 556,
          min_point: 55,
          max_point: 138,
          avg_point: 99,
        },
        {
          code: 12,
          uni: "КБТУ",
          students_amount: 556,
          min_point: 55,
          max_point: 138,
          avg_point: 99,
        },
      ];
    },
    villageQuotaInfo() {
      return [
        {
          code: 12,
          uni: "КБТУ",
          students_amount: 556,
          min_point: 55,
          max_point: 138,
          avg_point: 99,
        },
        {
          code: 12,
          uni: "КБТУ",
          students_amount: 556,
          min_point: 55,
          max_point: 138,
          avg_point: 99,
        },
        {
          code: 12,
          uni: "КБТУ",
          students_amount: 556,
          min_point: 55,
          max_point: 138,
          avg_point: 99,
        },
      ];
    },
    cols() {
      return [
        { name: "Код" },
        { name: "ВУЗ" },
        { name: "Количество поступивших" },
        { name: "Мин.балл" },
        { name: "Макс.балл" },
        { name: "Средн.балл" },
      ];
    },
  },
  methods: {
    singleEducProgram() {
      this.$router.push("/educationalProgram/1");
    },
  },
};
</script>

<style scoped lang="scss">
.speciality {
  padding: 5rem 20rem;
  background: #0a2640;
  color: #fff;
  font-size: 16px;
  line-height: 28px;
  &_name {
    font-weight: 700;
    font-size: 34px;
    line-height: 46px;
    text-align: center;
  }
}
.bold {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
}
.overall_info,
.grant_amount,
.grant_info {
  margin-bottom: 4rem;
}
td {
  border: 1px solid #8b9296;
}
.vill_table,
.ord_table {
  margin-top: 2rem;
}
.educ_prog {
  padding: 2rem 0;
  &_item {
    padding: 1rem;
    &:hover {
      cursor: pointer;
      color: #65e4a3;
    }
  }
}
</style>
