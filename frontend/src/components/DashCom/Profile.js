import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    setIsPasswordEntered(!!formData.password);
  }, [formData.password]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`http://localhost:3001/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentUser.token}`, // Assuming token-based authentication
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 401) {
        // Handle unauthorized error, likely due to session expiration
        dispatch(signOut());
        setErrorMessage("Session expired. Please log in again.");
        return;
      }

      const data = await res.json();
      if (res.ok) {
        dispatch(updateUserSuccess(data.message));
        setUpdateSuccess(true);
        setErrorMessage(''); // Clear any previous error message
      } else {
        dispatch(updateUserFailure(data.message));
        setUpdateSuccess(false);
        setErrorMessage(data.message || 'Update failed.');
      }
    } catch (error) {
      dispatch(updateUserFailure("An unexpected error occurred."));
      setUpdateSuccess(false);
      setErrorMessage("An unexpected error occurred.");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());

      const res = await fetch(`http://localhost:3001/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${currentUser.token}`, // Assuming token-based authentication
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete user account');
      }

      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        setErrorMessage(data.message || 'Delete failed.');
      } else {
        dispatch(deleteUserSuccess(data));
        setUpdateSuccess(false); // Clear the update success message on account deletion
        setErrorMessage('');
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
      setErrorMessage(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('http://localhost:3001/api/auth/signout', {
        headers: {
          'Authorization': `Bearer ${currentUser.token}`, // Assuming token-based authentication
        },
      });
      dispatch(signOut());
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
        <button type='submit' disabled={!isPasswordEntered}>
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      {updateSuccess && <p className='text-green-700 mt-5'>User updated successfully!</p>}
      {errorMessage && <p className='text-red-700 mt-5'>{errorMessage}</p>}
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
    </div>
  );
}
