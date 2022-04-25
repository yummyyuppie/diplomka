<template>
  <section class="results">
    <div class="results_info">
      <p class="results_header">{{ $t("your_ent_score") }}: {{ p }}</p>
      <p class="profile_subjects">
        {{ $t("profile_subjects") }}: {{ firstSubject }} и {{ secondSubject }}
      </p>
      <p class="quota_type">
        {{ $t("quota") }}:
        {{ isVillageQuota ? $t("village_quota") : $t("ordinary_quota") }}
      </p>
    </div>
    <div class="results_specialities">
      <template>
        <speciality-card v-for="s in specialities" :key="s.id" :speciality="s">
          <template #prob>
            <div class="enter_probability">
              <div class="prob_percent">{{ s.probability }} %</div>
              <div class="prob_text" :style="{ color: getColor(s.probability) }">
                {{ s.probability_text }}
              </div>
            </div>
          </template>
        </speciality-card>
      </template>
    </div>
  </section>
</template>
<script>
import SpecialityCard from "@/components/SpecialityCard";
import { mapGetters } from "vuex";
export default {
  name: "Specialities",
  components: { SpecialityCard },
  props: {
    s1: {
      type: String,
      default: "",
    },
    s2: {
      type: String,
      default: "",
    },
    q: {
      type: [String, Boolean],
      default: false,
    },
    p: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    ...mapGetters(["subjects"]),
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
    firstSubject() {
      return this.subjects.find((e) => e.value === this.s1)?.text ?? "";
    },
    secondSubject() {
      return this.subjects.find((e) => e.value === this.s2)?.text ?? "";
    },
    isVillageQuota() {
      return new Boolean(this.q);
    },
  },
  methods: {
    getColor(point) {
      if (point >= 85) return "green";
      if (point >= 60) return "gold";
      else return "red";
    },
  },
  mounted() {
    if (!(this.firstSubject && this.secondSubject && this.p)) {
      this.$router.push("/404");
    }
  },
};
</script>

<style scoped lang="scss">
.results {
  padding: 10rem 20rem;
  background: #0a2640;
  &_info {
    border-bottom: 1px solid #ffffff;
    margin-bottom: 3.5rem;
  }
}
.results_header,
.profile_subjects,
.quota_type {
  color: #fff;
}
.results_header {
  font-weight: 700;
  font-size: 34px;
  line-height: 46px;
  text-align: center;
}
.profile_subjects,
.quota_type {
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: start;
}
</style>
