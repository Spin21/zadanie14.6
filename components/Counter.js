// Tworzymy zmienną App, do której przypisujemy nowy komponent Reactowy
var Counter = React.createClass({
  getDefaultProps: function() {    
    console.log('tutaj mona ustalić domyślnie wartości dla propsów');

    return {
      name: "Licznik"
    }
  },
  // metoda ustawiająca początkowy stan - tutaj counter = 0
  getInitialState: function() {
    return {
      counter: 0
    }
  },

  componentWillMount: function() {
    console.log('Ta metoda wywołuje się przed render');
  },

  componentDidMount: function() {
    console.log('Ta metoda wywołuje się po tym jak komponent pojawi się w drzewie DOM');
  },

  // funkcja odpalająca się po naciśnięciu przycisku "+"" 
  increment: function() {
    // w ten sposób w React moze uaktualnic stan (setState() wywoła ponowne renderowanie komponentu)
    this.setState({
      counter: this.state.counter + 1
    });
  },

  // funkcja odpalająca się po naciśnięciu przycisku "-"" 
  decrement: function() {
    // w ten sposób w React moze uaktualnic stan (setState() wywoła ponowne renderowanie komponentu)
    this.setState({
      counter: this.state.counter - 1
    });
  },

  // funkcja wstawiająca do drzewa DOM "zawartosc" komponentu
  render: function() {
    return (
      React.createElement('div', {}, 
        React.createElement('h2', {}, this.props.name),
        React.createElement('button', {onClick: this.decrement}, '-'),
        React.createElement('span', {}, this.state.counter),
        React.createElement('button', {onClick: this.increment}, '+')
      )
    );
  }
});