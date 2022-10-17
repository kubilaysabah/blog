import Link from 'next/link'
import React from 'react'
import Style from './style.module.scss'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Socials: React.FC = (): React.ReactElement => {
	return (
		<nav>
			<ul className={Style.list}>
				<li className={Style.item}>
					<Link href="https://facebook.com" passHref>
						<a className={Style.link}>
							<FaFacebookF fill="#175BEB" size={30} />
						</a>
					</Link>
				</li>
				<li className={Style.item}>
					<Link href="https://twitter.com" passHref>
						<a className={Style.link}>
							<AiOutlineTwitter fill="#1DA1F2" size={30} />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://instagram.com" passHref>
						<a>
							<AiOutlineInstagram fill="#EF00A2" size={30} />
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Socials