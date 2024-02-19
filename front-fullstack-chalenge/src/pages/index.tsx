import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import LoginPage from './login'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <LoginPage />

    </Container>
  )
}

export default Home
