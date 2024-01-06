import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "Male",
    address: "",
    hobbies: [],
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUsersById();
  }, [id]);

  const getUsersById = async () => {
    try {
      const response = await axios.get(`https://app-crud-api.vercel.app/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log("Error fetching user by ID:", error);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      console.log("Updating user...");
      await axios.patch(`https://app-crud-api.vercel.app/${id}`, user);
      navigate("/");
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "hobbies" ? value.split(",") : value,
    }));
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={(e) => handleUpdateUser(e)}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                placeholder="Nama"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleInputChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="address"
                value={user.address}
                onChange={handleInputChange}
                placeholder="Alamat"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Hobi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="hobbies"
                value={user.hobbies.join(", ")}
                onChange={handleInputChange}
                placeholder="Hobi"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
