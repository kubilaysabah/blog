import React from 'react'
import PaginationProps from './props'
import { usePagination } from '@/hooks'
import Style from './style.module.scss'
import classNames from 'classnames'

const Pagination: React.FC<PaginationProps> = ({
	totalCount = 1,
	pageSize = 6,
	siblingCount = 3,
	currentPage = 1,
	page = 1,
	setPage = () => undefined,
}: PaginationProps): React.ReactElement | null => {
	const paginationRange = usePagination({
		totalCount,
		pageSize,
		siblingCount,
		currentPage
	})

	const lastPage = paginationRange  ? paginationRange[paginationRange.length - 1] : 1

	const onNext = (): void => {
		if(page < lastPage) {
			setPage(page + 1)
		}
	}

	const onPrevious = (): void => {
		if(page > 1) {
			setPage(page - 1)
		}
	}

	const onPage = (pageNumber: number): void => {
		setPage(pageNumber)
	}

	if(!paginationRange) {
		return null
	}

	return (
		<nav>
			<ul className={Style.paginationList}>
				<li className={Style.paginationItem}>
					<button
						disabled={page === 1}
						onClick={onPrevious}
						className={Style.paginationButton}>
						Prev
					</button>
				</li>
				{paginationRange.map((pageNumber, index) => (
					<li className={Style.paginationItem} key={index}>
						<button
							onClick={() => typeof pageNumber === 'number' && onPage(pageNumber)}
							className={classNames(pageNumber === page && Style.paginationButtonActive, Style.paginationButton)}>
							{typeof pageNumber === 'string' ? '...' : pageNumber}
						</button>
					</li>
				))}
				<li className={Style.paginationItem}>
					<button disabled={page === lastPage} onClick={onNext} className={Style.paginationButton}>
						Next
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Pagination