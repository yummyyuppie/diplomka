<template>
  <div class="post">
    <div class="post_img">
      <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" alt="photo" />
    </div>
    <div class="post_content">
      <div class="post_category">
        <b>Категория:</b> Архитектура
      </div>
      <div class="post_title">
        Как с 1 курса начав изучать прораммирование, я стал хаккером
      </div>
      <div class="post_author">
        <div class="author_photo">
          <img src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="photo" />
        </div>
        <p class="author_name">Азамат Берикулы</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard"
};
</script>

<style scoped lang="scss">
.post{
  width: 30rem;
  &_img{
    width: 30rem;
    height: 21rem;
    border-radius: 12px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  &_title{
    font-size: 2rem;
    line-height: 3.2rem;
  }
  &_content{
    padding-top: 1.2rem;
  }
  &_author{
    display: flex;
    gap: 1.2rem;
    margin-top: 2rem;
    .author_photo{
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.post_category, .author_name{
  font-weight: map-get($font, weight-fat);
  font-size: 1.6rem;
  line-height: 2.8rem;
}
</style>