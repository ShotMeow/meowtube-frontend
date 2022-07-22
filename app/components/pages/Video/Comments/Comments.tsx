import { FC } from 'react'

import AddComment from '@/components/pages/Video/Comments/AddComment'
import CommentItem from '@/components/pages/Video/Comments/CommentItem'

import { IComment } from '@/types/comment.interface'

import { useAuth } from '@/hooks/useAuth'

import styles from './Comments.module.scss'

const Comments: FC<{ comments: IComment[]; videoId: number }> = ({
	comments,
	videoId
}) => {
	const { user } = useAuth()

	return (
		<div className={styles.comments}>
			<h2>Комментарии</h2>
			<div className={styles.line} />
			{comments.length ? (
				<div className={styles.grid}>
					{comments.map(comment => (
						<CommentItem comment={comment} key={comment.id} />
					))}
				</div>
			) : (
				<p>Комментариев нету</p>
			)}

			<div className={styles.bottomForm}>
				{user && <AddComment videoId={videoId} />}
			</div>
		</div>
	)
}

export default Comments
