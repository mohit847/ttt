import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ userData }) => {
  return (
    <div className="profile">
      <img src={userData.banner_image} alt="Banner" className='profile-banner' />
      <img src={userData.user_image} alt="User" className="profile-image" />
      <div className="banner">
        <div className='profile-text'>
          <div className='prof-right'>
            <h1 className="profile-name">{userData.username}</h1>
            <div className="profile-stats">
              <div className="stat">
                <p className='follow_data'>{userData.followers}</p>
                <p className='follow'>Followers</p>
              </div>
              <div className="stat">
                <p className='follow_data'>{userData.following}</p>
                <p className='follow'>Following</p>
              </div>
            </div>
          </div>
        </div>
        <div className='profile-bottom'>
          <p className="profile-title">{userData.user_title}</p>
          <p className="profile-link">{userData.user_website}</p>
        </div>
        <div className="icons-section">
          <div className="icon">
            <p className='ico-bg1'><FontAwesomeIcon icon={faStar} /></p>
            <p>{userData.total_posts_started}</p>
          </div>
          <div className="icon">
            <p className='ico-bg2'><FontAwesomeIcon icon={faThumbsUp} /></p>
            <p>{userData.total_thumbup}</p>
          </div>
          <div className="icon">
            <p className='ico-bg3'><FontAwesomeIcon icon={faEye} /></p>
            <p>{userData.total_views}</p>
          </div>
          <div className="icon">
            <p className='ico-bg4'><FontAwesomeIcon icon={faHeart} /></p>
            <p>{userData.total_likes}</p>
          </div>
        </div>

      </div>
      <div className='post-num'>
        <div className='post-btn'>{userData.total_post}</div>
        <div className='post-btn1'></div>
      </div>
    </div >
  );
};

export default Profile;
