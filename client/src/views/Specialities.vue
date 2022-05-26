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
              {{ e.speciality_name }}
            </li>
            <li class="edu_subjects">{{ e.profile_subject_1 }} и {{ e.profile_subject_2 }}</li>
            <li class="edu_group">
              Группа образовательных програм: {{ e.edu_prog_name }}
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
import { getAllSpecialities, getAllSpec } from "@/http/infoAPI";
export default {
  name: "Specialities",
  components: { SpecialityCard },
  data() {
    return {
      specialities: [],
      edu_progs: [],
      pagination: {
        limit: 5,
        page: 1,
        hasNext: false,
      },
    };
  },
  mounted() {
    getAllSpecialities(this.pagination.page, this.pagination.limit).then((data) => (this.specialities = data.data));
    getAllSpec().then(data=>this.edu_progs = data.data)
  },
};
</script>

<style scoped lang="scss">
.specialities {
  background: #0a2640;
  padding: 1rem 20rem;
  .title {
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
