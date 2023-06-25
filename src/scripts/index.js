import 'normalize.css';
import '../assets/fonts/fonts.scss';

import '../styles/root/root.scss';

import '../styles/header/header.scss';
import '../styles/home/home.scss';
import '../styles/blog/blog.scss';
import '../styles/blogDetails/blogDetails.scss';
import '../styles/footer/footer.scss';

import '../styles/tasks/tasks.scss';
// import BlogDetails from './Blog-details';
// import App from './vue';
// import Vue from 'vue';

import CardsMain from './CardsMain';
import CardsBlog from './CardsBlog';
import BlogDetails from './BlogDetails';
// import Tags from './Tags';

// eslint-disable-next-line no-new, no-undef
const App = Vue.createApp({
  el: '#app',
  components: {
    CardsMain,
    CardsBlog,
    BlogDetails
    // Tags
  }
});
// eslint-disable-next-line no-undef
App.mount('#root');
// BlogDetails.mount('#root');
