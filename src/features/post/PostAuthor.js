import { useSelector } from 'react-redux'
import { selectAllusers } from '../users/usersSlice'

function PostAuthor({ userId }) {
    const users = useSelector(selectAllusers)

    const author = users.find(user => user.id === userId)

    return (
        <span className='spanAuthor'>by {author ? author.name : "Unknown author"}</span>
    )
}

export default PostAuthor