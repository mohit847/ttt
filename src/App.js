import React, { useState, useEffect } from 'react';
import './App.css'; 
import Profile from './components/Profile';
import Post from './components/Post';
import Header from './components/Header';
import userData from './data.json'; 
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    };

    fetchData();
  }, []);

  return (
    <>
      <Header/>
    <div className="app">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Profile userData={userData} />
          <PostList posts={userData.posts} />
        </>
      )}
    </div>
    </>
  );
};

const PostList = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(7); 
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 1);
  };

  return (
    <div className="post-list" onScroll={loadMorePosts}>
      {posts.slice(0, visiblePosts).map((post) => (
        <Post key={post.post_id} post={post} />
      ))}
    </div>
  );
};

export default App;
