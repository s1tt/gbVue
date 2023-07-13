<template>
  <PageTitle :imgUrl="projectDetailsMainImage" />
  <section class="project-details">
    <div class="project-details__text">
      <h2 class="project-details__title">Minimal Look Bedrooms</h2>
      <div class="project-details__description">
        <p class="project-details__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim
          maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida
          dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the
          ipsum vel lectus bibendum commodo.
        </p>
        <p class="project-details__paragraph">
          In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus
          ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,
          gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus
          vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
        </p>
      </div>
    </div>
    <Carousel :sliderImages="getSliderImages" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import PageTitle from '../components/PageTitle.vue';
import Carousel from '../components/Carousel.vue';

import projectDetailsMainImage from '../assets/img/projectDetailsMain.jpg';

export default {
  name: 'ProjectDetails',
  data() {
    return {
      projectDetailsMainImage,
    };
  },
  computed: {
    ...mapGetters(['getSliderImages']),
  },
  components: {
    PageTitle,
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/constants.scss';
.project-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__text {
    max-width: 677px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-bottom: 100px;
  }
  &__title {
    margin: 0;
    font-family: $mainFont;
    font-size: 50px;
    line-height: 63px;
    letter-spacing: 0.02em;
  }
  &__paragraph {
    margin: 0;
    font-family: $secondFont;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 33px;
  }
}
</style>
