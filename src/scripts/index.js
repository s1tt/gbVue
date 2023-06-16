import 'normalize.css';
import '../assets/fonts/fonts.scss';

import '../styles/root/root.scss';

import '../styles/header/header.scss';
import '../styles/home/home.scss';
import '../styles/blog/blog.scss';
import '../styles/footer/footer.scss';

import '../styles/tasks/tasks.scss';

import App from './vue';
import Cards from './Cards';
// eslint-disable-next-line no-undef
App.mount('#rootVue');
Cards.mount('#root');
