import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Users() {
  const BaseURL = 'https://shopping-list-management-web-app-backend.vercel.app';
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseURL}/api/items/`)
      .then((result) => setItems(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${BaseURL}/api/item/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="col-md-6 bg-white rounded p-3">
      <p className="text-center text-success fs-2 fw-bold">This Week Groccery List</p>
        <Link to="/create" className="btn btn-primary">
          Add +
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Item Number</th>
                <th>Item Name</th>
                <th>Quentity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td>{item.itemId}</td>
                  <td>{item.itemName}</td>
                  <td>{item.quentity}</td>
                  <td>
                    <Link
                      to={`/update/${item._id}`}
                      className="btn btn-warning "
                    >
                      Update
                    </Link>
                    </td>
                    <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(item._id)}
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
    </div>
  );
}

export default Users;