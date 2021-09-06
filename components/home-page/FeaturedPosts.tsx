import styles from '@/styles/featured-posts.module.css'
import { Post } from '@/types'
import PostsGrid from '../posts/PostsGrid'

interface FeaturedPostsProps{
    posts: Post[]
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({posts}) => {
    return(
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts}/>
        </section>
    )
}

export default FeaturedPosts