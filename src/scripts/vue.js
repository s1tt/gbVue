// eslint-disable-next-line no-undef
const App = Vue.createApp({
  data() {
    return {
      products: [
        { id: 3, title: 'Bread', price: 30 },
        { id: 8, title: 'Ice Cream', price: 80 },
        { id: 6, title: 'Cucumber', price: 60 },
        { id: 1, title: 'Apple', price: 10 },
        { id: 7, title: 'Juice', price: 70 },
        { id: 10, title: 'Cookie', price: 100 },
        { id: 4, title: 'Banana', price: 40 },
        { id: 5, title: 'Meat', price: 50 },
        { id: 2, title: 'Milk', price: 20 },
        { id: 9, title: 'Cheese', price: 90 }
      ],
      selected: '',
      title: 'Перевернуть',
      add: 'Добавить шаблонную строку',
      add2: 'Добавить',
      del: 'Удалить последний элемент',
      list: [
        { id: 1, text: 'xz' },
        { id: 2, text: 'xz2' }
      ],
      inputValue: ''
    };
  },
  methods: {
    handleSort() {
      if (this.selected === 'Descending') {
        this.descendingSort();
      } else if (this.selected === 'Ascending') {
        this.ascendingSort();
      }
    },
    descendingSort() {
      this.products.sort((a, b) => b.price - a.price);
    },
    ascendingSort() {
      this.products.sort((a, b) => a.price - b.price);
    },
    reverseText() {
      this.title = this.title.split('').reverse().join('');
    },
    pushTemplateStringToArray() {
      this.list.push({ id: this.list.length + 1, text: 'Новый элемент списка' });
    },
    pushStringToArray(event) {
      event.preventDefault();
      this.list.push({ id: this.list.length + 1, text: this.inputValue });
      this.inputValue = '';
    },
    deleteLastElementFromArray() {
      this.list.pop();
    },
    deleteElementFromArray(e, itemFromPage) {
      this.list.forEach((item, index) => {
        if (item.id === itemFromPage.id) {
          this.list.splice(index, 1);
        }
      });
    }
  }
});

export default App;
