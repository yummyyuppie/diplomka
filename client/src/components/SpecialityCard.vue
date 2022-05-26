<template>
  <div class="speciality_card" @click.stop="goToSpeciality">
    <div class="speciality_info">
      <ul>
        <li class="speciality_name">
          {{ speciality.edu_prog_name }}
        </li>
        <li class="speciality_code">Код: {{ speciality.edu_prog_id }}</li>
        <li class="speciality_grant">
          Количество грантов (2022): {{ speciality.count_grant_2022 }}
        </li>
        <li class="speciality_lowest">
          Проходной балл на грант(Общий конкурс): {{ speciality.min_point_state_gr_state_quota }}
        </li>
        <li class="speciality_lowest">
          Проходной балл на грант(Сельская квота): {{ speciality.min_point_state_gr_rural_quota }}
        </li>
      </ul>
    </div>
    <slot name="prob"></slot>
  </div>
</template>

<script>
export default {
  name: "SpecialityCard",
  props: {
    speciality: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    goToSpeciality() {
      this.$router.push({path: `/specialities/${this.speciality?.edu_prog_id}`});
    },
  },
};
</script>

<style scoped lang="scss">
.speciality_card {
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
    list-style-type: circle;
  }
  .speciality_name{
    list-style-type: none;
    font-weight: 700;
    font-size: 2.1rem;
  }
  .enter_probability {
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    .prob_percent,
    .prob_text {
      text-align: start;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
