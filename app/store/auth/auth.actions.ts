import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import {
	IAuthFields,
	IRegFields
} from '@/components/Layout/Header/AuthForm/AuthForm.interface'

import { IAuthData } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/api.utils'

export const register = createAsyncThunk<IAuthData, IRegFields>(
	'auth/register',
	async ({ name, email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(name, email, password)
			toastr.success('Регистрация', 'Успешно выполнена')
			return response
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Вход в систему', 'Успешно выполнена')
			return response
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	return {}
})
