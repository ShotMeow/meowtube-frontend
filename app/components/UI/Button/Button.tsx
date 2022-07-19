import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import { IButton } from '@/components/UI/Button/Button.interface'

import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
