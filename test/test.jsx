var Greet = React.createClass({
    getInitialState: function() {
      return { num: 1, arr: [] }
    },
    onClick: function() {
      var newNum = ++this.state.num;
      this.setState({num: newNum});
    },
    shouldComponentUpdate: function () {
      // console.log(11)
      return true;
    },
    componentWillUpdate: function(){
      console.log(22);
    },
    componentDidMount: function() {
        console.log(330);
    },

    onSubmit: function(e) {
      let value = this._inputElement.value.trim();
      if(!value) {
        return;
      }
      this.setState({
        arr: this.state.arr.concat(value)
      });
      this._inputElement.value = '';
      e.preventDefault();
    },
    render: function() {
      const { arr } = this.state;
      let tem = [];
      arr.forEach((item) => {
        tem.push(
            <div key={item}>{item}</div>
          )
      });
      return (
        <div>
        <form onSubmit={this.onSubmit}>
          <input ref={(a) => this._inputElement = a} placeholder="enter task"></input>
          <button type="submit">add</button>
        </form>
          {tem}
        </div>
      );
    }
  });

function Hello({...props}){
  return <div>{props.name}</div>
}

   
ReactDOM.render(
    <Hello name='aa' />,
    document.getElementById('example')
);