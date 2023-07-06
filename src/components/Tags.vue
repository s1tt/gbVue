<template>
  <div class="blog-details__tags">
    <h2 class="blog-details__tags-title">Tags</h2>
    <ul class="blog-details__tags-list">
      <li
        @click="clickTag($event, item)"
        class="blog-details__tags-item"
        v-for="item in tags"
        :key="item.id"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import tagsData from '../assets/data/tagsData.json';

export default {
  name: 'InternoTags',
  data() {
    return {
      tags: [],
    };
  },
  props: {
    selectedTag: Object,
  },
  created() {
    this.tags = tagsData;
  },
  methods: {
    clickTag(event, tag) {
      document
        .querySelectorAll('.blog-details__tags-item')
        .forEach((item) => item.classList.remove('blog-details__tags-item_active'));
      event.target.classList.add('blog-details__tags-item_active');
      this.$emit('tag-selected', tag);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/constants.scss';

.blog-details {
  &__tags {
    padding-left: 52px;

    &-title {
      margin: 0;
      margin-bottom: 24px;
      color: $mainFontColor;
      font-size: 25px;
      font-family: $mainFont;
      line-height: 125%;
      letter-spacing: 0.5px;
    }
    &-list {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 0;
      list-style-type: none;
    }

    &-item {
      padding: 9px 30px;
      background-color: $tagBgColor;
      border-radius: 10px;
      white-space: nowrap;
      cursor: pointer;
      transition: 0.3s;
      &:active {
        transform: translate(3px, 3px);
      }
      &:hover {
        color: #ffffff;
        background-color: $mainFontColor;
      }

      &_active {
        color: #ffffff;
        background-color: $mainFontColor;
      }
    }
  }
}
</style>
