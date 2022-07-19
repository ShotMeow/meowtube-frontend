import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { USER } from '@/services/user.service'

import { IUser } from '@/types/user.interface'

import { TypeRootState } from '@/store/store'

import { API_URL } from '../../api/axios'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Video', 'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.accessToken
			if (token) headers.set('Authorization', `Bearer ${token}`)
			return headers
		}
	}),
	endpoints: builder => ({
		getProfile: builder.query<IUser, any>({
			query: () => `${USER}/profile`,
			providesTags: () => [{ type: 'Profile' }]
		})
	})
})
