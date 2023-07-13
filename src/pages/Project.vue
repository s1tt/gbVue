<template>
  <PageTitle title="Our Project" subtitle="Home / Project" :imgUrl="projectMainImage" />
  <section class="our-project">
    <RoomSlider />
    <div class="our-project__items">
      <ProjectCard v-for="cardData in selectRoomData" :cardData="cardData" />
    </div>
    <Pagination />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import PageTitle from '../components/PageTitle.vue';
import Pagination from '../components/Pagination.vue';
import RoomSlider from '../components/RoomSlider.vue';
import ProjectCard from '../components/ProjectCard.vue';

import projectMainImage from '../assets/img/projectMainImage.jpg';

export default {
  name: 'Project',
  data() {
    return {
      projectMainImage,
    };
  },
  computed: {
    ...mapGetters(['getAllOurProjectData', 'getSelectedRoom']),

    selectRoomData() {
      switch (this.getSelectedRoom) {
        case 'bedroom':
          console.log(this.getAllOurProjectData.bedRoom);
          return this.getAllOurProjectData.bedRoom;
        case 'bathroom':
          return this.getAllOurProjectData.bathroom;
        case 'kitchen':
          return this.getAllOurProjectData.kitchen;
        case 'living-area':
          return this.getAllOurProjectData.livingArea;
        default:
          break;
      }
    },
  },
  components: {
    PageTitle,
    Pagination,
    RoomSlider,
    ProjectCard,
  },
};
</script>

<style lang="scss" scoped>
.our-project {
  margin-bottom: 200px;
  &__items {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 585px));
    grid-template-rows: flow;
    justify-content: center;
    gap: 35px 30px;
    margin-bottom: 60px;
  }
}
</style>
