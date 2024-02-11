const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'hihi2',
            courseGoalB: '<h2>hihi1</h2>',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    },
});

app.mount('#user-goal');