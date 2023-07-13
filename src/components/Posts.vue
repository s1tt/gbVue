<template>
  <div class="blog-details__posts">
    <article class="blog-details__post" v-for="item in cardsOnPage" :key="item.id">
      <h3 class="blog-details__post-title">{{ item.title }} ({{ item.tag.title }})</h3>
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
      <div class="blog-details__post-footer">
        <div class="blog-details__post-tags">
          <h3 class="blog-details__post-tags-title">Tags</h3>
          <ul class="blog-details__post-tags-list">
            <li class="blog-details__post-tags-item">{{ item.tag.title }}</li>
          </ul>
        </div>
        <div class="blog-details__post-social">
          <ul class="footer__social-list">
            <li class="footer__social-item">
              <!-- eslint-disable-next-line -->
              <a href="https://twitter.com/" class="footer__social-item-link">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832
                2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727
                 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14
                 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391
                  4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047
                   1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109
                   5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312
                   6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875
                   9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719
                   2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359
                   13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453
                   0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453
                   15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367
                   4.76953 16.6367 4.59375Z"
                    fill="#292F36"
                  />
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <!-- eslint-disable-next-line -->
              <a href="https://www.linkedin.com/" class="footer__social-item-link">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297
                4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156
                 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625
                 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375
                  7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109
                   9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922
                   9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188
                   13.1055 10.9023V16H16.3398Z"
                    fill="#292F36"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'InternoPosts',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      selectedTagId: 'getSelectedTagId',
      getAllCards: 'getAllCards',
    }),

    cardsOnPage() {
      if (Object.keys(this.selectedTagId).length !== 0) {
        return this.getAllCards.filter((card) => this.selectedTagId === card.tag.id);
      } else {
        return this.getAllCards;
      }
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
    &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      padding: 44px 0;
      margin: 62px 0;
    }
    &-tags {
      display: flex;
      align-items: center;
      gap: 21px;
      &-title {
        margin: 0;
        font-family: $mainFont;
        font-size: 20px;
        line-height: 25px;
      }
      &-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
      &-item {
        font-family: $secondFont;
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.02em;
        padding: 13px 25px;
        border-radius: 10px;
        background-color: $mainFontColor;
        color: #ffffff;
      }
    }
  }
}
</style>
