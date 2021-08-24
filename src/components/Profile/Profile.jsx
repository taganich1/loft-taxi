import React from "react";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <div className='profile'>
        <div className='profile-item'>
          <div className='profile-img'>
            <img src='profile-logo.jpg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
