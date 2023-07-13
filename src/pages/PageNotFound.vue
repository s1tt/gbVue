<template>
  <section class="page-not-found">
    <div class="page-not-found__info">
      <h2 class="page-not-found__title">404</h2>
      <p class="page-not-found__subtitle">We are sorry, but the page you requested was not found</p>
      <div class="">
        <router-link to="/home" class="page-not-found__btn"
          ><span class="page-not-found__btn-text">Back To Home</span>
          <svg
            class="page-not-found__btn-ico"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <img class="page-not-found__img" :src="pageNotFoundImage" alt="pageNotFoundImage" />
  </section>
</template>

<script>
import pageNotFoundImage from '../assets/img/PageNotFoundImage.jpg';

export default {
  name: 'PageNotFound',
  data() {
    return {
      pageNotFoundImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/constants.scss';
.page-not-found {
  display: flex;
  align-items: center;
  margin-bottom: 200px;
  // position: relative;
  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__title {
    margin: 0;
    font-family: $mainFont;
    font-size: 250px;
    line-height: 313px;
    color: $hoverColor;
  }
  &__subtitle {
    width: 560px;
    margin: 0;
    font-family: $mainFont;
    font-size: 35px;
    line-height: 53px;
    letter-spacing: 0.01em;
  }
  &__img {
    position: relative;
    top: 0;
    right: -80px;
    border-radius: 0px 0px 0px 353px;
  }
  &__btn {
    display: inline-block;
    align-items: center;
    text-decoration: none;
    font-family: $secondFont;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.02em;
    padding: 26px 54px;
    background-color: $mainFontColor;
    color: #fff;
    border-radius: 18px;
    transition: 0.3s;
    &-text {
      margin-right: 10px;
    }
    &-ico {
      transform: translateY(15%);
    }
  }
  &__btn:hover {
    background-color: $hoverColor;
    color: $mainFontColor;
  }
  &__btn:hover > &__btn-ico path {
    stroke: $secontFontColor;
  }
}
</style>
