var element = React.createElement('div', {}, 
    React.createElement(Counter, {name: "Pierwszy licznik"}),
    React.createElement(Counter),
    React.createElement(Counter, {name: "Trzeci licznik"}),
    React.createElement(Counter, {name: "Czwarty licznik"}),
    React.createElement(Counter, {name: "Piąty licznik"})
);

ReactDOM.render(element, document.getElementById('app'));