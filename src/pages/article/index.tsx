import type { NextPage, GetServerSideProps } from 'next'
import React from 'react'
import { Header } from '@/components'

const Article: NextPage = (): React.ReactElement => {
	return (
		<div className="container">
			<Header />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {
		}
	}
}

export default Article
