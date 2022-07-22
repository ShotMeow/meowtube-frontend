import cn from 'classnames'
import { FC } from 'react'
import { MdCheckCircle, MdUpload } from 'react-icons/md'

import Button from '@/components//UI/Button/Button'

import styles from './FooterForm.module.scss'

const FooterForm: FC<{ percent: number; isUploaded: boolean }> = ({
	percent,
	isUploaded
}) => {
	return (
		<div className={styles.footer}>
			<div
				className={cn(styles.status, {
					[styles.icons_uploaded]: isUploaded
				})}
			>
				<MdUpload className={styles.upload_icons} />
				<MdCheckCircle className={styles.check_icon} />
				<span>
					{isUploaded ? 'Видео загружено!' : `Загружено ${percent}%...`}
				</span>
			</div>
			<div>
				<Button>Сохранить</Button>
			</div>
		</div>
	)
}

export default FooterForm
