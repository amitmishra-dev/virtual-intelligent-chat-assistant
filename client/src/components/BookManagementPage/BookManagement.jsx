import React, { useState,useEffect } from 'react';
import axios from "axios";

function BookManagement() {
    const [books, setBooks] = useState([]);
    const [searchTerm,setSearchTerm] = useState('')
  

    useEffect(() => {
      axios
        .get("http://localhost:3004/books")
        .then((res) => {
        console.log(res.data)
        setBooks(res.data);
     
    })
        .catch((err) => console.log(err));
    }, []);

    
   
  
    return (
      <div>
          <div>
        {books.map((user, index) => (
            <div key={index}>
                
              <p>S.no: {user.id}</p>
              <p>Title: {user.title}</p>
               <p>Author: {user.author}</p>
              <p> Published Year: {user.yearPublished}</p>
              <p> Description: {user.description}</p>
              <p> Borrowing Availability Status: {user.borrowingAvailabilityStatus}</p>
              <p> Last Borrower: {user.LastBorrower}</p> 
              <hr/>
            </div>
          ))}
         
        </div>
      
      </div>
    );
}

export default BookManagement