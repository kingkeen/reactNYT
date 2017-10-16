// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
// var Link = require("react-router").Link;

// Create the Main component
export default class Navbar extends React.Component{
  
	render() {	
		return (
		<div className="main-container">
			<nav class="navbar navbar-default" role="navigation">
				<div class="container-fluid">
					<div class="navbar-header">
						
						<a class="navbar-brand" href="#">NYT-React</a>
					</div>

					<div class="collapse navbar-collapse navbar-ex1-collapse">
						<ul class="nav navbar-nav navbar-right">
							<li><a href="#">Search</a></li>
							<li><a href="#">Saved Articles</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		)
	}
};
