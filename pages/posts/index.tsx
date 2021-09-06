import type { NextPage } from 'next'
import Head from 'next/head'
import AllPosts from '@/components/posts/AllPosts'
import {Post} from '@/types'
import { getAllPosts } from 'helpers/posts-util'

interface AllPostsProps{ 
    posts: Post[]
}

const AllPostsPage: NextPage<AllPostsProps> = ({posts}) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="List All posts on the blog" />
            </Head>
            <AllPosts posts={posts}/>
        </>
    )
}

export const getStaticProps = () => {
    const allPosts = getAllPosts()
    return{
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage
