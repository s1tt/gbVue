import cardsData from '../data/cardsData.json';

export default {
  data() {
    return {
      cards: [],
      cardsOnPage: [],
      tags: []
    };
  },
  props: {
    selectedTag: Object
  },
  created() {
    this.cards = cardsData;
    this.updateCardsOnPage();
  },
  methods: {
    updateCardsOnPage() {
      if (Object.keys(this.selectedTag).length === 0) {
        this.cardsOnPage = this.cards.slice(0);
      } else {
        this.cardsOnPage = this.cards.filter(card => this.selectedTag.id === card.tag.id);
      }
    }
  },
  watch: {
    selectedTag: {
      handler(newTag, oldTag) {
        if (JSON.stringify(newTag) !== JSON.stringify(oldTag)) {
          this.updateCardsOnPage();
          console.log(`id тега: ${this.selectedTag.id}, title тега: ${this.selectedTag.title}`);
          console.log(`новый массив для отображения:`);
          console.log(this.cardsOnPage);
        }
      },
      deep: true
    }
  },
  computed: {},
  template: `
  <div class="blog-details__posts">
  <article class="blog-details__post" v-for="item in cardsOnPage">
    <h3 class="blog-details__post-title">{{item.title}}</h3>
    <figure class="blog-details__post-figure">
      <img class="blog-details__post-img" src="./assets/img/blogDetailsPost1.jpg" alt="Photo">
      <figcaption class="blog-details__post-figcaption"><span>{{item.date}}</span><span>Interior / Home / Decore</span></figcaption>
    </figure>
    <p class="blog-details__post-text blog-details__post-text-margin">{{item.text.main.paragraph1}}</p>
    <p class="blog-details__post-text">{{item.text.main.paragraph2}}</p>
    <blockquote class="blog-details__post-blockquote"><span class="blog-details__post-quotes">“</span>
      <p class="blog-details__post-quote-text">{{item.text.main.quote}}</p>
    </blockquote>
    <h3 class="blog-details__post-title">{{item.text.more.title}}</h3>
    <p class="blog-details__post-text">{{item.text.more.paragraph}}</p>
    <ol class="blog-details__post-list">
      <li class="blog-details__post-list-item" v-for="item in item.text.more.list">{{item}}</li>
    </ol>
    <img class="blog-details__post-img" src="./assets/img/blogDetailsPost2.jpg" alt="Photo">
    <p class="blog-details__post-text">{{item.text.more.paragraph}}</p>
  </article>
</div>
  `
};
