import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/post-item.module.css'
import {Post} from '@/types'


interface PostItemProps{
    post: Post
}

const PostItem: React.FC<PostItemProps> = ({post}) => {
    const {title, image, excerpt, date, slug} = post
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return(
        <li className={styles.post}>
            <Link href={linkPath}>
                <a>
                    <div className={styles.image}>
                        <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
                    </div>
                    <div  className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem