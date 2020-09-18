import Head from 'next/head'

import Header from '@components/Header'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Ysys</title>
      </Head>

      <Header />

      <h1>Hello, Worlds..!</h1>
    </div>
  )
}
