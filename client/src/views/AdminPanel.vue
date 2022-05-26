<template>
  <div class="login_form">
    <form>
      <h1>{{ $t("welcome_back") }}</h1>
      <div class="input-wrapper">
        <input type="text" :placeholder="`${$t('username')}`" />
        <i>
          <font-awesome-icon icon="fa-solid fa-user" />
        </i>
      </div>

      <div class="input-wrapper">
        <input type="password" :placeholder="`${$t('password')}`" />
        <i>
          <font-awesome-icon icon="fa-solid fa-key" />
        </i>
      </div>
      <div>
        <button type="submit">
          {{ isLogin ? $t("signIn") : $t("register") }}
          <i>
            <font-awesome-icon icon="fa-solid fa-right-to-bracket" size="2xs" />
          </i>
        </button>
      </div>
      <small>
        {{ isLogin ? $t("noAccount") : $t("hasAccount") }}
        <a @click.stop="changeUrl">
          {{ isLogin ? $t("register") : $t("signIn") }}</a
        >
      </small>
    </form>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
  computed: {
    isLogin() {
      return this.$route.name === "Login";
    },
  },
  methods: {
    changeUrl() {
      if (this.isLogin) {
        this.$router.push({ path: "/register" });
      } else this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.login_form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
form {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(74, 79, 97, 0.25) 0px 13px 27px -5px,
    rgba(74, 79, 97, 0.3) 0px 8px 16px -8px;
  padding: 20px 35px 35px 35px;
  text-align: center;
  width: 500px;

  i {
    color: #fff;
    font-size: 30px;
    transition: color 250ms ease-in;
  }

  .input-wrapper {
    margin-bottom: 30px;
    position: relative;

    i {
      color: #a4a9b6;
      position: absolute;
      opacity: 0.85;
      right: 13px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  h1 {
    font-weight: 600;
    letter-spacing: 0;
    margin: 25px 0 0 0;
    margin: 2px 0 44px 0;
  }

  input[type="text"],
  input[type="password"] {
    border: 1px solid #d8ddf0;
    border-radius: 6px;
    font-size: 15px;
    padding: 13px 9px 13px 9px;
    transition: border-color 250ms ease-in;

    &:focus {
      border-color: #4c70ff;
      outline: none;
    }

    &:focus + i {
      color: #4c70ff;
    }
  }

  input {
    width: 100%;
  }

  ::placeholder {
    color: #a4a9b6;
    font-size: 15px;
    opacity: 1;
  }

  button[type="submit"] {
    background: #4c70ff;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 18px 10px;
    width: 100%;

    i {
      margin-left: 5px;
    }
  }
}
small {
  font-size: 1.2rem;
  a {
    color: #4c70ff;
    font-size: 1.2rem;
    cursor: pointer;
  }
}
</style>
