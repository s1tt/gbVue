<template>
  <section class="startingSection">
    <h2 class="startingSection__title">Let Your Home Be Unique</h2>
    <p class="startingSection__subtitle">
      There are many variations of the passages of lorem Ipsum fromavailable, majority.
    </p>
    <router-link to="/get-started" class="startingSection__btn">
      <div class="startingSection__btn-wrapper">
        <span class="startingSection__btn-text">Get started</span>
        <svg
          class="startingSection__btn-ico"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </router-link>
  </section>
  <section class="projects">
    <h2 class="projects__title">Follow Our Projects</h2>
    <p class="projects__subtitle">
      It is a long established fact that a reader will be distracted by the of readable content of
      page lookings at its layouts points.
    </p>
    <div class="projects__items">
      <article class="projects__item">
        <img
          class="projects__item-img projects__item-border-top-left"
          src="../assets/img/proj1.jpg"
          alt="proj1"
        />
        <div class="projects__item-description">
          <div class="projects__item-info">
            <h3 class="projects__item-title">Modern Kitchan</h3>
            <p class="projects__item-subtitle">Decor / Artchitecture</p>
          </div>
          <!-- eslint-disable-next-line -->
          <router-link to="/project-details" class="projects__item-btn">
            <svg
              class="projects__item-btn-ico"
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19L9 10L1 1"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </article>
      <article class="projects__item">
        <img
          class="projects__item-img projects__item-border-top-right"
          src="../assets/img/proj2.jpg"
          alt="proj2"
        />
        <div class="projects__item-description">
          <div class="projects__item-info">
            <h3 class="projects__item-title">Modern Kitchan</h3>
            <p class="projects__item-subtitle">Decor / Artchitecture</p>
          </div>
          <!-- eslint-disable-next-line -->
          <router-link to="/project-details" class="projects__item-btn">
            <svg
              class="projects__item-btn-ico"
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19L9 10L1 1"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </article>
      <article class="projects__item">
        <img
          class="projects__item-img projects__item-border-bottom-left"
          src="../assets/img/proj3.jpg"
          alt="proj3"
        />
        <div class="projects__item-description">
          <div class="projects__item-info">
            <h3 class="projects__item-title">Modern Kitchan</h3>
            <p class="projects__item-subtitle">Decor / Artchitecture</p>
          </div>
          <!-- eslint-disable-next-line -->
          <router-link to="/project-details" class="projects__item-btn">
            <svg
              class="projects__item-btn-ico"
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19L9 10L1 1"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </article>
      <article class="projects__item">
        <img
          class="projects__item-img projects__item-border-bottom-right"
          src="../assets/img/proj4.jpg"
          alt="proj4"
        />
        <div class="projects__item-description">
          <div class="projects__item-info">
            <h3 class="projects__item-title">Modern Kitchan</h3>
            <p class="projects__item-subtitle">Decor / Artchitecture</p>
          </div>
          <!-- eslint-disable-next-line -->
          <router-link to="/project-details" class="projects__item-btn">
            <svg
              class="projects__item-btn-ico"
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19L9 10L1 1"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </article>
    </div>
  </section>
  <section class="achievements">
    <div class="achievements__item">
      <h2 class="achievements__item-title">12</h2>
      <p class="achievements__item-subtitle">Years Of Experiance</p>
    </div>
    <div class="achievements__item">
      <h2 class="achievements__item-title">85</h2>
      <p class="achievements__item-subtitle">Success Project</p>
    </div>
    <div class="achievements__item">
      <h2 class="achievements__item-title">15</h2>
      <p class="achievements__item-subtitle">Active Project</p>
    </div>
    <div class="achievements__item">
      <h2 class="achievements__item-title">95</h2>
      <p class="achievements__item-subtitle">Happy CUstomers</p>
    </div>
  </section>
  <section class="articles">
    <h2 class="articles__title">Articles & News</h2>
    <p class="articles__subtitle">
      It is a long established fact that a reader will be distracted by the of readable content of a
      page when lookings at its layouts the points of using.
    </p>
    <div class="articles__items">
      <CardMain v-for="cardData in getAllCards.slice(0, 3)" :cardData="cardData" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CardMain from '../components/CardMain.vue';

export default {
  name: 'InternoHome',
  components: {
    CardMain,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getAllCards']),
  },
};
</script>

<style lang="scss">
@import '../assets/styles/constants.scss';

.startingSection {
  background-image: url('@/assets/img/startingImage.jpg');
  background-size: cover;
  background-size: contain;
  height: 758px;
  border-radius: 70px;
  margin-bottom: 96px;

  &__title {
    font-family: $mainFont;
    font-size: 65px;
    line-height: 125%;
    color: $mainFontColor;
    margin: 0;
    max-width: 434px;
    padding-top: 208px;
    padding-left: 52px;
  }

  &__subtitle {
    font-family: $secondFont;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: $secontFontColor;
    max-width: 434px;
    margin: 0;
    padding-top: 18px;
    padding-left: 52px;
    margin-bottom: 21px;
  }

  &__btn {
    display: inline-block;
    margin-left: 52px;
    padding: 26px 48px;
    font-family: $secondFont;
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    color: #ffffff;
    text-decoration: none;
    background-color: $mainFontColor;
    letter-spacing: 0.02em;
    box-shadow: 0px 10px 20px rgba(192, 192, 192, 0.35);
    border-radius: 18px;

    &-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  &__title {
    font-family: $mainFont;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $mainFontColor;
    text-align: center;
    margin-bottom: 8px;
  }

  &__subtitle {
    font-family: $secondFont;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: $secontFontColor;
    text-align: center;
    max-width: 737px;
    margin-bottom: 93px;
  }

  &__items {
    width: 100%;
    display: grid;
    gap: 56px 10px;
    grid-template-columns: repeat(2, 547px);
    justify-content: space-between;
  }

  &__item {
    &-border {
      &-top-left {
        border-radius: 0px 80px 0px 0px;
      }
      &-top-right {
        border-radius: 80px 0px 0px 0px;
      }
      &-bottom-left {
        border-radius: 0px 0px 80px 0px;
      }
      &-bottom-right {
        border-radius: 0px 0px 0px 80px;
      }
    }

    &-img {
      width: 100%;
      margin-bottom: 28px;
    }
    &-title {
      margin: 0;
      font-family: $mainFont;
      font-size: 25px;
      line-height: 125%;
      letter-spacing: 0.02em;
      color: $mainFontColor;
    }
    &-subtitle {
      margin: 0;
      font-family: $secondFont;
      font-size: 22px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: $secontFontColor;
    }
    &-description {
      display: flex;
      justify-content: space-between;
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    &-btn-ico {
      padding: 26px 32px;
      background-color: #f4f0ec;
      border-radius: 50%;
    }
  }
}

.achievements {
  background-color: #f4f0ec;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  justify-content: center;
  margin-bottom: 96px;

  &__item {
    margin: 151px 0;
    padding: 0 54px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    &-title {
      margin: 0;
      font-family: $mainFont;
      font-size: 85px;
      line-height: 125%;
      letter-spacing: 0.02em;
      color: #cda274;
    }
    &-subtitle {
      margin: 0;
      font-family: $secondFont;
      font-size: 22px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: $secontFontColor;
    }
  }
  &__item:not(:last-of-type) {
    border-right: 1px solid #cda274;
  }
}

.articles {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;

  &__title {
    margin: 0;
    font-family: $mainFont;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $mainFontColor;
    margin-bottom: 12px;
  }

  &__subtitle {
    margin: 0;
    max-width: 811px;
    text-align: center;
    font-family: $secondFont;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: $secontFontColor;
    margin-bottom: 52px;
  }
  &__items {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__item:hover {
    cursor: pointer;
    background-color: #f4f0ec;
  }

  &__item:hover &__item-btn-ico {
    background-color: #ffffff;
  }

  &__item {
    box-sizing: border-box;
    border: 1px solid #e7e7e7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;
    display: flex;
    flex-direction: column;
    padding: 21px 21px 34px 21px;
    position: relative;
    width: 382px;
    transition: 0.3s;

    &-img {
      border-radius: 45px 45px 0px 0px;
      margin-bottom: 9px;
    }

    &-design {
      font-family: $secondFont;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      position: absolute;
      top: 247px;
      left: 40px;
      padding: 9px 11px;
      background-color: #ffffff;
      border-radius: 8px 8px 8px 0px;
    }

    &-title {
      margin: 0;
      max-width: 275px;
      font-family: $mainFont;
      font-size: 25px;
      line-height: 125%;
      letter-spacing: 0.02em;
      color: $mainFontColor;
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 14px;
    }

    &-description {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-date {
      margin: 0;
      font-family: $secondFont;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: $secontFontColor;
    }

    &-btn-ico {
      padding: 19px 21px;
      border-radius: 50%;
      background-color: #f4f0ec;
      transition: all 0.3s;
    }
  }
}
</style>
