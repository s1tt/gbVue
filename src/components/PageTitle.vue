<template>
  <section class="page-title">
    <img class="page-title__img" :src="imgUrl" alt="BlogMainImage" />
    <div class="page-title__intro" v-if="title">
      <h2 class="page-title__title">{{ title }}</h2>
      <p class="page-title__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
    subtitle: String,
    imgUrl: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/constants.scss';
.page-title {
  position: relative;
  margin-bottom: 200px;
  &__img {
    position: relative;
    max-width: 1920px;
    left: -(calc((1920px - 1200px) / 2));
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  &__intro {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 41px 78px;
    background-color: #ffffff;
    border-radius: 37px 37px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin: 0;
    font-family: $mainFont;
    font-size: 50px;
    line-height: 125%;
    color: $mainFontColor;
  }
  &__subtitle {
    margin: 0;
    font-family: $secondFont;
    font-size: 22px;
    line-height: 150%;
    color: $secontFontColor;
  }
}
</style>
