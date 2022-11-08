import Head from 'next/head'
import Header from '../components/Header'
import Post from '../components/Post'
import path from 'path'
import matter from 'gray-matter'
import { getIndexPage } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import markdownStyles from './markdown-styles.module.css'
// import Image from 'next/image'
// import { checkout} from '../CheckoutForm'
import Link from 'next/link'



export default function Home({ post }) {
  return (
    <div>
      <Head>
        <title>Steel Key</title>
      </Head>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}


export async function getStaticProps() {
  const post = getIndexPage()
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}
