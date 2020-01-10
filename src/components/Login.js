import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import Topbar from './Topbar'
import Router from 'next/router'
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'
const StyledWrapper = styled.div`
  
.main{
     display:flex;
   justify-content: center;
   align-items: center;
//    background : DarkGray ;
   width: 100;
   height: 90vh;
}
.container{
    background : white ;
    max-height: 500px;
}
.boxlogin{
    margin:50px;
    width: 300px;
}
p{
    border-bottom: 1.5px solid #2DAAE1;
    color: #143C6D;
}
.status{
    padding: 10px 0px 0px 0px;
    color: #143C6D;
}
`
const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('Not yet logged in');

    const login = async () => {
        const res = await axios.post('/api/psu', { username, password });
        // setLoginStatus(JSON.stringify(res.data))
        console.log(res.data[1])
        if (res.data[1] != '') {
            Router.push('/main')
        }
        else
            setLoginStatus('Wrong password!!!')
    }
    return (

        <StyledWrapper>
            <div className='main'>
                <div className="container">
                    <div className="boxlogin">
                        <p>PSU | PASSPORT</p>
                        <Form.Item ><Input onChange={e => setUsername(e.target.value)} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" /></Form.Item>
                        <Form.Item><Input onChange={e => setPassword(e.target.value)} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </Form.Item><Button onClick={login} type="primary" block>Sign In</Button>
                        <div className='status'>{loginStatus}</div>
                    </div>
                </div>
            </div>
        </StyledWrapper >
    )
}
export default LogIn;