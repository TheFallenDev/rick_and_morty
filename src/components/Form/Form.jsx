import { useState } from 'react'
import validation from './validation';

export default function Form(props){

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });

    const handleInputChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = ()=>{
        props.login(userData);
    }

    return (
        <div>
            <label>Username</label>
            <input type="text" name='username' value={userData.username} onChange={handleInputChange}/>
            <p>{errors.username}</p>
            <label>Password</label>
            <input type="password" name='password' value={userData.password} onChange={handleInputChange}/>
            <p>{errors.password}</p>
            <button onClick={handleSubmit}>LOGIN</button>
        </div>
    )
}