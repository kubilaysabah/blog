import axios, { AxiosRequestConfig } from 'axios'

const API = async<T>(config: AxiosRequestConfig): Promise<T | null> => {
	try {
		const response = await axios({
			...config,
			baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
		})
		const data: T = response.data

		return data
	} catch (error) {
		console.error(error)
	}

	return null
}

export default API
