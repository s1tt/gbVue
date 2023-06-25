import Tags from './Tags';
import Posts from './Posts';

export default {
  name: 'Blog-details',
  data() {
    return {
      selectedTag: {}
    };
  },
  components: {
    Tags,
    Posts
  },
  methods: {
    handleTagSelected(tag) {
      this.selectedTag = tag;
      console.log(this.selectedTag);
    }
  },
  template: `
  <Posts :selected-tag="selectedTag"/>
  <Tags @tag-selected="handleTagSelected"/>
  `
};
