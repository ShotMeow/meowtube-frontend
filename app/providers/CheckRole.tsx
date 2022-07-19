import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { TypeComponentAuthField } from '@/providers/private-route.interface'

import { useAuth } from '@/hooks/useAuth'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthField>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	const { isLoading, user } = useAuth()
	const { replace, pathname } = useRouter()

	const Children = () => <>{children}</>

	if (isLoading) return null

	if (user) return <Children />

	if (isOnlyUser) pathname !== '/' && replace('/')
	return null
}

export default CheckRole
