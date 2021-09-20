import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FlipBookContainer } from '../../../containers'

class Root extends PureComponent {

	render() {

		const {
		} = this.props.viewstate
		return (
			<Router>
				<Switch>

					<Route exact path='/' >
						<FlipBookContainer />
					</Route>

				</Switch>

			</Router>
		)
	}
}

export default Root
