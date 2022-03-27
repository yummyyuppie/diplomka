<template>
  <div class="slider_card">
    <div class="card_review">
      {{ review.text }}
    </div>
    <div class="card_author">
      <div class="author_photo">
<!--        <img :src="review.img" alt="photo" v-if="review?.img" />-->
        <img src="../assets/img/default-photo.png" />
      </div>
      <div class="author_info">
        <div class="author_name">
          {{ review.author_name }}
        </div>
        <div class="author_status">
          {{ review.author_status }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      default: () => {},
    },
  },
  name: "SliderCard",
};
</script>

<style scoped lang="scss">
.slider_card{
  padding: 4rem;
  background: map-get($colors, white);
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  width: 350px;
  height: 250px;
  .card_review{
    font-size: 2.4rem;
    line-height: 3.6rem;
    margin-bottom: 4rem;
  }
  .card_author{
    display: flex;
    gap: 1.6rem;
    .author_photo{
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .author_name{
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 3.2rem;
      color: #0A2640;
    }
    .author_status{
      font-size: 1.4rem;
      line-height: 32px;
      color: #0A2640;
    }
  }
}
</style>
