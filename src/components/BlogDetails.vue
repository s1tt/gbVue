<template>
  <Posts :selected-tag="selectedTag" />
  <Tags @tag-selected="handleTagSelected" />
</template>

<script>
import Tags from './Tags.vue';
import Posts from './Posts.vue';

export default {
  name: 'CardBlog',
  data() {
    return {
      selectedTag: {},
    };
  },
  components: {
    Tags,
    Posts,
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
