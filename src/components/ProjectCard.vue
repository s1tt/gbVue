<template>
  <article class="project-card">
    <img :src="cardData.url" :alt="cardData.title" class="project-card__img" />
    <div class="project-card__more">
      <div class="project-card__description">
        <h2 class="project-card__title">{{ cardData.title }}</h2>
        <p class="project-card__subtitle">{{ cardData.subtitle }}</p>
      </div>
      <a href="#" class="project-card__btn">
        <svg
          class="project-card__btn-ico"
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
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    cardData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/constants.scss';

.project-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &:nth-child(odd) {
    grid-row-end: span 2;
  }

  &__more {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  &__img {
  }
  &__title {
    margin: 0;
  }
  &__subtitle {
    margin: 0;
  }

  &__btn-ico {
    padding: 19px 21px;
    border-radius: 50%;
    background-color: #f4f0ec;
    transition: all 0.3s;
  }
}
</style>
