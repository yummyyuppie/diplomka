<template>
  <div class="home">
    <div class="intro">
      <div class="intro_content">
        <div class="intro_left">
          <div class="intro_title">
            {{$t('intro_title')}}
          </div>
          <div class="intro_text">
            {{$t('intro_text')}}
          </div>
          <div class="intro_btn">
            <button class="btn-green">
              {{$t('enter_score')}}
            </button>
          </div>
        </div>
        <div class="intro_right">
          <img src="../assets/img/intro_photo.png" alt="photo" />
        </div>
      </div>
      <div class="intro_universities">
        <img src="../assets/img/universities/uib.png" alt="uib" />
        <img src="../assets/img/universities/narxoz.png" alt="narxoz" />
        <img src="../assets/img/universities/iitu.png" alt="iitu" />
        <img src="../assets/img/universities/kaznu.png" alt="kaznu" />
        <img src="../assets/img/universities/kimep.png" alt="kimep" />
        <img src="../assets/img/universities/kbtu.png" alt="kbtu" />
        <img src="../assets/img/universities/sdu.png" alt="sdu" />
      </div>
    </div>
    <div class="about">
      <div class="about_title">
        <p class="small_title">{{$t('we_offer')}}</p>
        <p class="main_title">{{$t('about_us')}}</p>
      </div>
      <div class="about_info">
        <div class="cards">
          <div class="accurate_percentage">
            <div class="card_photo">
              <img src="../assets/img/accurate-percentage.png" alt="accurate_percentage" />
            </div>
            <div class="card_description">
              <p class="card_title">{{$t('accurate_percentage')}}</p>
              <p class="card_text">{{$t('text_accurate_percentage')}}</p>
              <span class="button-link">
                {{$t('redirect')}} &#8594;
              </span>
            </div>
          </div>
          <div class="student_stories">
            <div class="about_photo">
              <img src="../assets/img/student-stories.png" alt="student_stories" />
            </div>
            <div class="card_description">
              <p class="card_title">{{$t('student_stories')}}</p>
              <p class="card_text">{{$t('text_student_stories')}}</p>
              <span class="button-link">
                {{$t('redirect')}} &#8594;
              </span>
            </div>
          </div>
          <div class="free_service">
            <div class="about_photo">
              <img src="../assets/img/free-service.png" alt="free_service" />
            </div>
            <div class="card_description">
              <p class="card_title">{{$t('free_service')}}</p>
              <p class="card_text">{{$t('text_free_service')}}</p>
              <span class="button-link">
                {{$t('redirect')}} &#8594;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews">
      <div class="review_header">
        <span class="review_title">{{$t('student_reviews')}}</span>
      </div>
      <div class="review_content">
        <div class="slide-track">
          <slider-card v-for="(r, i) in reviews" :key="i" :review="r"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderCard from "../components/SliderCard";
export default {
  name: "Home",
  components: { SliderCard },
  computed: {
    reviews (){
      return [
        {
          text: '“Wow, очень классный сервис, помог сильно”',
          author_name: 'Аружан Алишерова',
          author_status: 'Абитуриент'
        },
        {
          text: '“Здесь я смог найти то, что мне нужно”',
          author_name: 'Жансерик Нурпеис',
          author_status: 'Абитуриент'
        },
        {
          text: '“Радует то, что сервис бесплатный.”',
          author_name: 'Азамат Болат',
          author_status: 'Абитуриент'
        },
        {
          text: '“Радует то, что сервис бесплатный.”',
          author_name: 'Азамат Болат',
          author_status: 'Абитуриент'
        },
        {
          text: '“Радует то, что сервис бесплатный.”',
          author_name: 'Азамат Болат',
          author_status: 'Абитуриент'
        },
        {
          text: '“AAAAAAAAAAAAAAAA”',
          author_name: 'Азамат Болат',
          author_status: 'Абитуриент'
        },
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin white-gradient {
  background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7))}
}
.intro{
  padding: 4rem 10rem;
  background: #0A2640;
  color: map-get($colors, white);
  &_content{
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
  }
  &_title{
    font-family: map-get($font, secondary-font);
    font-size: 4.8rem;
    line-height: 7.2rem;
    margin-bottom: 1.6rem;
  }
  &_text{
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin-bottom: 4rem;
  }
  &_btn{
    .btn-green{
      font-weight: map-get($font, weight-fat);
      font-size: 2rem;
      line-height: 3.6rem;
    }
  }
  &_right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &_universities{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5.6rem;
  }
}
.about{
  padding: 3rem 0;
}
.about_title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem 0;
  .small_title{
    color: map-get($colors, gray);
    font-size: 2rem;
    text-align: center;
  }
  .main_title{
    font-size: 4.8rem;
    line-height: 7.2rem;
    font-family: map-get($font, secondary-font);
    width: 50%;
    text-align: center;
  }
}
.about_info{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20rem;
  .cards{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10rem;
    .accurate_percentage, .student_stories, .free_service{
      width: 25%;
      min-width: 30rem;
    }
    .card_title{
      font-size: 2.4rem;
      line-height: 3.6rem;
      margin: 2.4rem 0 1.2rem;
    }
    .card_text{
      font-size: 2rem;
      line-height: 3.2rem;
      color: map-get($colors, gray);
      margin-bottom: 2.8rem;
    }
    .button-link{
      font-weight: map-get($font, weight-fat);
      font-size: 2rem;
      line-height: 3.6rem;
      position: relative;
      cursor: pointer;
      &:after{
        position:absolute;
        top:100%;
        left:0%;
        width:0;
        height:2px;
        background:#222;
        display:block;
        content:'';
        transition: width 0.5s ease-in-out;
      }
      &:hover:after{
        width: 100%;
      }
    }
  }
}
.reviews{
  background: #0A2640;
  padding: 9rem 15rem;
  .review{
    &_title{
      font-family: map-get($font, secondary-font);
      color: map-get($colors, white);
      font-size: 4.8rem;
      line-height: 7.2rem;
    }
    &_header{
      margin-bottom: 4rem;
      .slider_buttons{
        display: flex;
        gap: 2.8rem;
        cursor: pointer;
        .slider_button{
          width: 7rem;
          height: 7rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: map-get($colors, white);
          svg{
            width: 3.6rem;
            height: 3.6rem;
          }
        }
      }
    }
  }
  .review_content{
    margin: auto;
    overflow:hidden;
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
