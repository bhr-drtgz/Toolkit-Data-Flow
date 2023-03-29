import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
 
import { postAdded } from './PostSlice'



function AddPostForm() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )
            setTitle("")
            setContent("")
        }
    }


    return (
        <section className='saveWrapper'>
            <h2>Add a New Post</h2>
            <form className='form'>
                <label htmlFor='postTitle'>Post Title :</label>
                <input className='title' type="text" id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
                <label htmlFor='postContent'>Content :</label>
                <input className='content' type="text" id='postContent' name='postContent' value={content} onChange={onContentChanged} />
                <button onClick={onSavePostClicked} type='button'>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm