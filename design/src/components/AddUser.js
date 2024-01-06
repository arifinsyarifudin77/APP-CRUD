import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "Male",
    address: "", 
    hobby: "",   
  });

  const navigate = useNavigate();

  const handleSaveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://app-crud-api.vercel.app/", {
        name: user.name,
        email: user.email,
        gender: user.gender,
        address: user.address, 
        hobby: user.hobby,     
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={handleSaveUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
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
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={user.gender}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
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
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
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
                value={user.hobby}
                onChange={(e) => setUser({ ...user, hobby: e.target.value })}
                placeholder="Hobi"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
