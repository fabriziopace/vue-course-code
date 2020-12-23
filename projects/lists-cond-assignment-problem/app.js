const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTaskValue: '',
            showList: true
        };
    },
    computed: {
        buttonText() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTaskValue);
        },
        toggleList() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');