import { CssBaseline } from '@mui/material';
import { type AppType } from 'next/app';

import { api } from '~/utils/api';

const MyApp: AppType = ({
  Component,
  pageProps,
}) => (
  <>
    <CssBaseline />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default api.withTRPC(MyApp);
