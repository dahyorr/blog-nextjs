import React from 'react'
import Image from 'next/image'
import styles from '@/styles/post-content.module.css'
import PostHeader from './PostHeader'
import {Post} from '@/types'
import ReactMarkdown from 'react-markdown'
import { Components } from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

interface PostContentProps{
    post: Post
}

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const PostContent: React.FC<PostContentProps> = ({post}) => {

    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const components: Components = {
        p: ({node, children}) =>{
            const child = node.children[0]
            if('tagName' in child && child.tagName === 'img'){
                if ('properties' in child){
                    const {src, alt} = child.properties as {src: string, alt: string}
                    return <div className={styles.image}>
                    <Image src={`/images/posts/${post.slug}/${src}`} alt={alt} width={600} height={300} />
                    </div>
                }
                else return <div>{children}</div>
            }
            return <p>{children}</p>
        },
        
        code: ({children, className}) => {
            const match = /language-(\w+)/.exec(className || '')
            return <SyntaxHighlighter language={match? match[1] : ''} style={atomDark}>
                {children[0]}
                </SyntaxHighlighter>
        }
    }

    return(
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath}/>
            <ReactMarkdown components={components}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent