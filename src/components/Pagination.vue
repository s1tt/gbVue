<template>
  <div class="pagination">
    <a href="#" class="pagination__item pagination__item_active">01</a>
    <a href="#" class="pagination__item">02</a>
    <a href="#" class="pagination__item">03</a>
    <a href="#" class="pagination__item">
      <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
          stroke="#292F36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/constants.scss';
.pagination {
  display: flex;
  gap: 20px;
  justify-content: center;

  &__item:hover {
    cursor: pointer;
    background-color: #cda274;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-width: 55px;
    padding: 14px 17px;
    border: 1px solid #cda274;
    border-radius: 50%;
    font-family: $secondFont;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #292f36;
    text-decoration: none;
    transition: all 0.3s;
    &_active {
      pointer-events: none;
      background-color: #f4f0ec;
      border: none;
    }
    &_active:hover {
      cursor: default;
      background-color: #f4f0ec;
    }
  }

  &__item:last-of-type {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 55px;
  }
}
</style>
