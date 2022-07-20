import { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { useSearch } from '@/hooks/useSearch'

import styles from './Search.module.scss'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()
	return (
		<div className={styles.search_top}>
			<label>
				<input
					type='text'
					placeholder='Поиск видео...'
					value={searchTerm}
					onChange={handleSearch}
				/>
				<AiOutlineSearch color='gray' className={styles.icon} />
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(video => <VideoItem isSmall item={video} key={video.id} />)
					) : (
						<div className='text-white'>Видео не найдены!</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Search
