new Vue({
    el: '#app',
    data: {
        expression: '',
    },
    methods: {
        appendToExpression(value) {
            this.expression += value;
        },
        clear() {
            this.expression = '';
        },
        evaluateExpression() {
            try {
                this.expression = eval(this.expression);
            } catch (error) {
                this.expression = 'Error';
            }
        },
    },
});
