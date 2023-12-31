const App = {
  data() {
    return {
      title: 'Перевернуть',
      add: 'Добавить шаблонную строку',
      add2: 'Добавить',
      del: 'Удалить последний элемент',
      list: [
        { text: 'xz' },
        { text: 'xz2' },
      ],
      inputValue: '',
    };
  },
  methods: {
    taskOneClick() {
      this.title = this.title.split('').reverse().join('');
    },
    taskTwoClickAdd() {
      this.list.push({ text: 'Новый элемент списка' });
    },
    taskTwoClickAdd2(event) {
      event.preventDefault();
      this.list.push({ text: this.inputValue });
      this.inputValue = '';
    },
    taskTwoClickDel() {
      this.list.pop();
    },
  },
};

export default App;
