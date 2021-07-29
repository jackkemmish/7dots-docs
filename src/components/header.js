import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../images/svg/logo.svg'

const HeaderNav = styled.header`
	background-color: #e73043;
	padding: 20px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;

	.header__logo {
		display: flex;

		svg {
			max-width: 150px;
			fill: #ffffff;
		}
	}
`

const Header = ({ siteTitle }) => (
	<HeaderNav>
		<Link className='header__logo' to='/'>
			<Logo />
		</Link>
	</HeaderNav>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: '',
}

export default Header
