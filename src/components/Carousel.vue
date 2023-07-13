<template>
  <carousel :items-to-show="1" :autoplay="5000" :wrapAround="true">
    <slide class="slider__slide" v-for="slide in sliderImages" :key="slide">
      <img class="slider__image" :src="slide" alt="slider image" />
      <img class="slider__zoom-ico" :src="sliderZoomIco" alt="sliderZoomIco" />
    </slide>

    <template #addons="{ slidesCount }">
      <navigation v-if="slidesCount > 1" />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import sliderZoomIco from '../assets/img/slider-zoom-ico.png';

export default {
  name: 'App',
  data() {
    return {
      sliderZoomIco,
    };
  },
  props: {
    sliderImages: Array,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style lang="scss">
.carousel {
  max-width: 100%;
  margin-bottom: 200px;
}
.slider {
  max-width: 100%;
  &__slide {
    position: relative;
    cursor: pointer;
  }
  &__slide:hover > &__zoom-ico {
    opacity: 1;
  }
  &__image {
    border-radius: 70px;
    overflow: hidden;
  }
  &__zoom-ico {
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s;
  }
}
</style>
