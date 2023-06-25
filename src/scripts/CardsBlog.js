/* eslint-disable global-require */
// eslint-disable-next-line no-undef, vue/multi-word-component-names
import cardsData from '../data/cardsData.json';

export default {
  name: 'cards-blog',
  data() {
    return {
      cards: []
    };
  },
  created() {
    this.cards = JSON.parse(JSON.stringify(cardsData));
  },
  methods: {
    getCardImageUrl(url) {
      return url;
    }
  },
  computed: {},
  template: `
        <article class="articles__item" v-for="card in cards.slice(0, 6)" :key="card.id">
          <img :src=card.imgUrl.main alt="art1" class="articles__item-img">
          <span class="articles__item-design">{{card.tag.title}}</span>
          <div class="articles__item-info">
            <h3 class="articles__item-title">{{card.title}}</h3>
            <div class=" articles__item-description">
              <p class="articles__item-date">{{card.date}}</p>
              <a href="./blog-details.html" class="articles__item-btn">
                <svg class="articles__item-btn-ico" width="9" height="16" viewBox="0 0 9 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128" stroke="#292F36" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </article>
  `
};

// export default App;
