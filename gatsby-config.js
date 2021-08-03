const path = require('path')
const config = require('./config/website')

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		siteUrl: config.siteUrl,
		title: config.siteTitle,
		twitterHandle: config.twitterHandle,
		description: config.siteDescription,
		keywords: config.keywords,
		canonicalUrl: config.siteUrl,
		image: config.siteLogo,
		author: {
			name: config.author,
			minibio: config.minibio,
		},
		organization: {
			name: config.organization,
			url: config.siteUrl,
			logo: config.siteLogo,
		},
		social: {
			twitter: config.twitterHandle,
			fbAppID: '',
		},
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`poppins\:200,300,400,600`, `roboto slab`],
				display: 'swap',
			},
		},
		'gatsby-plugin-preload-fonts',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-force-trailing-slashes',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleShort,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				lang: config.lang,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'standalone',
				icon: config.siteLogo,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					default: path.resolve('./src/templates/markdownPage.js'),
				},
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images/`,
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages/`,
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /svg/,
				},
			},
		},
	],
}
