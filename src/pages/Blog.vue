<template>
  <PageTitle title="Articles & News" subtitle="Home / Blog" :imgUrl="blogMainImage" />
  <section class="blog-latest-post">
    <h2 class="blog-latest-post__title">Latest Post</h2>
    <article class="blog-latest-post__item">
      <img
        src="../assets/img/LatestPostImage.jpg"
        alt="LatestPostImage"
        class="blog-latest-post__item-img"
      />
      <div class="blog-latest-post__item-info">
        <div class="blog-latest-post__item-description">
          <h3 class="blog-latest-post__item-title">
            Low Cost Latest Invented Interior Designing Ideas
          </h3>
          <p class="blog-latest-post__item-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
            maximus.posuere in.Contrary to popular belief.
          </p>
          <p class="blog-latest-post__item-text">
            Lorem Ipsum is not simply random text. It has roots in a piece of classica.
          </p>
        </div>
        <div class="blog-latest-post__item-more">
          <p class="blog-latest-post__item-date">26 December,2022</p>
          <a href="#" class="articles__item-btn blog-latest-post__item-link">
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
  </section>
  <section class="blog-articles">
    <h2 class="blog-articles__title">Articles & News</h2>
    <div class="blog-articles__items">
      <BlogCard v-for="cardData in cardsData.slice(0, 6)" :cardData="cardData" />
    </div>
    <Pagination />
  </section>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import BlogCard from '../components/BlogCard.vue';
import Pagination from '../components/Pagination.vue';

import cardsData from '../assets/data/cardsData';
import blogMainImage from '@/assets/img/BlogMainImage.jpg';

export default {
  name: 'Blog',
  data() {
    return {
      blogMainImage,
      cardsData: [],
      selectedTag: {},
    };
  },
  created() {
    this.cardsData = JSON.parse(JSON.stringify(cardsData));
  },
  components: {
    BlogCard,
    PageTitle,
    Pagination,
  },
  methods: {
    handleTagSelected(tag) {
      this.selectedTag = tag;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/constants.scss';

.blog-latest-post {
  margin-bottom: 150px;
  &__title {
    margin: 0;
    font-family: $mainFont;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $mainFontColor;
    margin-bottom: 25px;
  }

  &__item {
    display: flex;
    gap: 64px;
    padding: 22px;
    border: 1px solid #e7e7e7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;

    &-img {
      border-radius: 50px;
    }
    &-info {
      padding-right: 34px;
      margin-top: 51px;

      display: flex;
      flex-direction: column;
    }
    &-title {
      margin: 0;
      font-family: $mainFont;
      font-size: 25px;
      line-height: 125%;
      letter-spacing: 0.02em;
      color: $mainFontColor;
      margin-bottom: 22px;
    }
    &-text {
      margin: 0;
      padding-right: 6px;
      font-family: $secondFont;
      font-size: 22px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: $secontFontColor;
      margin-bottom: 33px;
    }
    &-text:last-of-type {
      margin-bottom: 39px;
    }
    &-more {
      display: flex;
      width: 100%;
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
  }
}

.blog-articles {
  margin-bottom: 200px;
  &__title {
    margin: 0;
    font-family: $mainFont;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $mainFontColor;
    margin-bottom: 30px;
  }
  &__items {
    display: flex;
    justify-content: center;
    gap: 30px 27px;
    flex-wrap: wrap;
    margin-bottom: 51px;
  }
  &__pagination {
    display: flex;
    gap: 20px;
    justify-content: center;

    &-item:hover {
      cursor: pointer;
      background-color: #cda274;
    }

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      min-width: 55px;
      padding: 14px 17px;
      border: 1px solid #cda274;
      border-radius: 50%;
      font-family: $secondFont;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #292f36;
      text-decoration: none;
      transition: all 0.3s;
      &_active {
        pointer-events: none;
        background-color: #f4f0ec;
        border: none;
      }
      &_active:hover {
        cursor: default;
        background-color: #f4f0ec;
      }
    }

    &-item:last-of-type {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      width: 55px;
    }
  }
}
</style>
