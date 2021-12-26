import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>PoroCheck is a Discord bot that helps you inspect basic stats from a summoner in League of Legends.</p>
        <p>The <code>!whois</code> command takes in two arguments, the region following the summoner name of the player you want to lookup.</p>
        <code>!whois REGION SUMMONER</code>
        <p>Example: <code>!whois na Doublelift</code></p>
        <Image
              priority
              src="/images/poro-test.png"
              height={326}
              width={311}
            />
        <h2 className={utilStyles.headingLg}>Bot Invite</h2>
        <p>To use the PoroCheck paste this invitation link on your browser:</p>
        <p class={utilStyles.linkClass} style={{backgroundColor: 'lightGrey', padding: '10px'}}><code>https://discord.com/api/oauth2/authorize?client_id=922920077567864953&permissions=8&scope=bot</code></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <h2 class={utilStyles.headingLg}>Source Code</h2>
      <Link href='https://github.com/elrick97/riotBot'>
        <a>Github repo</a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
