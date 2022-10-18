import type { NextPage, GetServerSideProps } from 'next'
import React from 'react'
import {API, Routes} from '@/helpers'
import {Menu} from '@/types'
import {useData} from '@/state/Data'
import { ArticlePage } from '@/components'

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

	return <ArticlePage />
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
