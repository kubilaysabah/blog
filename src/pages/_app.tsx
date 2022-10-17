import '@/styles/styles.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import { DataProvider } from '@/state'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps): React.ReactElement => {
	return (
		<DataProvider>
			<Component {...pageProps} />
		</DataProvider>
	)
}

export default MyApp
