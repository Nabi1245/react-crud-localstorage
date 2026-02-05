import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, saveUsers } from '../utils/localStorage';

const UpdateUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    console.log(user)

    useEffect(() => {
        const  users = getUsers();
        const existing = users.find((u) => u.id == id);
        setUser(existing);
    },[id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name === "phone"){

           if (!/^\d*$/.test(value)) return;
           if(value.length > 10) return;
        }
        setUser({...user, [name]: value});
    };

    // const handleSubmit = (e) => {
    //     //e.preventDefault();
    //     e.preventDefault();
    //     const users = getUsers();
    //     const updated = users.map((u) => (u.id == id ? user : u));
    //     setUser(updated);

    //     navigate('/view');

    // };

    const handleSubmit = (e) => {
  e.preventDefault();

  const users = getUsers();
  const updated = users.map((u) =>
    u.id == id ? user : u
  );

  saveUsers(updated);   // ✅ save to localStorage
  navigate('/view');    // redirect after save
};

  return (
    <div className='card p-4'>
        <h3 className='text-center'>Update User</h3>
        <form onSubmit={handleSubmit}>
            <input 
             className='form-control mb-3'
             name='username'
             value={user?.username || ""}
             onChange={handleChange}
             required
             />
              <input 
             className='form-control mb-3'
             name='email'
             value={user?.email || ""}
             onChange={handleChange}
             required
             />
              <input 
             className='form-control mb-3'
             name='phone'
             value={user?.phone || ""}
             onChange={handleChange}
             required
             />
             <button className='btn btn-warning'>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser;