import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../images/svg/logo.svg'
import theme from '../../config/theme'

const HeaderNav = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
`

const Nav = styled.nav`
	background-color: transparent;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.header__logo {
		display: flex;
		text-decoration: none;

		svg {
			max-width: 150px;
			fill: ${theme.brand.primary};
		}

		span {
			font-size: 38px;
			margin-left: 10px;
			line-height: 1;
			color: ${theme.brand.primary};
			text-decoration: none;
		}
	}
`

const HeaderLinks = styled.ul`
	list-style: none;
	display: inline-flex;
	margin: 0;
	padding: 0;
`

const HeaderLink = styled.li`
	&:not(:last-of-type) {
		margin-right: 30px;
	}

	a {
		color: ${theme.brand.primary};
		text-decoration: none;
		position: relative;
		overflow: hidden;
		display: block;

		&:after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 2px;
			background-color: ${theme.brand.primary};
			transform: translateX(-100%);
			transition: transform 0.3s cubic-bezier(0.365, 0.305, 0, 1);
		}

		&:hover {
			&:after {
				transform: translateX(0);
			}
		}

		&.active {
			&:after {
				transform: translateX(0);
			}
		}
	}
`

const Header = ({ siteTitle }) => (
	<HeaderNav>
		<Nav>
			<Link className='header__logo' to='/'>
				<Logo /> <span>| DOCS</span>
			</Link>
			<HeaderLinks>
				<HeaderLink>
					<Link to='/about/' activeClassName='active'>
						About
					</Link>
				</HeaderLink>
				<HeaderLink>
					<Link to='/contact/' activeClassName='active'>
						Contact
					</Link>
				</HeaderLink>
			</HeaderLinks>
		</Nav>
	</HeaderNav>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: '',
}

export default Header
