import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectAllPost } from './PostSlice'

function PostList() {
    const posts = useSelector(selectAllPost)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.content.substring(0, 100)}
            </p>
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