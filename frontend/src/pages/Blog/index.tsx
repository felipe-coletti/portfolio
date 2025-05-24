import styles from './styles.module.css'
import { PageList, Post } from '../../components'
import { formatDate, formatReadingTime } from '../../utils/formaters'

type PostType = {
	slug: string
	date: string
	readingTime: number
	title: string
}

const fetchPosts = async (page: number, query: string): Promise<PostType[]> => {
	const res = await fetch(`/api/blog?page=${page}&query=${encodeURIComponent(query)}`)
	if (!res.ok) return []
	const data = await res.json()
	return data || []
}

export const Blog = () => {
	return (
		<PageList title='Blog' placeholder='Search' fetchItems={fetchPosts}>
			{(items: PostType[]) => (
				<div className={styles.content}>
					{items.map(post => (
						<Post
							key={post.slug}
							date={`${formatDate(post.date)} • ${formatReadingTime(post.readingTime)}`}
							title={post.title}
							href={`/blog/${post.slug}`}
						/>
					))}
				</div>
			)}
		</PageList>
	)
}
