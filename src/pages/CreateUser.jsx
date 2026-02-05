import React, { useState } from 'react'
import { getUsers, saveUsers } from "../utils/localStorage";
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
    });
    console.log(user)

    const handleChange = (e) => {
           const { name, value } = e.target;

    // Username: only letters, max 16 chars
    if (name === "username") {
      if (!/^[a-zA-Z]*$/.test(value)) return;
      if (value.length > 16) return;
    }

    // Phone: only numbers, max 10 digits
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
            if (user.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    const users = getUsers();   // ✅
    const newUser = { ...user, id: Date.now() };

    users.push(newUser);
    // saveUsers(users);   // save to localStorage
    saveUsers(users);

    navigate("/view"); // redirect after save
    };
    
  return (
    <div className='container'>
        <h1>Create User</h1>
        <div className='card p-4 col-md-6 text-center'>
            <form onSubmit={handleSubmit}>
                <input 
                className='form-control mb-3'
                name='username'
                type="text"
                placeholder='Username'
                onChange={handleChange}
                required
                />
                <input 
                className='form-control mb-3'
                name='email'
                type="email"
                placeholder='Email'
                onChange={handleChange}
                required
                 />
                 <input 
                 className='form-control mb-3'
                 name='phone'
                 type='number'
                 placeholder='Phone (10 digits)'
                 onChange={handleChange}
                 required
                  />
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser;