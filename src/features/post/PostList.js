import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectAllPost } from './PostSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'

function PostList() {
    const posts = useSelector(selectAllPost)

    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.content.substring(0, 100)}
            </p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButton post={post} />
        </article>
    ))

    return (
        <section>
            <h1>Posts</h1>
            {renderedPosts}
        </section>
    )
}

export default PostList