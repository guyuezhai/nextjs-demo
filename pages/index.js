import Head from 'next/head'
import Link from 'next/link';
import {getSortedPostsData} from '../lib/posts';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({id,date,title})=>{
              return <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a href="">{title}</a>
                </Link>
                <br/>
                {id}
                <br/>
                {date}
              </li>
            })
          }
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log('utilStyles------',allPostsData)
  return {
    props:{
      allPostsData
    }
  }
};
