

import { ActionTypes } from './action-types';

/// payload: the object which is assigned to this property contains the data which are sent
/// to the store
export const addBook = (user) => {
    return {
        type: ActionTypes.ADD_BOOK,
        payload: user
    }
}
export const getBooks = (users) => {
    return {
        type: ActionTypes. GET_BOOKS,
        payload: users
    }
}
export const getBook = (user) => {
    return {
        type: ActionTypes. GET_BOOK,
        payload: user

    }
}
export const updateBook = () => {
    return {
        type: ActionTypes.UPDATE_BOOK,

    }
}

export const deleteBook = () => {
    return {
        type: ActionTypes.DELETE_BOOK,
    }
}

