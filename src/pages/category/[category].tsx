import type { NextPage, GetServerSideProps } from 'next'
import React from 'react'
import { API, Routes } from '@/helpers'
import type { Menu, Article } from '@/types'
import { useData } from '@/state/Data'
import { CategoryPage } from '@/components'

type PageProps = {
	menu?: Menu[]
	articles?: Article[]
}

const Category: NextPage<PageProps> = (props: PageProps): React.ReactElement => {
	const { data, setData } = useData()

	React.useEffect(() => {
		setData({
			...data,
			...props
		})
	}, [props])

	return <CategoryPage />
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {
			menu: await API({
				url: Routes.API.menu
			}),
			articles: await API({
				url: Routes.API.articles
			})
		}
	}
}

export default Category
