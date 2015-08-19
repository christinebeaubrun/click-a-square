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
    return (<div className="square" style={divStyle} onClick={me.changeColor}><span className="name-number">{num}</span></div>);
  }
});

var SquareContainer = React.createClass({
  render: function (){
    var me = this;
    var data = me.props.data;

    var squares = data.map(function(stats){
      return (<Square name={stats.name} key={stats.name}/>);
    });

    return (<div id="squares-container">{squares}</div>);
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
  <ColorSquareFactory data={DATA}/>,
  document.getElementById('cs-factory-container')
);