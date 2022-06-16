import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import {
  getUserAction,
  updateBookAction,
} from "../../redux/BookInfo/actions/creators";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UpdateBook = (props) => {
  const [clickedUser, setClickedUser] = useState({});
       const location = useLocation()
     const { from } = location.state

  console.log(from, "location");
  let dispatch = useDispatch();
  const change = useNavigate();
  let id = useParams();

  const [state, setState] = useState({
    title: "",
    description: "",
    genre: "",
    author: "",
  });

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserAction(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const { title, description, genre, author } = state;

  const handleTextChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state, "state");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookAction(state,from ));
    change("/book");
  };
   useEffect(() => {
     axios
       .get("http://localhost:5000/books")
       .then((response) => {
         console.log(response);
         // dispatch function dispatches an action which triggers state changes in the store
          // dispatch(getUsers(response.data)
         for (let i = 0; i < response.data.length; i++) {
           if (response.data[i]._id == from) {
             setClickedUser(response.data[i]);
           }
         }
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);

  return (
    <div className="container">
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
          <h3>Edit Book</h3>
        </Card.Header>
        <div className="form-container">
          <Form onSubmit={handleOnSubmit}>
            <Card.Body>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleTextChange}
                  defaultValue={clickedUser.title || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleTextChange}
                  defaultValue={clickedUser.description || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>
              <div className="form-group">
                <label>Genre</label>
                <input
                  type="text"
                  name="genre"
                  onChange={handleTextChange}
                  defaultValue={clickedUser.genre || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <textarea
                  type="text"
                  name="author"
                  onChange={handleTextChange}
                  defaultValue={clickedUser.author || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>

              <br></br>

              <div className="form-group">
                <button
                  onChange={handleTextChange}
                  className="btn btn-primary"
                  type="submit"
                >
                  Edit User
                </button>
                <Button
                  id="btn"
                  href="/book"
                  className="w-30 p-3 float-right"
                  variant="primary"
                >
                  Back
                </Button>
              </div>
            </Card.Body>
          </Form>
        </div>
      </Card>
      {/* )} */}
    </div>
  );
};

export default UpdateBook;
