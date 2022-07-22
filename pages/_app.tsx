import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import ReduxToastrLib from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

import AuthProvider from '@/providers/AuthProvider'
import { TypeComponentAuthField } from '@/providers/private-route.interface'

import { persistor, store } from '@/store/store'

import '../app/styles/globals.scss'

type TypeAppProps = AppProps & TypeComponentAuthField

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<NextProgressBar
				color='#FF7652'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider Component={Component}>
						<Component {...pageProps} />
						<ReduxToastrLib
							newestOnTop={false}
							preventDuplicates
							progressBar
							closeOnToastrClick
							timeOut={4000}
							transitionIn='fadeIn'
							transitionOut='fadeOut'
						/>
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}

export default MyApp
