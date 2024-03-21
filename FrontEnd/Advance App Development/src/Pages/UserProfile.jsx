import React from 'react';
import AdminNav from '../Components/AdminNav';
import "./UserProfile.css";

const UserProfile = () => {
  const users = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      mobile: '1234567890', 
      marks10th: '95%', 
      marks12th: '90%', 
      ugMarks: '85%', // Optional
      state: 'State A', 
      city: 'City X', 
      university: 'University A', 
      course: 'Computer Science' 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      mobile: '9876543210', 
      marks10th: '88%', 
      marks12th: '85%', 
      ugMarks: '82%', // Optional
      state: 'State B', 
      city: 'City Y', 
      university: 'University B', 
      course: 'Engineering' 
    },
    { 
      id: 3, 
      name: 'Alice Johnson', 
      email: 'alice@example.com', 
      mobile: '5678901234', 
      marks10th: '92%', 
      marks12th: '87%', 
      ugMarks: '80%', // Optional
      state: 'State C', 
      city: 'City Z', 
      university: 'University C', 
      course: 'Mathematics' 
    },
    // Add more users as needed
  ];

  const handleCreate = () => {
    // Logic for creating a new user
    console.log('Creating a new user...');
  };

  const handleUpdate = (userId) => {
    // Logic for updating a user
    console.log('Updating user with ID:', userId);
  };

  const handleDelete = (userId) => {
    // Logic for deleting a user
    console.log('Deleting user with ID:', userId);
  };

  return (
    <div className="user-profile">
      <AdminNav />
      <h2>User Profiles</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>10th Marks</th>
            <th>12th Marks</th>
            <th>UG Marks</th> {/* Optional */}
            <th>State</th>
            <th>City</th>
            <th>University</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.marks10th}</td>
              <td>{user.marks12th}</td>
              <td>{user.ugMarks || '-'}</td> {/* Show '-' if UG marks not available */}
              <td>{user.state}</td>
              <td>{user.city}</td>
              <td>{user.university}</td>
              <td>{user.course}</td>
              <td>
                <button onClick={() => handleUpdate(user.id)}>Update</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleCreate}>Create User</button>
    </div>
  );
};

export default UserProfile;
