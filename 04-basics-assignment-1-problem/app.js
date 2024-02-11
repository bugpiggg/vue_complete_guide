const app = Vue.createApp({
    data() {
        return {
            name: 'John Doe',
            age: 20,
            imageLink: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        }
    },
    methods: {
        outputAgePlusFive() {
            return this.age + 5;
        },
        outputRandomNumber() {
            return Math.random();
        }
    }
});


app.mount('#assignment');