import PostContent from '@/components/posts/post-detail/PostContent'
import { getPostData, getPostFiles } from 'helpers/posts-util'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import {Post} from '@/types'
import Head from 'next/head'

interface PostDetailProps {
    post: Post
}

const PostDetail: NextPage<PostDetailProps> = ({post}) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt}/>
            </Head>
            <PostContent post={post}/>
        </>
    )
}

export const getStaticProps: GetStaticProps = (context) => {
    const {slug} = context.params as {slug: string}
    const post = getPostData(slug)
    return{ 
        props: {post},
        revalidate: 600
    }
}

export const getStaticPaths: GetStaticPaths = (context) => {
    const postFilesNames = getPostFiles()
    const slugs = postFilesNames.map(fileName => fileName.replace(/\.md$/, ''))
    return{ 
        paths: slugs.map(slug => ({params: {slug}})),
        fallback: false
    }
}

export default PostDetail
