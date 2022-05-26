<template>
  <div class="post">
    <div class="post_img">
      <img :src="imageUrl" alt="photo" />
    </div>
    <div class="post_content">
      <!--      <div class="post_category"><b>Категория:</b> {{ categories }}</div>-->
      <div class="post_title">
        {{ post.title }}
      </div>
      <div class="post_author">
        <div class="author_photo">
          <img
            src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
            alt="photo"
          />
        </div>
        <p class="author_name">{{ post.author }}</p>
      </div>
      <span class="open_post" @click.stop="readPost">
        <span>{{ $t("redirect") }}</span>
        <font-awesome-icon icon="fa-solid fa-angle-right" size="lg" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    categories() {
      return this.post?.tags?.join(", ");
    },
    imageUrl() {
      return `${process.env.VUE_APP_ROOT_URL}${this.post?.thumbnail}`;
    },
  },
  methods: {
    readPost(){
      this.$router.push({path: `/stories/${this.post?.id}`})
    }
  }
};
</script>

<style scoped lang="scss">
.post {
  width: 30rem;
  margin: 0rem 5rem 5rem 0rem;
  overflow: hidden;
  &_img {
    width: 30rem;
    height: 21rem;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid gray;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &_title {
    font-size: 2rem;
    line-height: 3.2rem;
  }
  &_content {
    padding-top: 1.2rem;
  }
  &_author {
    display: flex;
    gap: 1.2rem;
    margin-top: 2rem;
    .author_photo {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.post_category,
.author_name {
  font-size: 1.6rem;
  line-height: 2.8rem;
}
.open_post {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
  border: 1px solid #23a6f0;
  border-radius: 37px;
  width: fit-content;
  color: #23a6f0;
  margin-top: 1.6rem;
  cursor: pointer;
  &:hover {
    background: #23a6f0;
    color: #fff;
  }
}
</style>
