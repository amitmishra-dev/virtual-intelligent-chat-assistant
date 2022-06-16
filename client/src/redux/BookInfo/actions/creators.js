

import { addBook, getBook, getBooks, deleteBook, updateBook } from './actions';

import axios from 'axios';


/// add a new Book
export const addBookAction = (user) => {
    return (dispatch) => {
     
        /// return data and manipulate the data .
        axios.post('http://localhost:5000/book/create', user)
            .then(response => {
                console.log(response);
                dispatch(addBook(response.data))
            })
            .catch(error => {
                console.log("eror", error);
            });
    }
}

/// fetch data of a single Book  basedin id
export const getBookAction = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(response => {
                console.log(response);
                dispatch(getBook (response.data)
                );
            })
            .catch(error => {
                console.log(error);
            });
    }
}

/// fetch all Books 
export const getBooksAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/book')
            .then(response => {
                console.log(response);
                /// dispatch function dispatches an action which triggers state changes in the store
                dispatch(getBooks(response.data)
                );

            })
            .catch(error => {
                console.log(error);
            });
    }
}

/// delete a book
export const deleteBookAction = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/book/delete/${id}`)
            .then(response => {
                console.log(response);
                dispatch(deleteBook());
                dispatch(getBooksAction());
            })
            .catch(error => {
                console.log(error);
            });
    }
}

/// update the existing data of a book
export const updateBookAction = (id) => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/book/${id}/update`)
            .then(response => {
                console.log(response);
                dispatch(updateBook());
                dispatch(getBooksAction());
            })
            .catch(error => {
                console.log(error);
            });
    }
}