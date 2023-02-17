import React from 'react'
import Layout from '@site/src/components/Layout'
import HomeView from '@site/src/views/HomeView'
import Head from '@docusaurus/Head'
import ApiProvider from '@site/src/contexts/Api'
import WaitlistProvider from '@site/src/contexts/Waitlist'
import Translate, { translate } from '@docusaurus/Translate'

export default function Home() {
  return (
    <ApiProvider>
      <WaitlistProvider>
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <meta property="og:image" content="/img/og-image.jpg" />
            <meta
              name="description"
              content={translate({
                id: 'home.pageDesc',
                message: ' A community-driven platform rewarding everyone for contributing helpful food information.',
              })}
            />
            <title>
              <Translate id="home.pageTitle">Fooday | Get Paid for Your Opinions</Translate>
            </title>
          </Head>
          <HomeView />
        </Layout>
      </WaitlistProvider>
    </ApiProvider>
  )
}
