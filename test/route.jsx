var { Router, Route, IndexRoute, IndexLink, Link } = ReactRouter;
var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>simple page application</h1>
				<ul>
					<li>
						<IndexLink to="/" activeClassName="active">a</IndexLink>
					</li>
					<li>
						<Link to="/b" activeClassName="active">b</Link>
					</li>
					<li>
						<Link to="/c" activeClassName="active">c</Link>
					</li>
				</ul>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
});

var A = React.createClass({
	render: function() {
		return (
			<div>
				AAAAAAAAA
			</div>
		);
	}
});

var B = React.createClass({
	render: function() {
		return (
			<div>
				BBBBBBB
			</div>
		);
	}
});

var C = React.createClass({
	render: function() {
		return (
			<div>
				CCCCC
			</div>
		);
	}
});



ReactDOM.render(
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={A}></IndexRoute>
			<Route path="b" component={B}></Route>
			<Route path="c" component={C}></Route>
		</Route>
	</Router>,
	document.getElementById('example')
	)