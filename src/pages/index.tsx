import { Button, Stack, Typography } from '@mui/material';
import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Welcome | Tennis Tracker</title>
      <meta name="description" content="Tennis tracker helps you to track tennis tournaments" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Stack spacing={5}>
        <Typography variant="h2" fontWeight={600}>Welcome to tennis tracker</Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button variant="contained" component={Link} href="/tournaments">See tournaments</Button>
          <Button variant="contained" component={Link} href="/tournaments/new">Create tournament</Button>
        </Stack>
      </Stack>
    </Stack>
  </>
);

export default Home;
