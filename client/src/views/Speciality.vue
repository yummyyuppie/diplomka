<template>
  <div class="speciality">
    <h1 class="speciality_name" style="color: #fff">{{ specialityInfo.edu_prog_name }}</h1>
    <div class="overall_info">
      <div class="bold">Общие сведения</div>
      <p>Код: {{ specialityInfo.edu_prog_id }}</p>
      <p>
        Профильные предметы: {{ specialityInfo.profile_subject_1 }} и
        {{ specialityInfo.profile_subject_2 }}
      </p>
      <p>Область образования: {{ specialityInfo.field_education }}</p>
      <p>Направление подготовки: {{ specialityInfo.subfield_education }}</p>
    </div>
    <div class="grant_amount">
      <div class="bold">Количество грантов</div>
      <p>2022 год: {{ specialityInfo.count_grant_2022 }}</p>
      <p>2021 год: {{ specialityInfo.count_grant_2021 }}</p>
    </div>
    <div class="grant_info">
      <div class="bold">Общий грант</div>
      <p>
        Минимальный балл(Общий грант):
        {{ specialityInfo.min_point_state_gr_state_quota }}
      </p>
      <p>
        Минимальный балл(Сельская квота):
        {{ specialityInfo.min_point_state_gr_rural_quota }}
      </p>
    </div>
    <div class="ord_table" v-if="ordinaryQuotaInfoState.length>0">
      <speciality-table :cols="cols">
        <template #table-header>
          <th colspan="6">Общий конкурс</th>
        </template>
        <template #table-content>
          <tr v-for="(u, i) in ordinaryQuotaInfoState" :key="i">
            <td>{{ u.university_id }}</td>
            <td>{{ u.university_name }}</td>
            <td>{{ u.count_enrollment }}</td>
            <td>{{ u.min_point }}</td>
            <td>{{ u.max_point }}</td>
            <td>{{ u.avg_point }}</td>
          </tr>
        </template>
      </speciality-table>
    </div>
    <div class="vill_table" v-if="villageQuotaInfoState.length>0">
      <speciality-table :cols="cols">
        <template #table-header>
          <th colspan="6">Сельская квота</th>
        </template>
        <template #table-content>
          <tr v-for="(u, i) in villageQuotaInfoState" :key="i">
            <td>{{ u.university_id }}</td>
            <td>{{ u.university_name }}</td>
            <td>{{ u.count_enrollment }}</td>
            <td>{{ u.min_point }}</td>
            <td>{{ u.max_point }}</td>
            <td>{{ u.avg_point }}</td>
          </tr>
        </template>
      </speciality-table>
    </div>
    <div class="grant_info">
      <div class="bold">Целевой грант</div>
      <p>
        Минимальный балл(Общий грант):
        {{ specialityInfo.min_point_target_gr_state_quota }}
      </p>
      <p>
        Минимальный балл(Сельская квота):
        {{ specialityInfo.min_point_target_gr_rural_quota }}
      </p>
    </div>
    <div class="ord_table" v-if="ordinaryQuotaInfoTarget.length>0">
      <speciality-table :cols="cols">
        <template #table-header>
          <th colspan="6">Общий конкурс</th>
        </template>
        <template #table-content>
          <tr v-for="(u, i) in ordinaryQuotaInfoTarget" :key="i">
            <td>{{ u.university_id }}</td>
            <td>{{ u.university_name }}</td>
            <td>{{ u.count_enrollment }}</td>
            <td>{{ u.min_point }}</td>
            <td>{{ u.max_point }}</td>
            <td>{{ u.avg_point }}</td>
          </tr>
        </template>
      </speciality-table>
    </div>
    <div class="vill_table" v-if="villageQuotaInfoTarget.length>0">
      <speciality-table :cols="cols">
        <template #table-header>
          <th colspan="6">Сельская квота</th>
        </template>
        <template #table-content>
          <tr v-for="(u, i) in villageQuotaInfoTarget" :key="i">
            <td>{{ u.university_id }}</td>
            <td>{{ u.university_name }}</td>
            <td>{{ u.count_enrollment }}</td>
            <td>{{ u.min_point }}</td>
            <td>{{ u.max_point }}</td>
            <td>{{ u.avg_point }}</td>
          </tr>
        </template>
      </speciality-table>
    </div>
    <div class="educ_prog">
      <p class="educ_prog_title bold">Образовательные программы</p>
      <div class="educ_prog_item" v-for="s in otherSpecialities" :key="s.name">
        <p class="educ_prog_name" @click.stop="singleEducProgram">
          {{ s.speciality_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SpecialityTable from "@/components/SpecialityTable";
import {
  getSpecialityInfo,
  uniInfo,
  getOtherSpecialities,
} from "@/http/infoAPI";
export default {
  name: "Speciality",
  components: { SpecialityTable },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      specialityInfo: {},
      uniInfoState: [],
      uniInfoTarget: [],
      otherSpecialities: [],
    };
  },
  computed: {
    ordinaryQuotaInfoState() {
      return this.uniInfoState.filter((e) => e.grant_type.includes("Общий конкурс"));
    },
    villageQuotaInfoState() {
      return this.uniInfoState.filter((e) =>
        e.grant_type.includes("Сельская квота")
      );
    },
    ordinaryQuotaInfoTarget() {
      return this.uniInfoTarget.filter((e) => e.grant_type.includes("Общий конкурс"));
    },
    villageQuotaInfoTarget() {
      return this.uniInfoTarget.filter((e) =>
        e.grant_type.includes("Сельская квота")
      );
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
  mounted() {
    getSpecialityInfo(this.id).then(
      (data) => (this.specialityInfo = data.data[0])
    );
    uniInfo(this.id, 'state').then((data) => (this.uniInfoState = data.data));
    uniInfo(this.id, 'target').then((data) => (this.uniInfoTarget = data.data));
    getOtherSpecialities(this.id).then((data) => this.otherSpecialities = data.data);
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
  margin: 4rem 0rem;
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
@media screen and (max-width: 1024px) {
  .speciality{
    padding-left: 8rem;
    padding-right: 8rem;
  }
}
</style>
