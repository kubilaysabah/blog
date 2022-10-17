import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Style from './style.module.scss'

const Logo: React.FC = (): React.ReactElement => {
	return (
		<Link href="/" passHref>
			<a className={Style.logo}>
				<Image src={'/logo.png'} width={170} height={48} />
			</a>
		</Link>
	)
}

export default Logo