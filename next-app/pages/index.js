import React from 'react'
import Head from 'next/head';

import { Provider } from 'react-redux';
import store from '../store';

//components
import Layout from '../components';

const Home = () => (
  <Provider store={store}>
    <Layout>
      <Head>
        <title>Home Init</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  </Provider>
)

export default Home
