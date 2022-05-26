<template>
  <div class="intro">
    <div class="intro_content">
      <div class="intro_left">
        <slot name="content"></slot>
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
    <!--    <div class="circle_shadow"></div>-->
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style scoped lang="scss">
.intro {
  padding: 4rem 10rem;
  background: #0a2640;
  color: map-get($colors, white);
  position: relative;
  &_content {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
  }
  &_title {
    font-family: map-get($font, secondary-font);
    font-size: 4.8rem;
    line-height: 7.2rem;
    margin-bottom: 1.6rem;
  }
  &_text {
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin-bottom: 4rem;
  }
  &_btn {
    .btn-green {
      font-weight: map-get($font, weight-fat);
      font-size: 2rem;
      line-height: 3.6rem;
      cursor: pointer;
    }
  }
  &_right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &_universities {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5.6rem;
    overflow: hidden;
  }
}
.circle_shadow {
  background: #1c3d5b;
  width: 100rem;
  height: 100rem;
  position: absolute;
  border-radius: 50%;
  top: -75%;
  right: -25%;
  z-index: -1;
}
.ent_form {
  padding: 2.5rem 3rem;
  background: rgba(188, 215, 255, 0.7);
  border: 1px solid #122088;
  width: 50%;
  border-radius: 3rem;
  .form_title {
    color: #fff;
    font-weight: map-get($font, weight-fat);
    font-size: 1.8rem;
    line-height: 2rem;
  }
}
.village_quota,
.ent_points {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkbox-iphone {
  cursor: pointer;
  width: 6rem;
  height: 3rem;
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 5rem;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.checkbox-iphone:checked {
  background: #1d6124;
}
.checkbox-iphone:before {
  content: "";
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0.1rem;
  background: #fff;
  transform: translateY(-50%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.checkbox-iphone:checked:before {
  left: 3rem;
}
.ent_points {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
.points {
  background: #fff;
  border-radius: 4.5rem;
  padding: 10px 20px;
  width: 15rem;
  border: none;
  font-size: 18px;
  line-height: 20px;
}
.btn_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .chances_btn {
    padding: 2rem 2.8rem;
    color: #fff;
    text-align: center;
    background: #65e4a3;
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
    border-radius: 56px;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    cursor: pointer;
  }
  .disabled{
    background: gray;
    color: #fff;
    user-select: none;
  }
}
.clear{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .intro_right {
    display: none;
  }
  .intro_left{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
