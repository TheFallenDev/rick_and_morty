import { useState } from 'react'
import validation from './validation';
import styled from 'styled-components';
import logo from './logo.png'

const Container = styled.div`
    width: 320px;
    height: 420px;
    background-color: white;
    color: purple;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 70px 30px;
    border-radius: 8px;
`

const Img = styled.img`
    width: 420px;
    position: absolute;
    top: -156px;
    right: -50px;
`

const Title = styled.p`
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
`

const Box = styled.div`
    margin: 0;
    padding: 0;
    font-weight: bold;
    display: block;
`

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
        <Container>
            <Img src={logo}/>
            <Box>
                <Title>¡Bienvenid@s a mi app!</Title>
                <label>Username</label>
                <input type="text" name='username' value={userData.username} onChange={handleInputChange}/>
                <p>{errors.username}</p>
                <label>Password</label>
                <input type="password" name='password' value={userData.password} onChange={handleInputChange}/>
                <p>{errors.password}</p>
                <button onClick={handleSubmit}>LOGIN</button>
            </Box>
        </Container>
    )
}