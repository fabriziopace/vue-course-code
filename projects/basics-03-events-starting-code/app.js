const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
