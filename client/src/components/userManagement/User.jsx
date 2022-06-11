import React, { useState,useEffect } from 'react';
import axios from "axios";

  function User() {
    const [users, setUsers] = useState([]);
    const [searchTerm,setSearchTerm] = useState('')
  

    useEffect(() => {
      axios
        .get("http://localhost:3004/users")
        .then((res) => {
        console.log(res.data)
        setUsers(res.data);
     
    })
        .catch((err) => console.log(err));
    }, []);

    
   
  
    return (
      <div>
         
         <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
          
       <hr/>
          <div>
          {users.filter((val)=>{
        if(searchTerm == ""){
          return val
        }
        else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())||val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || val.joinedDate.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((user, index) => (
            <div key={index}>
                
              <p>S.No: {user.id}</p>
              <p>Name: {user.firstName} {user.lastName}</p>
              <p> Role: {user.role}</p>
              <p> Joined Date: {user.joinedDate}</p>
              <hr/>
            </div>
          ))}
         
        </div>
      
      </div>
    );
}
export default User