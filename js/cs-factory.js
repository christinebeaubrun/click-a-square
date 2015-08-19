var Square = React.createClass({
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
    return (<button role="button" className="square btn btn-default btn-lg" style={divStyle} onClick={me.changeColor}>{num}</button>);
  }
});

var SquareContainer = React.createClass({
  render: function (){
    var me = this;
    var data = me.props.data;

    var squares = data.map(function(stats){
      return (<Square name={stats.name} key={stats.name}/>);
    });

    return (<div id="square-container">{squares}</div>);
  }
});

var ColorSquareFactory = React.createClass({
  render: function () {
    var me = this;
    var data = me.props.data;
    return (<div><h1 className="navbar navbar-inverse container-fluid">Click on a Button to Change its Color</h1>
        <SquareContainer data={data}/>
      </div>);
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
  <ColorSquareFactory data={DATA}/>,
  document.getElementById('cs-factory-container')
);