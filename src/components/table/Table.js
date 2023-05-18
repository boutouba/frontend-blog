import React, { useState } from 'react';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Table = () => {
    // eslint-disable-next-line
    const [data, setData] = useState([{"id":1, "name": "name 1", "email": "email 1"}, {"id":2, "name": "name 2","email": "email 2"}]);
    return (
        <section class="mt-4">
        <h1>List of user</h1>
        <Link to="/add-user">Add</Link>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td> <Button color="success">Edit</Button> <Button color="danger">X</Button></td>
                </tr>
              ))}
          </tbody>
        </table>
        </section>
    )
}

export default Table;
