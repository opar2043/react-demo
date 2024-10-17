import './User.css'
export default function User({user}){
    console.log(user);

    let {name,phone,website} = user;
    console.log(name)
    

    return(
        <div className='css'>
             <h2>Company:{name}</h2>
             <h3>Phone : {phone}</h3>
             <h4>Email: {website}</h4>
             <p></p>
        </div>
    )
}