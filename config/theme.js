const brand = {
	primary: '#e73043',
	secondary: '#66BAB5',
}

const colors = {
	gray: '#D3D3D3',
	black: '#000',
	white: '#fff',
	bg_color: '#fafafa',
	body_color: '#2b2b2b',
	link_color: brand.primary,
	red: '#E75248',
	green: '#17A974',
	blue: '#327CDC',
	yellow: '#FFB700',
	purple: '#8242F6',
	purple_dark: '#231c42',
}

const theme = {
	colors,
	brand,
	breakpoints: {
		xs: '400px',
		s: '600px',
		m: '900px',
		l: '1200px',
	},
	container: {
		base: '100rem',
		text: '55rem',
	},
	spacer: {
		horizontal: '2rem',
		vertical: '3rem',
	},
	transition: {
		ease: 'all 100ms cubic-bezier(0.365, 0.305, 0, 1)',
	},
}

export default theme
