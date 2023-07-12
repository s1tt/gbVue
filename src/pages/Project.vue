<template>
  <PageTitle title="Our Project" subtitle="Home / Project" :imgUrl="projectMainImage" />
  <section class="our-project">
    <RoomSlider :selectedRoom="selectedRoom" @update:selectedRoom="updateSelectedRoom" />
    <div class="our-project__items">
      <ProjectCard v-for="cardData in selectRoomData" :cardData="cardData" />
    </div>
    <Pagination />
  </section>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import Pagination from '../components/Pagination.vue';
import RoomSlider from '../components/RoomSlider.vue';
import ProjectCard from '../components/ProjectCard.vue';

import ourProjectData from '../assets/data/ourProjectData';
import projectMainImage from '../assets/img/projectMainImage.jpg';

export default {
  name: 'Project',
  data() {
    return {
      selectedRoom: 'bedroom',
      projectMainImage,
      ourProjectData: [],
    };
  },
  created() {
    this.ourProjectData = ourProjectData;
    console.log(this.ourProjectData);
  },
  methods: {
    updateSelectedRoom(room) {
      this.selectedRoom = room;
    },
  },
  computed: {
    selectRoomData() {
      switch (this.selectedRoom) {
        case 'bedroom':
          return this.ourProjectData.bedRoom;
        case 'bathroom':
          return this.ourProjectData.bathroom;
        case 'kitchen':
          return this.ourProjectData.kitchen;
        case 'living-area':
          return this.ourProjectData.livingArea;
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
