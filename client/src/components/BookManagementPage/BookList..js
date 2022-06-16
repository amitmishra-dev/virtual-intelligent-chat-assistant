import React, { useEffect, useState } from 'react';

import { Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction, deleteBookAction } from '../../redux/BookInfo/actions/creators'
import * as ReactBootstrap from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const  UsersBook = () => {

    let dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);


    const { users } = useSelector(state => state.user);

    const usersPerPage = 7;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure You want to delete?"));
        dispatch(deleteBookAction(id));
    }

    useEffect(() => {
        dispatch(getBooksAction(), setLoading(true));
    }, []);

    return (
        <div className="container" >
            <Card >
                <Card.Header className={"border border-dark bg-dark text-white"}> Books List</Card.Header>
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
                            <Link type="button" to={'/addBook'} className="btn btn-primary " id="tab">Add Book</Link>
                        </span>
                    </span>

                    <Table variant="" >
                        <thead className={"border border-dark bg-dark text-white"}>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Genre</th>
                                <th>Author</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ?
                                users.slice(pagesVisited, pagesVisited + usersPerPage).filter(val => {
                                    if (searchTerm === "") {
                                        return val;
                                    } else if (
                                        val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.genre.toLowerCase().includes(searchTerm.toLowerCase())||
                                        val.author.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return val;
                                    }
                                }).map((user) =>
                                    <tr key={user.id}>
                                        <td>{user._id}</td>
                                        <td> {user.title}</td>
                                        <td>{user.description}</td>
                                        <td>{user.genre}</td>
                                        <td>{user.author}</td>
                                        <td>{user.createdAt}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <Link type="button" to={{ pathname:`/book ${user._id}`}} state={{ from: `${user._id}` }}  className="btn btn-success">Edit</Link>
                                               
                                                <Button type="button" onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</Button>

                                            </div>
                                        </td>
                                    </tr>

                                ) :
                                <ReactBootstrap.Spinner animation="border" variant="primary" />
                            }

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
        </div >

    );
}

export default  UsersBook;
