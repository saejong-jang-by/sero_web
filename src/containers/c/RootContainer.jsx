import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Root } from '../../components'

const RootContainer = props => {

	const {
	} = props

	const viewstate = {
	}

	return <Root viewstate={viewstate} />
}

const mapStoreToProps = ({ videoStore }) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStoreToProps, mapDispatchToProps)(RootContainer)
