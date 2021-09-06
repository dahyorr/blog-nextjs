import styles from '@/styles/posts-grid.module.css'
import PostItem from './PostItem'
import {Post} from '@/types'

interface PostsGridProps{
    posts: Post[]
}

const PostsGrid: React.FC<PostsGridProps> = ({posts}) => {
    return(
        <ul className={styles.grid}>
            {posts.map((post) => <PostItem post={post} key={post.slug}/>)}
        </ul>
    )
}

export default PostsGrid