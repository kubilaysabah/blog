import type { NextPage, GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'


const Header = dynamic(() => import('@/components/Header'), {
	ssr: true,
	suspense: true,
})

type PageProps = {
}

const Author: NextPage<PageProps> = (props: PageProps): React.ReactElement => {
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
		}
	}
}

export default Author
