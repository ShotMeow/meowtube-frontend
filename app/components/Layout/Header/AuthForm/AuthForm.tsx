import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { IAuthFields } from '@/components/Layout/Header/AuthForm/AuthForm.interface'
import Button from '@/components/UI/Button/Button'
import Field from '@/components/UI/Field/Field'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import { validEmail } from '@/utils/validation.utils'

import stylesIcon from '../IconsRight/IconsRight.module.scss'

import styles from './AuthForm.module.scss'

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')

	const { login, register: registerAction } = useActions()

	const { isLoading } = useAuth()

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login') login(data)
		else if (type === 'register') registerAction(data)
	}
	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcon.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#A4A4A4' />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'E-mail обязателен!',
							pattern: {
								value: validEmail,
								message: 'E-mail введен неверно!'
							}
						})}
						placeholder='E-mail'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Пароль обязателен!',
							minLength: {
								value: 6,
								message: 'Пароль слишком короткий'
							}
						})}
						placeholder='Пароль'
						error={errors.password}
						type='password'
					/>
					<div className='pt-5 mb-1 text-center'>
						<Button onClick={() => setType('login')} disabled={isLoading}>
							Войти
						</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Регистрация
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
