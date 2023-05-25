import React, { useState } from 'react';
import { Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const Table = () => {
    // eslint-disable-next-line
    const [data, setData] = useState([{"id":1, "name": "name 1", "email": "email 1"}, {"id":2, "name": "name 2","email": "email 2"}]);
    return (

        <div class="container">
        <div class="row">
            <div class="col-6">
                <h1 class="mt-4 mb-4">List of users</h1>
            </div>
            <div class="col-6 ">
                <NavLink to="/user/add" className="btn btn-primary float-end mt-4">Add
                user</NavLink>
            </div>
        </div>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
                <tr>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td><NavLink to="/user/edit/1" className="btn btn-primary float-end mt-4">Edit user</NavLink>
                    <Button color="danger">X</Button></td>
                </tr>
            ))}
          </tbody>
        </table>
        </div>
    )
}

export default Table;
