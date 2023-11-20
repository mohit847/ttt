import React from 'react';
import './Post.css'; 

const Post = ({ post }) => {
  return (
    <>
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-stats">
        <p>Likes: {post.likes}</p>
        <p>Views: {post.views}</p>
      </div>
    </div>
      <hr></hr>
      </>
  );
};

export default Post;
