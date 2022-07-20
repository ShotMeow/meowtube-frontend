import { FC } from 'react'

import styles from './VideoItem.module.scss'

const VideoDuration: FC<{ duration: number; isBottom?: boolean }> = ({
	duration,
	isBottom
}) => {
	return <time className={isBottom ? styles.bottom : ''}>{duration} мин.</time>
}

export default VideoDuration
