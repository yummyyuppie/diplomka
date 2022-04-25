<template>
  <div class="stories">
    <div class="container">
      <div class="info_section">
        <p class="small_text">{{ $t("section") }}</p>
        <p class="main_title">{{ $t("stories") }}</p>
        <div class="info_content">
          <div class="info_left">
            <img src="../assets/img/stories.png" alt="photo" />
          </div>
          <div class="info_right">
            {{ $t("exploreStories") }}
          </div>
        </div>
      </div>
      <div class="students_section">
        <p class="students_title">{{ $t("students") }}</p>
      </div>
      <div class="student_posts">
        <div class="posts">
          <post-card v-for="(post, i) in posts" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
export default {
  name: "Stories",
  components: { PostCard },
  computed: {
    posts() {
      return [0, 1, 2, 3, 4, 5, 6];
    },
  },
};
</script>

<style scoped lang="scss">
.info_section {
  .small_text,
  .main_title {
    text-align: center;
  }
  .small_text {
    font-size: 2rem;
    line-height: 3.2rem;
  }
  .main_title {
    font-family: map-get($font, secondary-font);
    font-size: 6.4rem;
    line-height: 8.4rem;
  }
  .info_content {
    display: flex;
    margin-top: 3rem;
    .info_left,
    .info_right {
      width: 50%;
      display: flex;
      align-items: center;
    }
    .info_right {
      font-family: map-get($font, secondary-font);
      font-size: 4.8rem;
      line-height: 7.2rem;
    }
  }
}
.container {
  position: relative;
}
.students_section {
  margin-top: 10rem;
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: map-get($colors, black);
  }
  .students_title {
    font-family: map-get($font, secondary-font);
    font-size: 4.8rem;
    line-height: 7.2rem;
    padding: 0 5rem;
    margin-bottom: 4rem;
  }
}
.student_posts{
  margin-top: 20rem;
  display: flex;
  justify-content: center;
  .posts{
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    width: 60%;
  }
}
</style>
