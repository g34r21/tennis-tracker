import { type AppType } from 'next/app';

import { api } from '~/utils/api';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp: AppType = ({ Component, pageProps }) => <Component {...pageProps} />;

export default api.withTRPC(MyApp);
