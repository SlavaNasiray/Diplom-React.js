import React from "react";
import Header from "../Header";
import MainPage from "../../pages/main";
import Bottom from "../Bottom";
import CoffeePage from "../../pages/coffee";
import PleasurePage from "../../pages/pleasure";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "../Cart";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route path="/" component={MainPage} exact />
					<Route path="/coffee" component={CoffeePage} exact />
					<Route path="/pleasure" component={PleasurePage} exact />
					<Route path="/coffee/:id" component={Cart} exact />
					<Route
						render={() => (
							<h1 margin="0 auto" padding="100px 100px">
								Page not found
							</h1>
						)}
					/>
				</Switch>
				<Bottom />
			</Router>
		);
	}
}

export default App;
