import { Dispatch, SetStateAction } from 'react'

export interface IUploadField {
	title?: string
	onChange: (...event: any) => void
	folder?: string
	setValue?: (value: number) => void
	setIsChosen?: Dispatch<SetStateAction<boolean>>
}
