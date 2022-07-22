import { FC } from 'react'

import { IUploadField } from '@/components/UI/UploadField/UploadField.interface'

import { useUploadFile } from '@/hooks/useUploadFile'

import styles from './UploadField.module.scss'

const UploadField: FC<IUploadField> = ({
	title,
	onChange,
	folder,
	setIsChosen,
	setValue
}) => {
	const { uploadFile } = useUploadFile(onChange, folder, setValue, setIsChosen)
	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className='sr-only'>Выберите файл</span>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField
