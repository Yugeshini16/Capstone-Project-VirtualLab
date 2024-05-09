import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../../redux/user/userSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
 
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(updateUserStart());
      console.log("updating user")
      const res = await fetch(`http://localhost:3001/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("success");
        dispatch(updateUserSuccess(data.message));
        setUpdateSuccess(true);
      } else {
        console.log("failure");
        dispatch(updateUserFailure(data.message));
      }
    } catch (error) {
      console.log("error");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
  
      const res = await fetch(`http://localhost:3001/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
  
      if (!res.ok) {
        throw new Error('Failed to delete user account'); // Throw an error if the request is not successful
      }
  
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
      } else {
        dispatch(deleteUserSuccess(data));
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message)); // Dispatch the error message as failure action payload
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('http://localhost:3001/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <img
        src={formData.profilePicture || currentUser.profilePicture}
        alt='profile'
      />
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          defaultValue={currentUser.username}
          type='text'
          id='username'
          placeholder='Username'
          onChange={handleChange}
        />
        <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <button >
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span
          onClick={handleDeleteAccount}
          className='text-red-700 cursor-pointer'
        >
          Delete Account
        </span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
      <p className='text-green-700 mt-5'>
        {updateSuccess && 'User is updated successfully!'}
      </p>
    </div>
  );
}
