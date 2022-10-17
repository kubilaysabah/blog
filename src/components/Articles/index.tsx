import Link from 'next/link'
import React from 'react'
import { useData } from '@/state/Data'
import Style from './style.module.scss'
import { Routes } from '@/helpers'
import moment from 'moment'
import { BsArrowRight } from 'react-icons/bs'
import {Article} from '@/types'
import { Pagination } from '@/components'

const Articles: React.FC = (): React.ReactElement => {
	const { data } = useData()
	const [page, setPage] = React.useState<number>(1)

	const pages = (): Article[] => {
		const pageLimit = 6
		const firstPageIndex = (page - 1) * pageLimit
		const lastPageIndex = firstPageIndex + pageLimit
		return data.articles.slice(firstPageIndex, lastPageIndex)
	}

	return (
		<article>
			{pages().map((article, index) => (
				<div key={index} className={Style.card}>
					<div className={Style.cardImage}>
						<Link href={Routes.Pages.Article(article.name)}>
							<a>
								<img src={article.image} alt={article.name} />
							</a>
						</Link>
					</div>
					<div className={Style.cardContent}>
						<header className={Style.cardHeader}>
							{article.categories.length > 0 && (
								<div className={Style.cardHeaderItem}>
									<div className={Style.cardBadgeList}>
										{article.categories.slice(0, 2).map((category, index) => (
											<span key={index} className={Style.cardBadge}>{category}</span>
										))}
									</div>
								</div>
							)}
							<div className={Style.cardHeaderItem}>
								<span>{article.createdAt}</span>
							</div>
							<div className={Style.cardHeaderItem}>
								<span>{moment(article.updatedAt).format('L')}</span>
							</div>
						</header>
						<main>
							<Link href={Routes.Pages.Article(article.name)} passHref>
								<a className={Style.cardTitle}>
									{article.name}
								</a>
							</Link>
							<small className={Style.cardDescription}>{article.description.length > 180 ? `${article.description.substring(0, 180)}...` : article.description}</small>
						</main>
						<footer className={Style.cardFooter}>
							<div>
								<Link href={Routes.Pages.Article(article.name)} passHref>
									<a className={Style.cardFooterButton}>
										<span>Continue Reading</span>
										<BsArrowRight />
									</a>
								</Link>
							</div>
							<div>
								<Link passHref href={Routes.Pages.Author(article.author.name)}>
									<a className={Style.cardAvatar}>
										<div className={Style.cardAvatarImage} style={{
											backgroundImage: `url(${article.author.image})`
										}}>
										</div>
										<div>
											{article.author.name}
										</div>
									</a>
								</Link>
							</div>
						</footer>
					</div>
				</div>
			))}
			<Pagination page={page} setPage={setPage} totalCount={data.articles.length} />
		</article>
	)
}

export default Articles