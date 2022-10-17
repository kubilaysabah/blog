import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import classNames from 'classnames'
import Style from './style.module.scss'
import { useData } from '@/state/Data'

const Menu: React.FC = (): React.ReactElement => {
	const { route } = useRouter()
	const { data } = useData()

	return (
		<nav>
			<ul className={Style.list}>
				{data.menu.map((item, index) => (
					<li className={Style.item} key={index}>
						<Link href={item.url} passHref>
							<a className={classNames(Style.link, route === item.url && Style.active)}>
								{item.text}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Menu