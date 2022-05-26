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
          <post-card v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
      <div class="load_more" v-if="hasMore && !loading">
        <span class="load_more_btn" @click.p.prevent="loadMore">
          {{ $t("load_more") }}...
        </span>
      </div>
      <loader v-if="loading" />
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import Loader from "@/components/Loader";

export default {
  name: "Stories",
  components: { PostCard, Loader },
  methods: {
    ...mapActions(["stories/fetchPosts"]),
    ...mapMutations(["stories/setPage"]),
    loadMore() {
      this.$store.commit("stories/setPage");
      this.$store.dispatch("stories/fetchPosts");
    },
  },
  computed: {
    ...mapGetters("stories", ["posts", "hasMore"]),
    ...mapState("loader", ["loading"]),
  },
  mounted() {
    this.$store.dispatch("stories/fetchPosts");
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
    flex-wrap: wrap;
    margin-top: 3rem;
    .info_left,
    .info_right {
      width: 50%;
      display: flex;
      align-items: center;
    }
    .info_left{
      border-radius: 1rem;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .info_right {
      font-family: map-get($font, secondary-font);
      font-size: 4.8rem;
      line-height: 7.2rem;
      padding: 2rem 5rem;
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
.student_posts {
  margin-top: 20rem;
  display: flex;
  justify-content: center;
  .posts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
.load_more {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  &_btn {
    padding: 1.6rem 5.6rem;
    border: 2px solid #0a2640;
    border-radius: 5.6rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.8rem;
    cursor: pointer;
    &:hover {
      background: #000;
      color: #fff;
    }
  }
}
</style>
