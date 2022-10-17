import React from 'react'
import type { Menu, Article } from '@/types'

export type Provider = {
    children?: React.ReactNode
}

export type State = {
	menu: Menu[],
	articles: Article[],
	isLoading: boolean
}

export interface IDataContext {
	data: State
	setData: React.Dispatch<React.SetStateAction<State>>;
}

export type UseData = () => IDataContext