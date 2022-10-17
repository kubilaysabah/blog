import Link from 'next/link'
import React from 'react'
import Style from './style.module.scss'
import { Logo, Menu, Search, Socials } from '@/components'

const Header: React.FC = (): React.ReactElement => {
	return (
		<header className={Style.header}>
			<div className={Style.logo}>
				<Logo />
			</div>
			<div className={Style.menu}>
				<Menu />
			</div>
			<div className={Style.search}>
				<Search />
			</div>
			<div className={Style.signIn}>
				<Link href="/sign-in" passHref>
					<a className={Style.signInButton}>
						Sign In
					</a>
				</Link>
			</div>
			<div className={Style.socials}>
				<Socials />
			</div>
		</header>
	)
}

export default Header