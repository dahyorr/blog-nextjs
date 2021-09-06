export interface Post{
    title: string;
    image: string;
    excerpt: string;
    date: Date;
    slug: string;
    content: string;
    isFeatured?: boolean;
}

export interface PostMetaData{
    title: string;
    image: string;
    excerpt: string;
    date: Date;
    isFeatured?: boolean;
}

export interface Message{
    email: string;
    name: string;
    message: string
}

export type RequestStatus = 'pending' | 'success' | 'error' | undefined

export interface NotificationItem{
    title: string;
    message: string;
    status: 'success' | 'error' | 'pending'
}