import React from 'react'

export default interface PaginationProps {
	totalCount?: number
	pageSize?: number
	siblingCount?: number
	currentPage?: number
	page?: number
	setPage?: (page: number) => void
}