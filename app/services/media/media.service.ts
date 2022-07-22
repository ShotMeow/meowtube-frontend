import { IMediaResponse } from '@/services/media/media.interface'

import { axiosClassic } from '../../api/axios'

export const MediaService = {
	async upload(
		media: FormData,
		folder?: string,
		setValue?: (value: number) => void
	) {
		return axiosClassic.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: progressEvent => {
				if (setValue) {
					const progress = (progressEvent.loaded / progressEvent.total) * 100
					setValue(Math.ceil(progress))
				}
			}
		})
	}
}
