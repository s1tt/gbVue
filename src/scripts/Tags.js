// import cardsData from '../data/cardsData.json';
import tagsData from '../data/tagsData.json';

export default {
  data() {
    return {
      cards: [],
      tags: []
    };
  },
  props: {
    selectedTag: Object
  },
  created() {
    this.tags = tagsData;
  },
  methods: {
    clickTag(event, tag) {
      document.querySelectorAll('.blog-details__tags-item').forEach(item => item.classList.remove('blog-details__tags-item_active'));
      event.target.classList.add('blog-details__tags-item_active');
      this.$emit('tag-selected', tag);
    }
  },
  computed: {},
  template: `
  <div class="blog-details__tags">
    <h2 class="blog-details__tags-title">Tags</h2>
    <ul class="blog-details__tags-list">
      <li @click="clickTag($event, item)" class="blog-details__tags-item" v-for="item in tags">{{item.title}}</li>
    </ul>
  </div>
  `
};
