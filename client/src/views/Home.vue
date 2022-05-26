<template>
  <div class="home">
    <intro>
      <template #content v-if="!showModal">
        <div class="intro_title">
          {{ $t("intro_title") }}
        </div>
        <div class="intro_text">
          {{ $t("intro_text") }}
        </div>
        <div class="intro_btn">
          <button class="btn-green" @click.stop="showModal = true">
            {{ $t("enter_score") }}
          </button>
        </div>
      </template>
      <template #content v-else>
        <div class="ent_form">
          <div class="form_content">
            <div class="subject first_subject form_item">
              <div class="form_title">{{ $t("profile_subject_1") }}</div>
              <div class="clear">
                <custom-select
                  :placeholder="$t('subject_1')"
                  :options="getFirstSubjectOptions"
                  :name="'s1'"
                  :selected="s1"
                  @setSelected="setSubject"
                />
                <span class="clear_btn" @click.stop="s1 = ''">
                  <font-awesome-icon icon="fa-solid fa-xmark" size="sm" />
                </span>
              </div>
            </div>
            <div class="subject second_subject form_item">
              <div class="form_title">{{ $t("profile_subject_2") }}</div>
              <div class="clear">
                <custom-select
                  :placeholder="$t('subject_2')"
                  :options="getSecondSubjectOptions"
                  :name="'s2'"
                  :selected="s2"
                  @setSelected="setSubject"
                />
                <span class="clear_btn" @click.stop="s2 = ''">
                  <font-awesome-icon icon="fa-solid fa-xmark" size="sm" />
                </span>
              </div>
            </div>
            <div class="village_quota form_item">
              <div class="form_title">{{ $t("village_quota") }}</div>
              <input
                type="checkbox"
                class="checkbox-iphone"
                v-model="filters.q"
              />
            </div>
            <div class="ent_points form_item">
              <div class="form_title">{{ $t("ent_points") }}</div>
              <input
                type="number"
                class="points"
                inputmode="tel"
                min="50"
                max="140"
                :placeholder="$t('ent_points')"
                v-model="filters.p"
                @focusout="handleUntScore"
              />
            </div>
          </div>
          <div class="btn_wrapper">
            <div
              class="chances_btn"
              @click.stop="exploreChances"
              :class="{ disabled: !isReadyToSubmit }"
            >
              {{ $t("explore_chances") }}
            </div>
          </div>
        </div>
      </template>
    </intro>
    <template v-if="!showModal">
      <div class="about">
        <div class="about_title">
          <p class="small_title">{{ $t("we_offer") }}</p>
          <p class="main_title">{{ $t("about_us") }}</p>
        </div>
        <div class="about_info">
          <div class="cards">
            <div class="accurate_percentage">
              <div class="card_photo">
                <img
                  src="../assets/img/accurate-percentage.png"
                  alt="accurate_percentage"
                />
              </div>
              <div class="card_description">
                <p class="card_title">{{ $t("accurate_percentage") }}</p>
                <p class="card_text">{{ $t("text_accurate_percentage") }}</p>
                <span class="button-link"> {{ $t("redirect") }} &#8594; </span>
              </div>
            </div>
            <div class="student_stories">
              <div class="about_photo">
                <img
                  src="../assets/img/student-stories.png"
                  alt="student_stories"
                />
              </div>
              <div class="card_description">
                <p class="card_title">{{ $t("student_stories") }}</p>
                <p class="card_text">{{ $t("text_student_stories") }}</p>
                <span class="button-link"> {{ $t("redirect") }} &#8594; </span>
              </div>
            </div>
            <div class="free_service">
              <div class="about_photo">
                <img src="../assets/img/free-service.png" alt="free_service" />
              </div>
              <div class="card_description">
                <p class="card_title">{{ $t("free_service") }}</p>
                <p class="card_text">{{ $t("text_free_service") }}</p>
                <span class="button-link"> {{ $t("redirect") }} &#8594; </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="reviews">
        <div class="review_header">
          <span class="review_title">{{ $t("student_reviews") }}</span>
        </div>
        <div class="review_content">
          <div class="slide-track">
            <slider-card v-for="(r, i) in reviews" :key="i" :review="r" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import SliderCard from "@/components/SliderCard";
import CustomSelect from "@/components/CustomSelect";
import Intro from "@/components/Intro";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: { Intro, SliderCard, CustomSelect },
  data() {
    return {
      showModal: false,
      filters: {},
      s1: "",
      s2: "",
    };
  },
  computed: {
    ...mapGetters("helpers", ["subjects"]),
    reviews() {
      return [
        {
          text: "“Wow, очень классный сервис, помог сильно”",
          author_name: "Аружан Алишерова",
          author_status: "Абитуриент",
        },
        {
          text: "“Здесь я смог найти то, что мне нужно”",
          author_name: "Жансерик Нурпеис",
          author_status: "Абитуриент",
        },
        {
          text: "“Радует то, что сервис бесплатный.”",
          author_name: "Азамат Болат",
          author_status: "Абитуриент",
        },
        {
          text: "“Радует то, что сервис бесплатный.”",
          author_name: "Азамат Болат",
          author_status: "Абитуриент",
        },
        {
          text: "“Радует то, что сервис бесплатный.”",
          author_name: "Азамат Болат",
          author_status: "Абитуриент",
        },
        {
          text: "“AAAAAAAAAAAAAAAA”",
          author_name: "Азамат Болат",
          author_status: "Абитуриент",
        },
      ];
    },
    isReadyToSubmit() {
      return this.s1 && this.s2 && this.filters.p;
    },
    getFirstSubjectOptions() {
      return this.subjects(this.s2);
    },
    getSecondSubjectOptions() {
      return this.subjects(this.s1);
    },
  },
  methods: {
    exploreChances() {
      if (!this.isReadyToSubmit) return;
      this.handleUntScore();
      const { q = false, p } = this.filters;
      this.$router.push({
        name: "Results",
        query: { s1: this.s1, s2: this.s2, q, p },
      });
    },
    setSubject(name, option) {
      if (name === "s1") this.s1 = option.value;
      else if (name === "s2") this.s2 = option.value;
    },
    handleUntScore() {
      const isCreative =
        this.s1 === "Творческий экзамен" || this.s2 === "Творческий экзамен";
      const value = this.filters?.p;
      if (isCreative) {
        if (value > 125 || value < 50) {
          this.filters.p = 50;
        }
      } else {
        if (value > 140 || value < 50) {
          this.filters.p = 50;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin white-gradient {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.about {
  padding: 3rem 0;
}
.about_title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem 0;
  .small_title {
    color: map-get($colors, gray);
    font-size: 2rem;
    text-align: center;
  }
  .main_title {
    font-size: 4.8rem;
    line-height: 7.2rem;
    font-family: map-get($font, secondary-font);
    width: 50%;
    text-align: center;
  }
}
.about_info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20rem;
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10rem;
    .accurate_percentage,
    .student_stories,
    .free_service {
      width: 25%;
      min-width: 30rem;
    }
    .card_title {
      font-size: 2.4rem;
      line-height: 3.6rem;
      margin: 2.4rem 0 1.2rem;
    }
    .card_text {
      font-size: 2rem;
      line-height: 3.2rem;
      color: map-get($colors, gray);
      margin-bottom: 2.8rem;
    }
    .button-link {
      font-weight: map-get($font, weight-fat);
      font-size: 2rem;
      line-height: 3.6rem;
      position: relative;
      cursor: pointer;
      &:after {
        position: absolute;
        top: 100%;
        left: 0%;
        width: 0;
        height: 2px;
        background: #222;
        display: block;
        content: "";
        transition: width 0.5s ease-in-out;
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
}
.reviews {
  background: #0a2640;
  padding: 9rem 15rem;
  .review {
    &_title {
      font-family: map-get($font, secondary-font);
      color: map-get($colors, white);
      font-size: 4.8rem;
      line-height: 7.2rem;
    }
    &_header {
      margin-bottom: 4rem;
      .slider_buttons {
        display: flex;
        gap: 2.8rem;
        cursor: pointer;
        .slider_button {
          width: 7rem;
          height: 7rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: map-get($colors, white);
          svg {
            width: 3.6rem;
            height: 3.6rem;
          }
        }
      }
    }
  }
  .review_content {
    margin: auto;
    overflow: hidden;
    position: relative;
    &::before,
    &::after {
      @include white-gradient;
      content: "";
      height: 100%;
      position: absolute;
      width: 200px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }

    .slide-track {
      animation: scroll $animationSpeed linear infinite;
      display: flex;
      gap: 1rem;
      width: calc(250px * 14);
    }
  }
}
</style>
