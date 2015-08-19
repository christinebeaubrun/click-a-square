var Square = React.createClass({displayName: "Square",
  getInitialState: function () {
    return {color:""};
  },
  changeColor: function () {
    var me = this;
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    me.setState({color: randomColor});
  },
  render: function () {
    var me = this;
    var num = me.props.name;
    var divStyle = {
      backgroundColor: me.state.color
    };
    return (React.createElement("div", {className: "square", style: divStyle, onClick: me.changeColor}, React.createElement("span", {className: "name-number"}, num)));
  }
});

var SquareContainer = React.createClass({displayName: "SquareContainer",
  render: function (){
    var me = this;
    var data = me.props.data;

    var squares = data.map(function(stats){
      return (React.createElement(Square, {name: stats.name, key: stats.name}));
    });

    return (React.createElement("div", {id: "squares-container"}, squares));
  }
});

var ColorSquareFactory = React.createClass({displayName: "ColorSquareFactory",
  render: function () {
    var me = this;
    var data = me.props.data;
    return (React.createElement("div", null, React.createElement("h1", {className: "navbar navbar-inverse container-fluid"}, "Click on a Button to Change its Color"), 
        React.createElement(SquareContainer, {data: data})
      ));
  }
});

var DATA = [
  {name: '1'},
  {name: '2'},
  {name: '3'},
  {name: '4'},
  {name: '5'},
  {name: '6'},
  {name: '7'},
  {name: '8'},
  {name: '9'},
  {name: '10'},
  {name: '11'},
  {name: '12'},
  {name: '13'},
  {name: '14'},
  {name: '15'},
  {name: '16'}
];

React.render(
  React.createElement(ColorSquareFactory, {data: DATA}),
  document.getElementById('cs-factory-container')
);