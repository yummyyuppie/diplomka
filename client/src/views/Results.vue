<template>
  <section class="results">
    <loader v-if="loading" />
    <template v-else>
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
          <speciality-card
            v-for="s in specialities"
            :key="s.id"
            :speciality="s"
          >
            <template #prob>
              <div class="enter_probability">
                <div class="prob_percent">{{ s.chance_n }} %</div>
                <div class="prob_text" :style="{ color: getColor(s.chance_status) }">
                  {{ s.chance_status }}
                </div>
              </div>
            </template>
          </speciality-card>
        </template>
      </div>
    </template>
  </section>
</template>
<script>
import SpecialityCard from "@/components/SpecialityCard";
import Loader from "@/components/Loader";
import { calculateChances } from "../http/infoAPI";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Specialities",
  data() {
    return {
      specialities: [],
    };
  },
  components: { Loader, SpecialityCard },
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
    ...mapGetters("helpers", ["subjects"]),
    ...mapState("loader", ["loading"]),
    firstSubject() {
      return this.subjects().find((e) => e.value === this.s1)?.text ?? "";
    },
    secondSubject() {
      return this.subjects().find((e) => e.value === this.s2)?.text ?? "";
    },
    isVillageQuota() {
      return this.q;
    },
  },
  methods: {
    getColor(point) {
      if (point === 'Высокий') return "green";
      if (point === 'Средний') return "gold";
      else return "red";
    },
  },
  mounted() {
    if (!(this.firstSubject && this.secondSubject && this.p)) {
      this.$router.push("/404");
      return;
    }
    calculateChances(this.s1, this.s2, this.q, this.p).then(
      (data) => (this.specialities = data.data)
    );
  },
};
</script>

<style scoped lang="scss">
.results {
  position: relative;
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
