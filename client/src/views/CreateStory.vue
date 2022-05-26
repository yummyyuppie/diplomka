<template>
  <div class="story_wrapper">
    <form @submit.prevent="handleSubmit" ref="form">
      <div class="story_header">
        <p class="story_title">{{ $t("create_your_own_story") }}</p>
        <div class="story_actions">
          <button class="story_actions_item" @click.prevent="resetForm">
            <font-awesome-icon icon="fa-solid fa-arrow-rotate-right" />
            <span>{{ $t("reset") }}</span>
          </button>
          <button class="story_actions_item" @click.prevent="showModal = true">
            <font-awesome-icon icon="fa-solid fa-eye" />
            <span>{{ $t("view") }}</span>
          </button>
          <button class="story_actions_item" type="submit">
            <font-awesome-icon icon="fa-solid fa-check-double" />
            <span>{{ $t("post") }}</span>
          </button>
        </div>
      </div>
      <div class="input_forms">
        <div class="input_title">
          <label for="title">{{ $t("title") }}</label>
          <input
            id="title"
            :placeholder="$t('title')"
            maxlength="120"
            v-model="defaultPost.title"
          />
        </div>
        <div class="input_image">
          <div class="input_image-input">
            <input
              id="thumbnail"
              type="file"
              hidden
              @change="uploadFile"
              ref="thumbnail"
            />
            <label
              class="input_image-label"
              :class="{ disabled: fileName.length > 0 }"
              @click.stop="clickInput"
            >
              <span>{{ $t("place_image") }}</span>
              <font-awesome-icon icon="fa-solid fa-image" />
            </label>
          </div>
          <div class="input_image-name" v-if="defaultPost.thumbnail">
            <input disabled v-model="fileName" class="image_name" />
            <button @click.prevent="defaultPost.thumbnail = ''">
              <font-awesome-icon icon="fa-solid fa-xmark" size="sm" />
            </button>
          </div>
        </div>
        <div class="input_content">
          <textarea
            v-model="defaultPost.content"
            :placeholder="`${$t('create_your_own_story')}`"
          ></textarea>
          <div class="markdown_rules">
            <p class="rules_title">General Markdown Rules</p>
            <ul>
              <li v-for="(mr, i) in markDownRules" :key="i">
                <p>
                  <span class="markdown_title">{{ mr.title }}:</span>
                  {{ mr.rule }}
                </p>
              </li>
              <li>
                <a
                  href="https://www.markdownguide.org/basic-syntax/"
                  target="_blank"
                  >Find out more</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="input_author">
          <label for="author">{{ $t("author") }}</label>
          <input
            id="author"
            :placeholder="$t('author')"
            maxlength="120"
            v-model="defaultPost.author"
          />
        </div>
      </div>
    </form>
    <post-view-modal
      v-show="showModal"
      @closeModal="showModal = false"
      :post-info="defaultPost"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { createPost } from "@/http/storiesAPI";
import PostViewModal from "@/components/PostViewModal";
export default {
  name: "CreateStory",
  data() {
    return {
      defaultPost: {
        title: "",
        thumbnail: "",
        content: "",
        author: "",
      },
      showModal: false,
    };
  },
  components: { PostViewModal },
  computed: {
    ...mapGetters("helpers", ["markDownRules"]),
    fileName() {
      return this.defaultPost.thumbnail?.name ?? "";
    },
  },
  methods: {
    ...mapActions(["notifications/addNotification"]),
    uploadFile() {
      const file = this.$refs.thumbnail.files[0];
      if (file?.name) {
        this.defaultPost.thumbnail = file;
      }
    },
    clickInput() {
      if (this.fileName) {
        return;
      }
      this.$refs.thumbnail.click();
    },
    async handleSubmit() {
      const formData = new FormData();
      this.defaultPost.slug = this.defaultPost.title
        .toLowerCase()
        .replace(/[^a-zA-Zа-яА-Я]/g, " ")
        .split(" ")
        .filter((e) => e.trim())
        .join("-");
      for (let key in this.defaultPost) {
        formData.append(key, this.defaultPost[key]);
      }
      createPost(formData)
        .then(() => {
          this.$store.dispatch("notifications/addNotification", {
            type: "success",
            message: "success_add",
          });
          this.$router.push({ path: "/stories" });
        })
        .catch((e) => {
          this.$store.dispatch("notifications/addNotification", {
            type: "error",
            message: e?.response?.data?.message || "error",
          });
        });
    },
    resetForm() {
      this.defaultPost = {
        title: "",
        thumbnail: "",
        content: "",
        author: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.story {
  &_wrapper {
    padding: 0 5rem;
  }
  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_title {
    font-size: 2.4rem;
    font-weight: 700;
  }
  &_actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      margin-right: 1rem;
      border: 1px solid #23a6f0;
      color: #23a6f0;
      background: #fff;
      border-radius: 0.5rem;
      cursor: pointer;
      &:hover {
        background: #23a6f0;
        color: #fff;
      }
    }
  }
}
.input {
  &_title {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    input {
      padding: 1rem;
      border-radius: 0.5rem;
      border: solid 1.5px #d3d3d3;
      font-size: 1.6rem;
    }
  }
  &_author {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    input {
      padding: 1rem;
      border-radius: 0.5rem;
      border: solid 1.5px #d3d3d3;
      font-size: 1.6rem;
    }
  }
  &_content {
    display: flex;
    align-items: center;
    gap: 2rem;
    textarea {
      resize: none;
      padding: 1rem;
      border-radius: 0.5rem;
      border: solid 1.5px #d3d3d3;
      width: 100%;
      margin-top: 2rem;
      font-size: 1.6rem;
      min-height: 20rem;
      overflow: auto;
    }
    .markdown_rules {
      background: #fff;
      box-shadow: 0 0 5pt 0.5pt #dedcdc;
      height: 100%;
      padding: 3rem;
      font-size: 1.8rem;
      line-height: 2.4rem;
      width: 50rem;
      ul {
        li {
          margin-top: 1rem;
          display: flex;
          a {
            color: #23a6f0;
          }
          &:last-child {
            justify-content: center;
            align-items: center;
          }
        }
      }
      .rules_title,
      .markdown_title {
        font-weight: 700;
      }
    }
  }
  &_image {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    &-label {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      padding: 1rem;
      border: 1px solid #000;
      cursor: pointer;
      border-radius: 0.5rem;
      &:hover {
        background: gray;
        color: #fff;
        border: 1px solid #fff;
      }
    }
    .disabled {
      user-select: none;
      background: #8b9296;
      color: #fff;
      border: 1px solid #fff;
    }
    &-name {
      display: flex;
      align-items: center;
      border-radius: 0.5rem;
      overflow: hidden;
      margin-left: 1rem;
      height: 3rem;
      .image_name {
        background: #969292;
        padding: 0.5rem;
        color: #fff;
        border: none;
        height: 100%;
      }
      button {
        padding: 0.5rem;
        background: black;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 0 0.5rem 0.5rem 0;
        height: 100%;
      }
    }
  }
}
</style>
