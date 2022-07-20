import { FC } from 'react'

import styles from './Heading.module.scss'

interface IHeading {
	title: string
}

const Heading: FC<IHeading> = ({ title }) => {
	return (
		<div className={styles.title}>
			<h2>{title}</h2>
		</div>
	)
}

export default Heading
