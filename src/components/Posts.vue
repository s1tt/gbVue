<template>
  <div class="blog-details__posts">
    <article class="blog-details__post" v-for="item in cardsOnPage" :key="item.id">
      <h3 class="blog-details__post-title">{{ item.title }}</h3>
      <figure class="blog-details__post-figure">
        <img class="blog-details__post-img" :src="item.imgUrl.blogDetails1" alt="Photo" />
        <figcaption class="blog-details__post-figcaption">
          <span>{{ item.date }}</span
          ><span>Interior / Home / Decore</span>
        </figcaption>
      </figure>
      <p class="blog-details__post-text blog-details__post-text-margin">
        {{ item.text.main.paragraph1 }}
      </p>
      <p class="blog-details__post-text">{{ item.text.main.paragraph2 }}</p>
      <blockquote class="blog-details__post-blockquote">
        <span class="blog-details__post-quotes">“</span>
        <p class="blog-details__post-quote-text">{{ item.text.main.quote }}</p>
      </blockquote>
      <h3 class="blog-details__post-title">{{ item.text.more.title }}</h3>
      <p class="blog-details__post-text">{{ item.text.more.paragraph }}</p>
      <ol class="blog-details__post-list">
        <li class="blog-details__post-list-item" v-for="item in item.text.more.list" :key="item.id">
          {{ item }}
        </li>
      </ol>
      <img class="blog-details__post-img" :src="item.imgUrl.blogDetails2" alt="Photo" />
      <p class="blog-details__post-text">{{ item.text.more.paragraph }}</p>
    </article>
  </div>
</template>

<script>
import cardsData from '../assets/data/cardsData';
export default {
  name: 'InternoPosts',
  data() {
    return {
      cards: [],
      cardsOnPage: [],
      tags: [],
    };
  },
  props: {
    selectedTag: Object,
  },
  created() {
    this.cards = JSON.parse(JSON.stringify(cardsData));
    this.updateCardsOnPage();
  },
  methods: {
    updateCardsOnPage() {
      if (Object.keys(this.selectedTag).length === 0) {
        this.cardsOnPage = this.cards.slice(0);
      } else {
        this.cardsOnPage = this.cards.filter((card) => this.selectedTag.id === card.tag.id);
      }
    },
  },
  watch: {
    selectedTag: {
      handler(newTag, oldTag) {
        if (JSON.stringify(newTag) !== JSON.stringify(oldTag)) {
          this.updateCardsOnPage();
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/constants.scss';

.blog-details {
  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 96px;
  }

  &__post {
    &-title {
      margin: 0;
      color: $mainFontColor;
      font-size: 50px;
      font-family: $mainFont;
      line-height: 125%;
      letter-spacing: 1px;
      margin-bottom: 21px;
    }
    &-figure {
      margin: 0;
      margin-bottom: 48px;
    }
    &-img {
      border-radius: 50px;
      margin-bottom: 46px;
    }
    &-figcaption {
      display: flex;
      justify-content: space-between;
      color: $secontFontColor;
      font-size: 16px;
      font-family: $secondFont;
      line-height: 150%;
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
    &-text {
      margin: 0;
      color: $secontFontColor;
      font-size: 22px;
      font-family: $secondFont;
      line-height: 150%;
      letter-spacing: 0.22px;
      &-margin {
        margin-bottom: 20px;
      }
    }
    &-blockquote {
      position: relative;
      margin: 35px 0 27px 0;
      padding: 53px 0;
      text-align: center;
      border-radius: 50px;
      background: #f4f0ec;
    }
    &-quotes {
      position: absolute;
      top: -25px;
      left: calc(50% - 10px);
      display: block;
      color: #cda274;
      text-align: center;
      font-size: 200px;
      font-family: $mainFont;
      font-style: italic;
      line-height: 125%;
      letter-spacing: 4px;
      transform: scale(-1, -1);
    }
    &-quote-text {
      margin: 144px auto 0;
      color: #cda274;
      text-align: center;
      font-size: 25px;
      font-family: DM Serif Display;
      font-style: italic;
      line-height: 125%;
      letter-spacing: 0.5px;
      max-width: 355px;
    }
    &-list {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 32px;

      list-style-type: none;
      counter-reset: my-counter;
      padding-left: 0;

      margin-bottom: 40px;

      &-item {
        color: #4d5053;
        font-size: 22px;
        font-family: Jost;
        line-height: 150%;
        letter-spacing: 0.22px;

        position: relative;
        padding-left: 20px;
        &::before {
          content: counter(my-counter);
          counter-increment: my-counter;
          position: absolute;
          left: 0;
          color: #cda274;
          font-size: 20px;
          font-family: $mainFont;
          line-height: 125%;
          letter-spacing: 0.4px;
        }
      }
    }
  }
}
</style>
