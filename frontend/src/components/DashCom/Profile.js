 import React from 'react';
 import {useSelector} from 'react-redux';

function Profile() {
    const {currentUser } = useSelector((state) => state.user);

    return (
       <> 
       <div className='p-3 max-w-lg mx-auto'>
            <h2 class=" text-3xl font-semibold text-center" >Profile</h2>
            <form >
                <img src={currentUser.profilePicture} alt="profile picture"
                className='h-24 w-24 self-center cursor-pointer rounded-full object-cover'/>

            <input
                defaultValue={currentUser.username}
                type="text"
                id="username"
                name="password"
                placeholder="username"
                className='bg-slate-100 rounded-lg p-3'
              />

            <input
                defaultValue={currentUser.email}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                
              />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                
              />
              <button>Update</button>  
            </form>
            <div className=''>
                <span className=''>
                    Delete Account
                </span>
                <span className=''>
                     signOut
                </span>
            </div>
        </div>
        </>
    )
};

export default Profile;
