import Link from 'next/link'
import React from 'react'
import { useData } from '@/state/Data'
import Style from './style.module.scss'
import slugify from 'slugify'
import moment from 'moment'
import { BsArrowRight } from 'react-icons/bs'

const Articles: React.FC = (): React.ReactElement => {
	const { data } = useData()

	const URL = (author: string, article: string): string => {
		const config = {
			lower: true
		}

		return `/${slugify(author, config)}/${slugify(article, config)}`
	}

	return (
		<article>
			{data.articles.map((article, index) => (
				<div key={index} className={Style.card}>
					<div className={Style.cardImage}>
						<Link href={URL(article.author.name, article.name)}>
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
										{article.categories.map((category, index) => (
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
							<Link href={URL(article.author.name, article.name)} passHref>
								<a className={Style.cardTitle}>
									{article.name}
								</a>
							</Link>
							<small className={Style.cardDescription}>{article.description.length > 180 ? `${article.description.substring(0, 180)}...` : article.description}</small>
						</main>
						<footer className={Style.cardFooter}>
							<div>
								<Link href={URL(article.author.name, article.name)} passHref>
									<a className={Style.cardFooterButton}>
										<span>Continue Reading</span>
										<BsArrowRight />
									</a>
								</Link>
							</div>
							<div>

							</div>
						</footer>
					</div>
				</div>
			))}
		</article>
	)
}

export default Articles