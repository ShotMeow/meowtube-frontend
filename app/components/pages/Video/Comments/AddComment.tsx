import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'

import Field from '@/components/UI/Field/Field'

import { ICommentDto } from '@/types/comment.interface'

import { commentApi } from '@/store/api/comment.api'

import styles from './Comments.module.scss'

const AddComment: FC<{ videoId: number }> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ICommentDto>({ mode: 'onChange' })

	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()

	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset())
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className='relative'>
				<Field
					{...register('message', {
						required: 'Введите комментарий'
					})}
					placeholder='Введите комментарий'
					error={errors.message}
				/>
				<button
					className='text-xl absolute right-2 top-1.5 text-purple'
					disabled={isLoading}
				>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddComment
