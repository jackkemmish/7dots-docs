import * as React from 'react'
import SEO from '../components/seo/seo'
import Layout from '../components/layout'

function MarkdownPage({ children, pageContext: { frontmatter } }) {
	return (
		<>
			<SEO frontmatter={frontmatter} />
			<Layout pageTitle={frontmatter.title} frontmatter={frontmatter}>
				{children}
			</Layout>
		</>
	)
}

export default MarkdownPage
