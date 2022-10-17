import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Style from './style.module.scss'

const Search: React.FC = (): React.ReactElement => {
	return (
		<React.Fragment>
			<button className={Style.button}>
				<AiOutlineSearch />
			</button>
		</React.Fragment>
	)
}

export default Search