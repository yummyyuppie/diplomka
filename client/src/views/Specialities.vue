<template>
  <div class="specialities">
    <div class="edu_progs">
      <p class="title">Группа образовательных програм</p>
      <speciality-card
        v-for="(s, i) in specialities"
        :speciality="s"
        :key="i"
      />
    </div>
    <div class="edu_groups">
      <p class="title">Специальности</p>
      <div class="edu_card" v-for="(e, i) in edu_progs" :key="i">
        <div class="edu_info">
          <ul>
            <li class="edu_name">
              {{ e.name }}
            </li>
            <li class="edu_subjects">{{ e.subject1 }} и {{ e.subject2 }}</li>
            <li class="edu_group">
              Группа образовательных програм: {{ e.group }}
            </li>
          </ul>
        </div>
        <slot name="prob"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SpecialityCard from "@/components/SpecialityCard";
export default {
  name: "Specialities",
  components: { SpecialityCard },
  computed: {
    specialities() {
      return [
        {
          id: 1,
          name: "Коммуникации и коммуникационные технологии",
          code: "B059",
          last_grant: 55,
          lowest_point: 48,
          probability: 100,
          probability_text: "Хорошие",
        },
        {
          id: 2,
          name: "Информационные технологии",
          code: "B057",
          last_grant: 2493,
          lowest_point: 106,
          probability: 68,
          probability_text: "Средние",
        },
        {
          id: 3,
          name: "Коммуникации и коммуникационные технологии",
          code: "B059",
          last_grant: 55,
          lowest_point: 48,
          probability: 30,
          probability_text: "Низкие",
        },
      ];
    },
    edu_progs() {
      return [
        {
          id: 1,
          name: "Дошкольное обучение и воспитание",
          subject1: "Физика",
          subject2: "Математика",
          group: "B003 Педагогика и психология",
        },
        {
          id: 1,
          name: "Дошкольное обучение и воспитание",
          subject1: "Физика",
          subject2: "Математика",
          group: "B003 Педагогика и психология",
        },
        {
          id: 1,
          name: "Дошкольное обучение и воспитание",
          subject1: "Физика",
          subject2: "Математика",
          group: "B003 Педагогика и психология",
        },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.specialities {
  background: #0a2640;
  padding: 1rem 20rem;
  .title{
    font-weight: 700;
    font-size: 34px;
    line-height: 46px;
    color: #fff;
    margin: 2rem 0;
  }
}
.edu_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #eff0f7;
  border-radius: 5rem;
  padding: 1rem 4rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 1.7rem;
  cursor: pointer;
  ul {
    list-style-type: none;
  }
}
</style>
