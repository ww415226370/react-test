import React form 'react.js';
import ReactDOM form 'react-dom.js';

var Greet = React.createClass({
    getInitialState: function() {
      return { num: 1 }
    },
    onClick: function() {
      var newNum = ++this.state.num;
      this.setState({num: newNum});
    },
    render: function() {
      return (
        <button className="square" onClick={() => this.onClick()}>
          {this.state.num}
        </button>
      );
    }
  });

  var message = 'hello univers';
   
  ReactDOM.render(
    <Greet message={message} />,
    document.getElementById('example')
  );