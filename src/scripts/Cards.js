/* eslint-disable global-require */
// eslint-disable-next-line no-undef
const Cards = Vue.createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Let’s Get Solution For Building Construction Work',
          url: require('../assets/img/art1.jpg'),
          tag: 'Kitchan Design',
          date: '26 December,2022 '
        },
        {
          id: 2,
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          url: require('../assets/img/art2.jpg'),
          tag: 'Living Design',
          date: '22 December,2022 '
        },
        {
          id: 3,
          title: 'Best For Any Office & Business Interior Solution',
          url: require('../assets/img/art3.jpg'),
          tag: 'Interior Design',
          date: '25 December,2022 '
        },
        {
          id: 4,
          title: 'Let’s Get Solution For Building Construction Work',
          url: require('../assets/img/art4.jpg'),
          tag: 'Kitchan Design',
          date: '26 December,2022 '
        },
        {
          id: 5,
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          url: require('../assets/img/art5.jpg'),
          tag: 'Living Design',
          date: '22 December,2022 '
        },
        {
          id: 6,
          title: 'Best For Any Office & Business Interior Solution',
          url: require('../assets/img/art6.jpg'),
          tag: 'Interior Design',
          date: '25 December,2022 '
        }
      ]
    };
  },
  methods: {
    getCardImageUrl(url) {
      return url;
    }
  },
  computed: {}
});

export default Cards;
