var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },


    render: function() {
        return React.createElement('div', {onClick: this.decrement},
            React.createElement('span', {}, 'odejmij ' + this.state.counter)
        );
    }
});