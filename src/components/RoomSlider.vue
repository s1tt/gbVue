<template>
  <div class="room-slider">
    <ul class="room-slider__list" @click="handleClick">
      <li class="room-slider__item" data-room="bathroom">Bathroom</li>
      <li class="room-slider__item room-slider__item_active" data-room="bedroom">Bed Room</li>
      <li class="room-slider__item" data-room="kitchen">Kitchen</li>
      <li class="room-slider__item" data-room="living-area">Living Area</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RoomSlider',
  props: {
    selectedRoom: String,
  },
  methods: {
    handleClick(event) {
      const selectedRoom = event.target.dataset.room;
      if (selectedRoom) {
        this.$emit('update:selectedRoom', selectedRoom);
      }
      event.target
        .closest('.room-slider__list')
        .querySelectorAll('.room-slider__item')
        .forEach((element) => element.classList.remove('room-slider__item_active'));
      console.log();
      event.target.classList.add('room-slider__item_active');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/constants.scss';
.room-slider {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  &__list {
    border: 1px solid $hoverColor;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  &__item {
    padding: 26px 66px;
    font-family: $secondFont;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: $hoverColor;
      border-radius: 18px;
      color: #ffffff;
    }
    &_active {
      background-color: $hoverColor;
      border-radius: 18px;
      color: #ffffff;
      cursor: default;
    }
  }
}
</style>
