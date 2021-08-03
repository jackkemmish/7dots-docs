import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../images/svg/logo.svg'
import theme from '../../config/theme'

const FooterNav = styled.footer`
	position: relative;
	width: 100%;
	background-color: ${theme.brand.primary};
`

const Nav = styled.nav`
	position: relative;
	width: 100%;
	background-color: ${theme.brand.primary};

	.footer__logo {
		display: flex;
		text-decoration: none;

		svg {
			max-width: 150px;
			fill: ${theme.colors.white};
		}

		span {
			font-size: 38px;
			margin-left: 10px;
			line-height: 1;
			color: ${theme.colors.white};
			text-decoration: none;
		}
	}
`

const FooterLinks = styled.div`
	display: flex;
`

const FooterLink = styled.div`
	display: flex;
`

const Footer = ({ siteTitle }) => (
	<FooterNav>
		<Nav>
			<Link className='footer__logo' to='/'>
				<Logo /> <span>| DOCS</span>
			</Link>
			<FooterLinks>
				<FooterLink>
					<Link to='/about/' activeClassName='active'>
						About
					</Link>
				</FooterLink>
				<FooterLink>
					<Link to='/contact/' activeClassName='active'>
						Contact
					</Link>
				</FooterLink>
			</FooterLinks>
		</Nav>
	</FooterNav>
)

Footer.propTypes = {
	siteTitle: PropTypes.string,
}

Footer.defaultProps = {
	siteTitle: '',
}

export default Footer
