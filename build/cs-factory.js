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
    return (React.createElement("button", {role: "button", className: "square btn btn-default btn-lg", style: divStyle, onClick: me.changeColor}, num));
  }
});

var SquareContainer = React.createClass({displayName: "SquareContainer",
  render: function (){
    var me = this;
    var data = me.props.data;

    var squares = data.map(function(stats){
      return (React.createElement(Square, {name: stats.name, key: stats.name}));
    });

    return (React.createElement("div", {id: "square-container"}, squares));
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
  {name: 'Button 1'},
  {name: 'Button 2'},
  {name: 'Button 3'},
  {name: 'Button 4'},
  {name: 'Button 5'},
  {name: 'Button 6'},
  {name: 'Button 7'},
  {name: 'Button 8'},
  {name: 'Button 9'},
  {name: 'Button 10'},
  {name: 'Button 11'},
  {name: 'Button 12'},
  {name: 'Button 13'},
  {name: 'Button 14'},
  {name: 'Button 15'},
  {name: 'Button 16'}
];

React.render(
  React.createElement(ColorSquareFactory, {data: DATA}),
  document.getElementById('cs-factory-container')
);