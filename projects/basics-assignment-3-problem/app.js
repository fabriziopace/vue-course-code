const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    watch: {
        result() {
            var that = this;
            setTimeout(function () {
                that.number = 0;
            }, 5000);
        }
    },
    methods: {
        add(num) {
            this.number += num;
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much!';
            }
        }
    }
});

app.mount('#assignment');