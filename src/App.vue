<template>
  <InternoHeader />
  <InternoMain />
  <InternoFooter />
  <ProductDetails />
</template>

<script>
import 'normalize.css';
import InternoHeader from './components/Header.vue';
import InternoMain from './components/Main.vue';
import InternoFooter from './components/Footer.vue';

import ProductDetails from './components/VueTask/ProductDetails';

export default {
  name: 'App',
  components: {
    InternoHeader,
    InternoMain,
    InternoFooter,
    ProductDetails,
  },
};
</script>

<style lang="scss">
#app {
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(200px, 1201px);
  justify-content: center;
  overflow: hidden;
  position: relative;
}

main {
  position: relative;
}

.bg__line1,
.bg__line2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
}
.bg__line1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #e6e6e6;
  z-index: -1;
}

.bg__line1::after {
  content: '';
  position: absolute;
  top: 0;
  left: calc(100% / 3);
  width: 2px;
  height: 100%;
  background-color: #e6e6e6;
  z-index: -1;
}

.bg__line2::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background-color: #e6e6e6;
  z-index: -1;
}

.bg__line2::after {
  content: '';
  position: absolute;
  top: 0;
  right: calc(100% / 3);
  width: 2px;
  height: 100%;
  background-color: #e6e6e6;
  z-index: -1;
}
</style>
