<template>
  <article class="articles__item" v-for="card in cards.slice(0, 3)" :key="card.id">
    <img :src="card.imgUrl.main" alt="art1" class="articles__item-img" />
    <span class="articles__item-design">{{ card.tag.title }}</span>
    <div class="articles__item-info">
      <h3 class="articles__item-title">{{ card.title }}</h3>
      <div class="articles__item-description">
        <p class="articles__item-date">{{ card.date }}</p>
        <!-- eslint-disable-next-line -->
        <a href="./blog-details.html" class="articles__item-btn">
          <svg
            class="articles__item-btn-ico"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import cardsData from '../assets/data/cardsData';

export default {
  name: 'CardMain',
  data() {
    return {
      cards: [],
    };
  },
  created() {
    this.cards = cardsData;
    this.cards = JSON.parse(JSON.stringify(cardsData));
  },
  methods: {
    getCardImageUrl(url) {
      return url;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/constants.scss';
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
