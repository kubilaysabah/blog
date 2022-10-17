import type { NextPage, GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import { API, Routes } from '@/helpers'
import type { Menu, Article } from '@/types'
import { useData } from '@/state/Data'

const Header = dynamic(() => import('@/components/Header'), {
	ssr: true,
	suspense: true,
})

const Articles = dynamic(() => import('@/components/Articles'), {
	ssr: true,
	suspense: true,
})

type PageProps = {
	menu?: Menu[]
	articles?: Article[]
}

const Home: NextPage<PageProps> = (props: PageProps): React.ReactElement => {
	const { data, setData } = useData()

	React.useEffect(() => {
		setData({
			...data,
			...props
		})
	}, [props])

	return (
		<div className="container">
			<React.Suspense fallback={'loading...'}>
				<Header />
				<Articles />
			</React.Suspense>
		</div>
	)
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

export default Home
