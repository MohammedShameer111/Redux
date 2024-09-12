import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../slices/UseSlice';
import './styles/User.css'; // Import the CSS file

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userInfo.users);

  const deleteUse = (userId) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      dispatch(deleteUser(userId)); // Proceed with deletion if user confirms
    }
  };

  return (
    <div className="user-container">
      {users?.map((user, index) => (
        <div key={index} className="user-card">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-detail">Age: {user.age}</p>
          <p className="user-detail">Email: {user.email}</p>
          <p className="user-detail">Contact: {user.contact}</p>
          <button onClick={() => deleteUse(user.id)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default User;
