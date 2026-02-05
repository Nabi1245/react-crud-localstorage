import React, { useEffect, useState } from "react";
import { getUsers, saveUsers } from "../utils/localStorage";
import { Link } from "react-router-dom";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Load users
  useEffect(() => {
    const data = getUsers();
    setUsers(data);
    setFilteredUsers(data);
  }, []);

  // Open modal
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  // Confirm delete
  const confirmDelete = () => {
    const updated = users.filter((u) => u.id !== deleteId);
    saveUsers(updated);
    setUsers(updated);
    setFilteredUsers(updated);
    setShowModal(false);
  };

  // Search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const result = users.filter(
      (u) =>
        u.username.toLowerCase().includes(value) ||
        u.email.toLowerCase().includes(value) ||
        u.phone.includes(value),
    );

    setFilteredUsers(result);
  };
  return (
    <div>
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this user?</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={confirmDelete}>
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <h3 className="text-center mb-2">All Users</h3>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email, phone..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-danger">
                No record found
              </td>
            </tr>
          ) : (
            filteredUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>
                  <Link to={`/update/${u.id}`} className="btn btn-warning me-2">
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
