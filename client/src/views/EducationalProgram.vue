<template>
  <div class="program">
    <h1 class="program_name">Радиотехника. электроника и телекоммуникация</h1>
    <div class="program_desc">
      <p class="bold">
        Группа образовательных програм: B059 Коммуникации и коммуникационные
        технологии
      </p>
      <div class="hints_wrap">
        <span class="hint">1* - по карьерным перспективам выпускников</span>
        <span class="hint">2* - по экспертной оценке</span>
        <span class="hint"
          >3* - по статистическим данным и достижениям обучения</span
        >
      </div>
    </div>
    <speciality-table :cols="cols">
      <template #table-header>
        <th :colspan="cols.length">Рейтинг вузов</th>
      </template>
      <template #table-content>
        <tr v-for="(u, i) in 10" :key="i">
          <td>{{ 12 }}</td>
          <td>{{ 'Евразийский университет имени Гумилева' }}</td>
          <td>{{ 215.0 }}</td>
          <td>{{ '59%' }}</td>
          <td>{{ 3.04 }}</td>
          <td>{{ 2.54 }}</td>
          <td>{{ 0.7 }}</td>
          <td>{{ 1.6 }}</td>
          <td>{{ 5.2 }}</td>
        </tr>
      </template>
    </speciality-table>
  </div>
</template>

<script>
import SpecialityTable from "@/components/SpecialityTable";
export default {
  name: "EducationalProgram",
  components: { SpecialityTable },
  computed: {
    cols() {
      return [
        { name: "Код" },
        { name: "ВУЗ" },
        { name: "Медианная зар.плата в тенге" },
        { name: "Уровень трудоустройства в %" },
        { name: "Продолжтельность поиска работы в месяцах" },
        { name: "Итого по 1*" },
        { name: "Итого по 2*" },
        { name: "Итого по 3*" },
        { name: "Общий итог" },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.program {
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
    margin-bottom: 1rem;
  }
}
.bold {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
}
.hints_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 2rem 0;
}
</style>
