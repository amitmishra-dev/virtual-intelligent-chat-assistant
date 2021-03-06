import React, { useEffect, useState } from "react";

import { Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersAction,
  deleteUserAction,
} from "../../redux/UsersInfo/actions/creators";
import * as ReactBootstrap from "react-bootstrap";
import ReactPaginate from "react-paginate";

const UsersList = () => {
  let dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const { users } = useSelector((state) => state.user);

  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure You want to delete?"));
    dispatch(deleteUserAction(id));
  };

  useEffect(() => {
    dispatch(getUsersAction(), setLoading(true));
  }, []);

  return (
    <div className="container">
      <Card>
        <Card.Header className={"border border-dark bg-dark text-white"}>
          {" "}
          Users List
        </Card.Header>
        <Card.Body>
          <span className="col-md-8">
            <span className="input-group mb-3 ">
              <input
                type="text"
                className="form-control "
                placeholder="Search user"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <Link
                type="button"
                to={"/add"}
                className="btn btn-primary "
                id="tab"
              >
                Add User
              </Link>
            </span>
          </span>

          <Table variant="">
            <thead className={"border border-dark bg-dark text-white"}>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Joined At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                users
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.firstName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.lastName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.role.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((user) => {
                    console.log(typeof user._id, "-----");
                    //console.log(user._id, "ID");
                    return (
                      <tr key={user.id}>
                        <td>{user._id}</td>
                        <td> {user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.role}</td>
                        <td>{user.createdAt}</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <Link
                              type="button"
                              to={{ pathname: `/user/${user._id}` }}
                              state={{ from: `${user._id}` }}
                              className="btn btn-success"
                            >
                              Edit
                            </Link>

                            <Button
                              type="button"
                              onClick={() => handleDelete(user._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <ReactBootstrap.Spinner animation="border" variant="warning" />
              )}
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </Card.Body>

        <Button
          type="button"
          style={{ height: "5vh", width: "100vh", marginLeft: "20%" }}
          className="btn btn-danger"
          href="/book"
        >
          Book Information
        </Button>
      </Card>
    </div>
  );
};

export default UsersList;
