import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import {
  getUserAction,
  updateUserAction,
} from "../../redux/UsersInfo/actions/creators";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UpdateUser = (props) => {
  const [clickedUser, setClickedUser] = useState({});
  const location = useLocation();
  const { from } = location.state;

  console.log(from, "location");
  let dispatch = useDispatch();
  const change = useNavigate();
  let id = useParams();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
  });

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("hello");
    dispatch(getUserAction(from));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const { firstName, lastName, role, email } = state;

  const handleTextChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state, "state");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction(state, from));
    change("/user");
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        console.log(response);
        /// dispatch function dispatches an action which triggers state changes in the store
        //  dispatch(getUsers(response.data)
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
          <h3>Edit User</h3>
        </Card.Header>
        <div className="form-container">
          <Form onSubmit={handleOnSubmit}>
            <Card.Body>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleTextChange}
                  defaultValue={clickedUser.firstName || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleTextChange}
                  defaultValue={clickedUser.lastName || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  onChange={handleTextChange}
                  defaultValue={clickedUser.role || ""}
                  className="form-control w-50 p-2"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <textarea
                  type="mail"
                  name="email"
                  onChange={handleTextChange}
                  defaultValue={clickedUser.email || ""}
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
                  href="/user"
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

export default UpdateUser;
