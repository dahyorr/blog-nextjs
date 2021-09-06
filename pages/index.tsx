import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/components/home-page/Hero'
import FeaturedPosts from '@/components/home-page/FeaturedPosts'
import { Post } from '../types'
import { getFeaturedPosts } from '@/helpers'

interface HomeProps{
	posts: Post[]
}

const Home: NextPage<HomeProps> = ({posts}) => {
	return (
		<>
		<Head>
			<meta name="description" content="I post about programming and web development"/>
			<title>{"Dayo's Blog"}</title>
		</Head>
			<Hero/>
			<FeaturedPosts posts={posts}/>
		</>
	)
}

export const getStaticProps = () => {
	const featuredPosts = getFeaturedPosts()
	return { 
		props: {
			posts: featuredPosts
		},
	}
}

export default Home
