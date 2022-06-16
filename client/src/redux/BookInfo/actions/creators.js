import { addUser, getUser, getUsers, deleteUser, updateUser } from "./actions";

import axios from "axios";

/// add a new user
export const addUserAction = (user) => {
  return (dispatch) => {
    /// axios is a library used to make request to an API,
    /// return data and manipulate the data .
    axios
      .post("http://localhost:5000/books/create", user)
      .then((response) => {
        console.log(response);
        dispatch(addUser(response.data));
      })
      .catch((error) => {
        console.log("eror", error);
      });
  };
};

/// fetch data of a single user  basedin id
export const getUserAction = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        console.log(response);
        dispatch(getUser(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

/// fetch all users
export const getBooksAction = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        console.log(response);
        /// dispatch function dispatches an action which triggers state changes in the store
        dispatch(getUsers(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

/// delete a user
export const deleteUserAction = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((response) => {
        console.log(response);
        dispatch(deleteUser());
        dispatch(getBooksAction());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

/// update the existing data of a user
export const updateBookAction = (id) => {
  console.log(id, "id");
  return (dispatch) => {
    axios
      .patch(`http://localhost:5000/books/${id}`)
      .then((response) => {
        console.log(response, "resp");
        dispatch(updateUser());
        dispatch(getBooksAction());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
