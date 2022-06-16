import React, { useEffect, useState } from "react";

import { Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBooksAction,
  deleteUserAction,
} from "../../redux/BookInfo/actions/creators";
import * as ReactBootstrap from "react-bootstrap";
import ReactPaginate from "react-paginate";

const BooksList = () => {
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
    dispatch(getBooksAction(), setLoading(true));
  }, []);

  return (
    <div className="container">
      <Card>
        <Card.Header className={"border border-dark bg-dark text-white"}>
          {" "}
          Books List
        </Card.Header>
        <Card.Body>
          <span className="col-md-8">
            <span className="input-group mb-3 ">
              <input
                type="text"
                className="form-control "
                placeholder="Search Book"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <Link
                type="button"
                to={"/addBook"}
                className="btn btn-primary "
                id="tab"
              >
                Add Book
              </Link>
            </span>
          </span>

          <Table variant="">
            <thead className={"border border-dark bg-dark text-white"}>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Genre</th>
                <th>Author</th>
                <th>Published At</th>
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
                      val.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.genre.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((book) => {
                    //console.log(user._id, "ID");
                    return (
                      <tr key={book.id}>
                        <td>{book._id}</td>
                        <td> {book.title}</td>
                        <td>{book.description}</td>
                        <td>{book.genre}</td>
                        <td>{book.author}</td>
                        <td>{book.createdAt}</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <Link
                              type="button"
                              to={{ pathname: `/book/${book._id}` }}
                              state={{ from: `${book._id}` }}
                              className="btn btn-success"
                            >
                              Edits
                            </Link>

                            <Button
                              type="button"
                              onClick={() => handleDelete(book._id)}
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
      </Card>
    </div>
  );
};

export default BooksList;
