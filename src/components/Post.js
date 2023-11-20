import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <>
      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div className="post-stats">
          <p className='thought'> <span className='t-type'>{post.thought_type}</span>{post.thought_by}</p>
          <div className='post-b-right'>
            <p className='view-date'>{post.date_upload} . {post.read_time} .</p>
            <p className='view-date'>{post.views} Views</p>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Post;
