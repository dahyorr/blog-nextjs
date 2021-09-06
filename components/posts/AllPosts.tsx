import styles from '@/styles/all-posts.module.css';
import { Post } from '@/types';
import PostsGrid from './PostsGrid';

interface AllPostsProps{
    posts: Post[]
}

const AllPosts: React.FC<AllPostsProps> = ({posts}) => {
    return (
        <section className={styles.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={posts}/>
        </section>
    )
}

export default AllPosts
