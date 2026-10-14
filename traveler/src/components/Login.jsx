// should import Routers 
import {useState} from 'react';
export default function Login(){
    const [name, setName] = useState('');
    const [phone, setNumber] = useState('');
    const [email, setEmail] = useState(''); 

    //create the HandleSubmit 
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, phone, email}); // just prints out the name 
    }
}

return(
    // remeber this has all the HTML code 
    <form onSubmit={handleSubmit}> 
        <input type = "text" value = {name} onChange={(e) => setName(e.target.value)} 
        placeholder="type name here!" required/> 

        <input type = "tel" value = {phone} onChange={(e) => setNumber(e.target.value)} 
        placeholder="type number here!" required/>

        <input type = "email" value = {email} onChange={(e) => setEmail(e.target.value)} 
        placeholder="type email here!"/>

    
    <button type = "submit">Log In!</button>
</form>
)