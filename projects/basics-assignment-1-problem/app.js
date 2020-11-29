const app = Vue.createApp({
    data() {
        return {
            name: 'Fabrizio Pace',
            age: 24,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg'
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        favoriteNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');