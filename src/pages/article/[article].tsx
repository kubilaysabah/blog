import type { NextPage, GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import {API, Routes} from '@/helpers'
import {Menu} from '@/types'
import {useData} from '@/state/Data'

const Header = dynamic(() => import('@/components/Header'), {
	ssr: true,
	suspense: true,
})

type PageProps = {
	menu?: Menu[]
}

const Article: NextPage<PageProps> = (props: PageProps): React.ReactElement => {
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
		}
	}
}

export default Article
