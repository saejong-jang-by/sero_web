import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Root extends PureComponent {

	render() {

		const {
		} = this.props.viewstate
		return (
			<Router>
				<Switch>

					<Route exact path='/' >
					</Route>

				</Switch>

			</Router>
		)
	}
}

export default Root
