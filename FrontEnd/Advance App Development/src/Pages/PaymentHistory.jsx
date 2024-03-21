import React, { useState } from 'react';
import AdminNav from '../Components/AdminNav';
import "./PaymentHistory.css";

const PaymentHistory = () => {
  const [people, setPeople] = useState([
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      mobile: "1234567890",
      university: "University A",
      course: "Computer Science",
      status: "Paid",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      dateTime: "2023-01-23T13:23Z",
    },
    {
      name: "jaden smith",
      email: "jaden.smith@example.com",
      mobile: "1234567890",
      university: "University b",
      course: "Information Technology",
      status: "Paid",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      dateTime: "2023-01-23T13:23Z",
    },
  ]);

  const handleDelete = (email) => {
    setPeople(people.filter(person => person.email !== email));
  };

  return (
    <div>
      <AdminNav />
      <h2 className="text-center text-xl font-semibold mt-8 mb-4">Payment History</h2>
      <div className="flex justify-center">
        <table className="table-fixed border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 w-1/6">Name</th>
              <th className="border border-gray-300 px-4 py-2 w-1/6">Email</th>
              <th className="border border-gray-300 px-4 py-2 w-1/6">Mobile No.</th>
              <th className="border border-gray-300 px-4 py-2 w-1/6">University</th>
              <th className="border border-gray-300 px-4 py-2 w-1/6">Course</th>
              <th className="border border-gray-300 px-4 py-2 w-1/6">Status</th>
              <th className="border border-gray-300 px-4 py-2 w-1/6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.email} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{person.name}</td>
                <td className="border border-gray-300 px-4 py-2">{person.email}</td>
                <td className="border border-gray-300 px-4 py-2">{person.mobile}</td>
                <td className="border border-gray-300 px-4 py-2">{person.university}</td>
                <td className="border border-gray-300 px-4 py-2">{person.course}</td>
                <td className="border border-gray-300 px-4 py-2">{person.status}</td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                  <button className="text-white bg-blue-500 px-2 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600" onClick={() => handleDelete(person.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
