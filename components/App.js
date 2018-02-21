var App = React.createClass({
  render: function() {
      
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Ink, {increment: counter}),
        React.createElement(Dec, {decrement: counter}, {}),
      )
    );
  }
});