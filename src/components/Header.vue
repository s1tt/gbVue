<template>
  <header class="header">
    <div class="bg__line1"></div>
    <div class="bg__line2"></div>
    <h1 class="header__logo">
      <router-link to="/home" class="header__logo-link">
        <svg
          class="header__logo-ico"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172
            20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
            fill="#CDA274"
          />
        </svg>
        <span class="header__logo-title">Interno</span>
      </router-link>
    </h1>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <router-link to="/home" class="header__nav-link">Home</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/project" class="header__nav-link">Project</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/blog" class="header__nav-link">Blog</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'InternoHeader',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '../assets/styles/constants.scss';

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  justify-self: center;
  padding-bottom: 57px;
  position: relative;
  padding-top: 60px;

  &__logo {
    margin: 0;
    transition: 0.3s;
  }

  &__logo:hover {
    opacity: 0.6;
  }

  &__logo-link {
    text-decoration: none;
    color: $mainFontColor;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__logo-title {
    font-family: $mainFont;
    font-size: 40px;
    line-height: 125%;
  }

  &__nav {
    display: flex;
    align-items: center;
    &-list {
      list-style-type: none;
      margin: 0;
      display: flex;
      gap: 48px;
    }
    &-link {
      font-family: $secondFont;
      font-size: 20px;
      line-height: 125%;
      text-decoration: none;
      color: $secontFontColor;
    }
    &-link:hover {
      opacity: 0.6;
    }
    &-link_active {
      pointer-events: none;
      border-bottom: 1px solid $mainFontColor;
      cursor: default;
    }
    &-link_active:hover {
      opacity: 1;
    }
  }
}
</style>
