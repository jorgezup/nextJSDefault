import Head from 'next/head'
import React from 'react'
import GoogleSheetsLogo from '../assets/google-sheets.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <GoogleSheetsLogo />
        <h1>Next.JS with Google Sheets CMS</h1>
      </main>

      <footer>
        <p>Jorge Zupirolli 2020</p>
      </footer>
    </Container>
  )
}

export default Home
