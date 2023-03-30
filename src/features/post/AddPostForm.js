import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './PostSlice'
import { selectAllusers } from '../users/usersSlice'



function AddPostForm() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState("")

    const users = useSelector(selectAllusers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle("")
            setContent("")
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))


    return (
        <section className='saveWrapper'>
            <h2>Add a New Post</h2>
            <form className='form'>
                <label htmlFor='postTitle'>Post Title :</label>
                <input className='title' type="text" id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
                <label htmlFor='postAuthor'>AutHor :</label>
                <select id='postAutHor' value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor='postContent'>Content :</label>
                <textarea className='content' type="text" id='postContent' name='postContent' value={content} onChange={onContentChanged} />
                <button className='saveButton' onClick={onSavePostClicked} type='button' disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm