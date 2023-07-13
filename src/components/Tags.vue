<template>
  <div class="blog-details__tags">
    <h2 class="blog-details__tags-title">Tags</h2>
    <ul class="blog-details__tags-list">
      <li
        @click="clickTag(item)"
        class="blog-details__tags-item"
        v-for="item in getAllTags"
        :key="item.id"
        :class="{ 'blog-details__tags-item_active': item.id === getSelectedTagId }"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'InternoTags',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getAllTags', 'getSelectedTagId']),
  },
  methods: {
    ...mapMutations(['selectTag']),

    clickTag(tag) {
      this.selectTag(tag.id);
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
