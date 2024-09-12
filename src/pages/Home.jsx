import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../slices/UseSlice';
import './styles/Home.css'; // Import the CSS file
import Notification from '../Notification/Notification'; 

function Home() {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: '', age: '', email: '', contact: ''
  });
  const [showNotification, setShowNotification] = useState(false);
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((currInput) => ({
      ...currInput,
      [name]: value,
    }));
  };

  const addUser = (e) => {
    e.preventDefault();
    dispatch(setUsers(formInput));
    setFormInput({ name: '', age: '', email: '', contact: '' }); // Clear form inputs
   // window.alert('success')
    setShowNotification(true);
  

    // Hide the notification after 3 seconds
  //   setTimeout(() => {
  //     setShowNotification(false);
  //   }, 3000);
  // 
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={addUser}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            name='name' 
            value={formInput.name} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Age</label>
          <input 
            type="text" 
            name='age' 
            value={formInput.age} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input 
            type="text" 
            name='email' 
            value={formInput.email} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Contact</label>
          <input 
            type="text" 
            name='contact' 
            value={formInput.contact} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>

        <button type="submit" className="form-button">Add</button>
      </form>

      {showNotification && 
        <Notification 
          message="data fetch" 
          onClose={() => setShowNotification(false)} 
        />
      }
    </div>
  );
}

export default Home;
