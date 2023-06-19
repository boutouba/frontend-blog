import React, { useState, useEffect } from 'react';
import { Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const ListPost = () => {
    // eslint-disable-next-line
    const [posts, setPosts] = useState([{"id":1, "title": "title 1", "content": "content 1"}, {"id":2, "title": "title 2",
    "content": "content 2"}]);

    const data = [{"id":3, "title": "title 3","content": "content 3"}, {"id":4, "title": "title 4","content": "content 4"}];

   useEffect(() => {
        getPosts();
        console.log(posts)
   },[]);

    const getPosts = () => {
        setPosts(posts => [...posts, data])
    }

    return (
        <div class="container">
        <div class="row">
            <div class="col-6">
                <h1 class="mt-4 mb-4">List of post</h1>
            </div>
            <div class="col-6">
                <NavLink to="/post/add" className="btn btn-primary float-end mt-4">Add post</NavLink>
            </div>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((row, index) => (
                <tr>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.content}</td>
                    <td><NavLink to="/post/edit/1" className="btn btn-primary float-end mt-4">Edit post</NavLink>
                    <Button color="danger">X</Button></td>
                </tr>
            ))}
          </tbody>
        </table>
        </div>
    )
}

export default ListPost;
