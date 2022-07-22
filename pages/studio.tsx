import Studio from '@/components/pages/Studio/Studio'

import { NextPageAuth } from '@/providers/private-route.interface'

const StudioPage: NextPageAuth = () => {
	return <Studio />
}

StudioPage.isOnlyUser = true

export default StudioPage
