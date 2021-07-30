import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import GlobalStyle from '../globalStyles'
import styled from 'styled-components'

const Main = styled.main`
	padding: 100px 20px 40px 20px;
	max-width: 1200px;
	margin: 0 auto;
`

const Layout = ({ children, frontmatter = {} }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						description
						author {
							name
						}
						keywords
					}
				}
			}
		`}
		render={(data) => (
			<>
				<GlobalStyle />
				<Header siteTitle={data.site.siteMetadata.title} />
				<Main>{children}</Main>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
