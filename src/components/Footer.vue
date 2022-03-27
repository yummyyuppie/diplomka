<template>
  <footer class="footer">
      <div class="suggestions_form">
        <div class="question">
          <span>{{$t('anySuggestions')}}</span>
        </div>
        <div class="input_field">
          <input :placeholder="$t('phone_number')" type="tel" inputmode="tel" v-mask="'+7 (###) ### ## ##'"/>
          <button class="btn-green">{{$t('send')}}</button>
        </div>
      </div>
      <div class="links">
        <div class="info">
          <span class="link_wrapper">
          <div style="margin-bottom: 2rem">{{$t('copyright_message')}}</div>
          <div>All rights reserved.</div>
          </span>
        </div>
        <div class="categories">
          <span class="link_wrapper">
          <span class="title">{{$t('categories')}}</span>
          <span class="nav_link">
            <router-link to="/">{{ $t("main") }}</router-link>
          </span>
          <span class="nav_link">
            <router-link to="/stories">{{ $t("stories") }}</router-link>
          </span>
          <span class="nav_link">
            <router-link to="/specialities">{{ $t("specialities") }}</router-link>
          </span>
          </span>
        </div>
        <div class="contacts">
          <span class="link_wrapper">
          <span class="title">{{ $t("contact_us") }}</span>
          <span class="social-media telegram">Telegram</span>
          <span class="social-media whatsapp">Whatsapp</span>
          <span class="social-media instagram">Instagram</span>
        </span>
        </div>
    </div>
  </footer>
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  name: "Footer",
  directives: {mask}
};
</script>

<style scoped lang="scss">
.footer{
  padding: 4rem 10rem;
}
.suggestions_form{
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0A2640;
  border-radius: 1.2rem;
  .question{
    display: flex;
    justify-content: center;
    span{
      font-family: map-get($font, secondary-font);
      font-size: 4.8rem;
      line-height: 7.2rem;
      color: map-get($colors, white);
      text-align: center;
    }
  }
  .input_field{
    margin-top: 5rem;
    font-size: 2rem;
    color: map-get($colors, black);
    display: flex;
    gap: 1.5rem;
    align-items: center;
    input{
      padding: 1.6rem;
      background: map-get($colors, white);
      border: 2px solid map-get($colors, white);
      border-radius: 24rem;
    }
  }
}
.links{
  font-size: 2rem;
  line-height: 3.2rem;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  color: map-get($colors, gray);
  margin-top: 8rem;
  .title{
    font-weight: map-get($font, weight-fat);
    color: map-get($colors, black)
  }
  .categories, .contacts, .info{
    display: flex;
    justify-content: center;
  }
  .link_wrapper{
    display: flex;
    flex-direction: column;
  }
  .categories {
    a{
      color: map-get($colors, gray);
      text-decoration: none;
      cursor: pointer;
      &:hover{
        color: #0A2640;
      }
    }
    .nav_link{
      margin-bottom: 1rem;
    }
  }
  .contacts{
    .social-media{
      cursor: pointer;
      margin-bottom: 1rem;
      &:hover{
        color: #0A2640;
      }
    }
  }
  .info{
    padding: 1rem;
    align-items: center;
  }
}
</style>