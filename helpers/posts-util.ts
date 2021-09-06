import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post, PostMetaData} from '@/types'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export const getPostData = (postIdentifier: string): Post => {
    const slug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)
    const postData = {
        ...(data as PostMetaData),
        title: data.title,
        slug,
        content,
    } 
    return postData
}

export const getPostFiles = () => fs.readdirSync(postsDirectory)

export const getAllPosts = () =>{
    const postFiles = getPostFiles()
    const allPosts = postFiles.map((postFile)=> getPostData(postFile))
    const sortedPosts =  allPosts.sort((postA, postB) => postA.date > postB.date ? -1: 1)
    return sortedPosts
}

export const getFeaturedPosts = () =>{
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}