import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      getUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  return (
    <div className="columns">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Alamat</th>
              <th>Hobi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.address || "-"}</td>
                <td>{user.hobbies ? user.hobbies.join(", ") : "-"}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`} // Ensure the link is correctly formed
                    className="button is-info is-small"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;