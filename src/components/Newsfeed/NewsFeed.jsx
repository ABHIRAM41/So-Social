import React from 'react'
import UploadPost from '../UploadPost/UploadPost'
import Post from '../Post/Post'
import {Posts} from '../data/dummyData'
const NewsFeed = () => {
  return (
    <div style={{flex:5.25}}>
      <UploadPost/>
      {
        Posts.map(post=>{
        return <Post key={post.id} post={post}/>
        })
      }
    </div>
  )
}

export default NewsFeed