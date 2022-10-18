import dynamic from 'next/dynamic'
import React from 'react'
import Style from './style.module.scss'
import { useData } from '@/state/Data'

const Header = dynamic(() => import('@/components/Header'), {
	ssr: true,
	suspense: true,
})

const Article: React.FC = (): React.ReactElement => {
	const { data } = useData()

	return (
		<React.Suspense fallback={'loading...'}>
			<div className="container">
				<Header />

			</div>
		</React.Suspense>
	)
}

export default Article