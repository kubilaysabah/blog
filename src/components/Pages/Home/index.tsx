import dynamic from 'next/dynamic'
import React from 'react'
import Style from './style.module.scss'
import { useData } from '@/state/Data'

const Header = dynamic(() => import('@/components/Header'), {
	ssr: true,
	suspense: true,
})

const Articles = dynamic(() => import('@/components/Articles'), {
	ssr: true,
	suspense: true,
})

const Home: React.FC = (): React.ReactElement => {
	const { data } = useData()

	return (
		<React.Suspense fallback={'loading...'}>
			<div className="container">
				<Header />
				<div className={Style.wrapper}>
					<div className={Style.content}>
						<Articles data={data.articles} />
					</div>
					<aside className={Style.aside}>

					</aside>
				</div>
			</div>
		</React.Suspense>
	)
}

export default Home