import React from 'react'
import type { Provider, IDataContext, UseData, State } from './type'

const initialValue: State = {
	menu: [],
	articles: [],
	isLoading: false
}

export const DataContext = React.createContext<IDataContext>({
	data: initialValue,
	setData: () => undefined
})

export const useData: UseData = () => React.useContext(DataContext)

const DataProvider: React.FC<Provider> = ({
	children
}: Provider): React.ReactElement => {
	const [data, setData] = React.useState<State>(initialValue)

	return (
		<DataContext.Provider value={{
			data,
			setData
		}}>
			{children}
		</DataContext.Provider>
	)
}

export default DataProvider