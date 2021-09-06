import styles from '@/styles/post-header.module.css'
import Image from 'next/image'

interface PostHeaderProps{
    title: string;
    image: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({title, image}) => {
    return(
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} height={150} width={200}/>
        </header>
    )
}

export default PostHeader