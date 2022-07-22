import { Dispatch, SetStateAction } from 'react'

export interface IUploadModal {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	videoId: number
}
