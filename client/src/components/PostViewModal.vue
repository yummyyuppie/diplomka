<template>
  <div class="post-view" @click.self="$emit('closeModal')">
    <div class="post-view-card">
      <div class="post-view-header">
        <div class="post-view-author">
          <p>{{ postInfo.author }}</p>
          <p>{{ postInfo.title }}</p>
        </div>
        <div class="post-view-thumbnail">
          <img :src="imageUrl" alt="photo" />
        </div>
      </div>
      <div class="post-view-content">
        <div v-html="markdownToHtml"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  name: "PostViewModal",
  props: {
    postInfo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    markdownToHtml() {
      return marked(this.postInfo?.content, { breaks: true });
    },
    imageUrl() {
      if (this.postInfo?.thumbnail) {
        return URL.createObjectURL(this.postInfo?.thumbnail);
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.post-view {
  position: absolute;
  inset: 0;
  background: #fff;
  backdrop-filter: blur(2px);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  &-card {
    background: #fff;
    width: 80%;
    height: 100%;
    overflow: auto;
    padding: 2rem;
    color: #718096;
    border: 1px solid #e2e2e2;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #000;
    }
  }
  &-header {
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    display: flex;
  }
  &-author {
    width: 70%;
    box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    p {
      text-align: center;
      &:first-child {
        color: #000;
        font-weight: 700;
      }
    }
  }
  &-thumbnail {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 5rem;
    div {
      width: 100%;
      p {
        font-size: 1.2rem;
        img {
          width: 100%;
          aspect-ratio: 16/9;
        }
      }
      img {
        width: 100%;
        aspect-ratio: 16/9;
      }
    }
  }
}
</style>
