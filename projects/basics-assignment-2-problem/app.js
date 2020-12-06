const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        };
    },
    methods: {
        showAlert() {
            alert('This is a test');
        },
        registerInput(e) {
            this.output1 = e.target.value;
        },
        registerEnterInput(e) {
            this.output2 = e.target.value;
        }
    }
});

app.mount('#assignment');