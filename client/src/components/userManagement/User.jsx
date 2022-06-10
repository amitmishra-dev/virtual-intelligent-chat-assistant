import React, { useState,useEffect } from 'react';
   
import axios from "axios";

  

function User() {
    const [users, setUsers] = useState([]);
    const [roleTypes,setRoleTypes] = useState("all");

    const filterCondition = (role)=> {
        const {admin,editor} = role

        let roleCondition = true;
         if(roleTypes === "admin"){
             roleCondition = admin ? true: false;
         }
         else if(roleTypes  === "editor"){

             roleCondition = editor ? true:false;
         }
         return roleCondition
    }

    useEffect(() => {
      axios
        .get("http://localhost:3004/users")
        .then((res) => 
        setUsers(res.data)
        // console.log(res.data)
        )
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
      
       <div>
         {
             ["admin","editor","all"].map((method,i)=>(
                 <button onClick={()=>setRoleTypes(method)}>{method}</button>
             ))
         }
       </div>
        <hr/>
          <div>
          {users?.filter(filterCondition).map((user, index) => (
            <div key={index}>
                
              <p>S.No: {user.id}</p>
              <p>Name: {user.firstName} {user.lastName}</p>
              <p> Role: {user.role}</p>
              <p> Joined Date: {user.joinedDate}</p>
            </div>
          ))}
         
        </div>
        {/* </Box>
        </Grid> */}
      </div>
    );
}

export default User