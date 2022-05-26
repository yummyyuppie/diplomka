<template>
  <div>
    <loader v-if="loading" />
    <div class="post-single" v-else>
      <div class="scrollTop" @click.stop="scrollTop">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </div>
      <div class="post-single-header">
        <div class="post-single-author">
          <p>{{ post.author }}</p>
          <p>{{ post.title }}</p>
        </div>
        <div class="post-single-thumbnail">
          <img :src="imageUrl" alt="photo" />
        </div>
      </div>
      <div class="post-single-content">
        <div v-html="markdownToHtml"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPostById } from "@/http/storiesAPI";
import { marked } from "marked";
import { mapState } from "vuex";
import Loader from "@/components/Loader";
export default {
  name: "Story",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      post: {},
    };
  },
  components: {
    Loader
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
  mounted() {
    getPostById(this.id).then((data) => (this.post = data.data));
  },
  computed: {
    ...mapState("loader", ["loading"]),
    markdownToHtml() {
      return marked(this.post?.content ?? "", { breaks: true });
    },
    imageUrl() {
      return `${process.env.VUE_APP_ROOT_URL}${this.post?.thumbnail}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.post-single {
  padding: 9rem 8rem;
  &-header {
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    display: flex;
    height: 24rem;
  }
  &-author {
    width: 100%;
    box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 2rem;
    p {
      text-align: center;
      &:first-child {
        color: #000;
        font-weight: 700;
      }
    }
  }
  &-thumbnail {
    width: 40rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem 15rem;
    img{
      width: 100%;
      aspect-ratio: 16/9;
    }
    div {
      width: 100%;
    }
  }
}
.scrollTop {
  position: fixed;
  width: 3rem;
  height: 3rem;
  bottom: 2rem;
  right: 2rem;
  background: #0a2640;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
