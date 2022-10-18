import slugify from 'slugify'

const Routes = {
	Pages: {
		Home: '/',
		SignIn: '/sign-in',
		Article: (article: string) => `/article/${slugify(article, {
			lower: true,
		})}`,
		Author: (author: string) => `/@${slugify(author, {
			lower: true,
		})}`
	},
	API: {
		menu: 'menu',
		articles: 'articles'
	}
}

export default Routes