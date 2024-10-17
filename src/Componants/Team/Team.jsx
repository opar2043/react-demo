import { useEffect, useState } from "react"
import User from "./User/User";

 export default function Team(){

    const myTeam = {
       
    }

    const [users , setUsers] = useState([]);

    useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/users')
           .then(res=> res.json())
           .then(data => setUsers(data))
    },[])


    return(
        <div className="grid">
               <h3>My Team</h3>
               {
               
                users.map(user => <User
                  user = {user}

                ></User>
            )
               }
        </div>
    )
}